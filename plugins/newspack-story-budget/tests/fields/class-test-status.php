<?php
/**
 * Tests for Status class.
 *
 * @package Newspack_Story_Budget
 */

namespace Newspack_Story_Budget\Fields;

use WP_UnitTestCase;

/**
 * Test Status class.
 */
class Test_Status extends WP_UnitTestCase {
	/**
	 * Test status creation and basic getters.
	 */
	public function test_status_creation() {
		$status = new Status(
			[
				'slug'  => 'test-status',
				'label' => 'Test Status',
			]
		);

		$this->assertFalse( $status->has_errors() );
		$this->assertEquals( 'test-status', $status->get_slug() );
		$this->assertEquals( 'Test Status', $status->get_label() );
	}

	/**
	 * Test status creation validation.
	 */
	public function test_status_validation() {
		// Test missing slug.
		$status = new Status(
			[
				'label' => 'Test Status',
			]
		);
		$this->assertTrue( $status->has_errors() );
		$this->assertContains( 'Status slug is required.', $status->get_errors()->get_error_messages() );

		// Test missing label.
		$status = new Status(
			[
				'slug' => 'test-status',
			]
		);
		$this->assertTrue( $status->has_errors() );
		$this->assertContains( 'Status label is required.', $status->get_errors()->get_error_messages() );
	}

	/**
	 * Test permission checking.
	 */
	public function test_permission_checking() {
		$permission_check_count = 0;

		$status = new Status(
			[
				'slug'                => 'test-status',
				'label'               => 'Test Status',
				'permission_callback' => function( $user_id ) use ( &$permission_check_count ) {
					$permission_check_count++;
					return $user_id === 1;
				},
			]
		);

		// Test user with ID 1 can use the status.
		$this->assertTrue( $status->user_can( 1 ) );
		$this->assertEquals( 1, $permission_check_count );

		// Test user with ID 2 cannot use the status.
		$this->assertFalse( $status->user_can( 2 ) );
		$this->assertEquals( 2, $permission_check_count );

		// Test caching - calling user_can() again should not increment the counter.
		$this->assertTrue( $status->user_can( 1 ) );
		$this->assertEquals( 2, $permission_check_count );
	}

	/**
	 * Test default permissions when no callback is provided.
	 */
	public function test_default_permissions() {
		$status = new Status(
			[
				'slug'  => 'test-status',
				'label' => 'Test Status',
			]
		);

		$this->assertTrue( $status->user_can( 1 ) );
		$this->assertTrue( $status->user_can( 2 ) );
	}

	/**
	 * Test current_user_can method.
	 */
	public function test_current_user_can() {
		$status = new Status(
			[
				'slug'                => 'test-status',
				'label'               => 'Test Status',
				'permission_callback' => function( $user_id ) {
					return $user_id === get_current_user_id();
				},
			]
		);

		// Set up a test user.
		$user_id = $this->factory->user->create();
		wp_set_current_user( $user_id );

		$this->assertTrue( $status->current_user_can() );

		// Switch to a different user.
		wp_set_current_user( $this->factory->user->create() );
		$this->assertFalse( $status->current_user_can() );
	}

	/**
	 * Test to_array method.
	 */
	public function test_to_array() {
		$status = new Status(
			[
				'slug'                => 'test-status',
				'label'               => 'Test Status',
				'permission_callback' => function( $user_id ) {
					return $user_id === get_current_user_id();
				},
			]
		);

		$user_id = $this->factory->user->create();
		wp_set_current_user( $user_id );

		$array = $status->to_array();
		$this->assertArrayHasKey( 'slug', $array );
		$this->assertArrayHasKey( 'label', $array );
		$this->assertArrayHasKey( 'current_user_can_use', $array );
		$this->assertEquals( 'test-status', $array['slug'] );
		$this->assertEquals( 'Test Status', $array['label'] );
		$this->assertTrue( $array['current_user_can_use'] );
	}
}
