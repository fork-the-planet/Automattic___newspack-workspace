<?php
/**
 * Newspack Story Budget - Statuses class.
 *
 * @package Newspack_Story_Budget
 */

namespace Newspack_Story_Budget\Fields;

/**
 * Class for managing story budget statuses.
 */
class Statuses {
	/**
	 * Check if a user has editor permissions.
	 *
	 * @param int $user_id The user ID to check.
	 * @return bool Whether the user has editor permissions.
	 */
	public static function editor_permission_check( $user_id ) {
		return user_can( $user_id, 'edit_others_posts' );
	}

	/**
	 * Get all available statuses.
	 *
	 * @return Status[] Array of Status objects.
	 */
	public static function get_statuses() {
		/**
		 * Filters the story budget statuses.
		 *
		 * @param array $statuses Array of status definitions.
		 */
		$status_configs = apply_filters(
			'newspack_story_budget_statuses',
			[
				[
					'label' => __( 'Writing', 'newspack-story-budget' ),
					'slug'  => 'writing',
				],
				[
					'label' => __( 'Editing', 'newspack-story-budget' ),
					'slug'  => 'editing',
				],
				[
					'label'               => __( 'Fact-checking', 'newspack-story-budget' ),
					'slug'                => 'factcheck',
					'permission_callback' => [ __CLASS__, 'editor_permission_check' ],
				],
				[
					'label'               => __( 'Approved', 'newspack-story-budget' ),
					'slug'                => 'approved',
					'permission_callback' => [ __CLASS__, 'editor_permission_check' ],
				],
				[
					'label'               => __( 'Published', 'newspack-story-budget' ),
					'slug'                => 'published',
					'permission_callback' => [ __CLASS__, 'editor_permission_check' ],
				],
			]
		);

		$statuses = [];
		foreach ( $status_configs as $config ) {
			$status = new Status( $config );

			if ( ! $status->has_errors() ) {
				$statuses[] = $status;
			}
		}

		return $statuses;
	}

	/**
	 * Get all available statuses as arrays.
	 *
	 * @return array Array of status arrays.
	 */
	public static function get_statuses_arrays() {
		return array_map(
			function( $status ) {
				return $status->to_array();
			},
			self::get_statuses()
		);
	}
}
