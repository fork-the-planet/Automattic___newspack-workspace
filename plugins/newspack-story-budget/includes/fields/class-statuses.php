<?php
/**
 * Newspack Story Budget - Statuses class.
 *
 * @package Newspack_Story_Budget
 */

namespace Newspack_Story_Budget\Fields;

use Newspack_Story_Budget\Budgets;

/**
 * Class for managing story budget statuses.
 */
class Statuses {
	/**
	 * The taxonomy name.
	 */
	const TAXONOMY = 'newspack_story_status';

	/**
	 * The capability term meta key.
	 */
	const CAPABILITY_META_KEY = 'required_capability';

	/**
	 * Initialize the class.
	 */
	public static function init() {
		add_action( 'init', [ __CLASS__, 'register_taxonomy' ], 5 ); // Before the fields are initialized.
	}

	/**
	 * Register the status taxonomy.
	 */
	public static function register_taxonomy() {
		register_taxonomy(
			self::TAXONOMY,
			Budgets::get_post_types(),
			[
				'labels' => [
					'name'          => __( 'Story Statuses', 'newspack-story-budget' ),
					'singular_name' => __( 'Story Status', 'newspack-story-budget' ),
					'edit_item'     => __( 'Edit Story Status', 'newspack-story-budget' ),
					'add_new_item'  => __( 'Add New Story Status', 'newspack-story-budget' ),
				],
				'public' => false,
			]
		);

		// Register term meta for capability.
		register_term_meta(
			self::TAXONOMY,
			self::CAPABILITY_META_KEY,
			[
				'type'              => 'string',
				'description'       => __( 'Required capability to use this status', 'newspack-story-budget' ),
				'single'            => true,
				'sanitize_callback' => 'sanitize_text_field',
				'show_in_rest'      => true,
			]
		);

		// Register default statuses.
		self::register_default_statuses();
	}

	/**
	 * Register default statuses as taxonomy terms.
	 */
	public static function register_default_statuses() {

		$registered_option_name = 'np_story_budget_default_statuses_initialized';
		if ( get_option( $registered_option_name ) ) {
			return;
		}

		update_option( $registered_option_name, true );

		$default_statuses = [
			[
				'slug'       => 'writing',
				'label'      => __( 'Writing', 'newspack-story-budget' ),
				'capability' => '',
			],
			[
				'slug'       => 'editing',
				'label'      => __( 'Editing', 'newspack-story-budget' ),
				'capability' => '',
			],
			[
				'slug'       => 'factcheck',
				'label'      => __( 'Fact-checking', 'newspack-story-budget' ),
				'capability' => 'edit_others_posts',
			],
			[
				'slug'       => 'approved',
				'label'      => __( 'Approved', 'newspack-story-budget' ),
				'capability' => 'edit_others_posts',
			],
			[
				'slug'       => 'published',
				'label'      => __( 'Published', 'newspack-story-budget' ),
				'capability' => 'edit_others_posts',
			],
		];

		foreach ( $default_statuses as $status ) {
			$term = term_exists( $status['slug'], self::TAXONOMY );

			if ( ! $term ) {
				$term = wp_insert_term(
					$status['label'],
					self::TAXONOMY,
					[
						'slug' => $status['slug'],
					]
				);

				if ( ! is_wp_error( $term ) && ! empty( $status['capability'] ) ) {
					update_term_meta( $term['term_id'], self::CAPABILITY_META_KEY, $status['capability'] );
				}
			}
		}
	}

	/**
	 * Get all available statuses.
	 *
	 * @return Status[] Array of Status objects.
	 */
	public static function get_statuses() {
		$terms = get_terms(
			[
				'taxonomy'   => self::TAXONOMY,
				'hide_empty' => false,
			]
		);

		$statuses = [];
		foreach ( $terms as $term ) {

			$status = new Status( $term );

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

	/**
	 * Get a status by slug.
	 *
	 * @param string $slug The status slug.
	 * @return Status|null The status object or null if not found.
	 */
	public static function get_status( $slug ) {
		$statuses = self::get_statuses();
		foreach ( $statuses as $status ) {
			if ( $slug === $status->get_slug() ) {
				return $status;
			}
		}
		return null;
	}

	/**
	 * Set the status for a post.
	 *
	 * @param int    $post_id The post ID.
	 * @param string $status_slug The status slug.
	 * @return bool|WP_Error True on success, WP_Error on failure.
	 */
	public static function set_post_status( $post_id, $status_slug ) {
		$status = self::get_status( $status_slug );
		if ( ! $status ) {
			return new \WP_Error(
				'invalid_status',
				__( 'Invalid status.', 'newspack-story-budget' )
			);
		}

		if ( ! $status->current_user_can() ) {
			return new \WP_Error(
				'permission_denied',
				__( 'You do not have permission to set this status.', 'newspack-story-budget' )
			);
		}

		$set_terms = wp_set_object_terms( $post_id, $status_slug, self::TAXONOMY );
		if ( is_wp_error( $set_terms ) ) {
			return $set_terms;
		}

		return ! empty( $set_terms );
	}

	/**
	 * Get the status for a post.
	 *
	 * @param int $post_id The post ID.
	 * @return Status|null The status object or null if not set.
	 */
	public static function get_post_status( $post_id ) {
		$terms = wp_get_object_terms( $post_id, self::TAXONOMY );
		if ( is_wp_error( $terms ) || empty( $terms ) ) {
			return null;
		}
		return new Status( $terms[0] );
	}
}
