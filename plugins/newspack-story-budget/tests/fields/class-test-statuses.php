<?php
/**
 * Tests for Statuses class.
 *
 * @package Newspack_Story_Budget
 */

namespace Newspack_Story_Budget\Fields;

use WP_UnitTestCase;

/**
 * Test Statuses class.
 */
class Test_Statuses extends WP_UnitTestCase {
	/**
	 * Test getting all statuses.
	 */
	public function test_get_statuses() {
		$statuses = Statuses::get_statuses();

		// Check that we get an array of Status objects.
		$this->assertIsArray( $statuses );
		$this->assertContainsOnlyInstancesOf( Status::class, $statuses );

		// Check that we have all expected statuses.
		$status_slugs = array_map(
			function( $status ) {
				return $status->get_slug();
			},
			$statuses
		);
		$this->assertContains( 'writing', $status_slugs );
		$this->assertContains( 'editing', $status_slugs );
		$this->assertContains( 'factcheck', $status_slugs );
		$this->assertContains( 'approved', $status_slugs );
		$this->assertContains( 'published', $status_slugs );
	}

	/**
	 * Test editor permission check.
	 */
	public function test_editor_permission_check() {
		// Create an editor user.
		$editor = $this->factory->user->create_and_get(
			[
				'role' => 'editor',
			]
		);

		// Create an author user.
		$author = $this->factory->user->create_and_get(
			[
				'role' => 'author',
			]
		);

		// Test editor permissions.
		$this->assertTrue( Statuses::editor_permission_check( $editor->ID ) );
		$this->assertFalse( Statuses::editor_permission_check( $author->ID ) );
	}

	/**
	 * Test getting statuses as arrays.
	 */
	public function test_get_statuses_arrays() {
		// Set up a test user.
		$editor = $this->factory->user->create_and_get(
			[
				'role' => 'editor',
			]
		);
		wp_set_current_user( $editor->ID );

		$arrays = Statuses::get_statuses_arrays();

		// Check array structure.
		$this->assertIsArray( $arrays );
		foreach ( $arrays as $status_array ) {
			$this->assertArrayHasKey( 'slug', $status_array );
			$this->assertArrayHasKey( 'label', $status_array );
			$this->assertArrayHasKey( 'current_user_can_use', $status_array );
		}

		// Check that editor can use restricted statuses.
		$factcheck_status = array_filter(
			$arrays,
			function( $status ) {
				return $status['slug'] === 'factcheck';
			}
		);
		$factcheck_status = reset( $factcheck_status );
		$this->assertTrue( $factcheck_status['current_user_can_use'] );

		// Switch to author and verify they can't use restricted statuses.
		$author = $this->factory->user->create_and_get(
			[
				'role' => 'author',
			]
		);
		wp_set_current_user( $author->ID );

		$arrays = Statuses::get_statuses_arrays();
		$factcheck_status = array_filter(
			$arrays,
			function( $status ) {
				return $status['slug'] === 'factcheck';
			}
		);
		$factcheck_status = reset( $factcheck_status );
		$this->assertFalse( $factcheck_status['current_user_can_use'] );
	}

	/**
	 * Test status filter hook.
	 */
	public function test_status_filter() {
		add_filter(
			'newspack_story_budget_statuses',
			function( $statuses ) {
				$statuses[] = [
					'label' => 'Custom Status',
					'slug'  => 'custom',
				];
				return $statuses;
			}
		);

		$statuses = Statuses::get_statuses();
		$status_slugs = array_map(
			function( $status ) {
				return $status->get_slug();
			},
			$statuses
		);

		$this->assertContains( 'custom', $status_slugs );
	}
}
