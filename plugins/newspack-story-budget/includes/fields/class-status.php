<?php
/**
 * Newspack Story Budget - Status class.
 *
 * @package Newspack_Story_Budget
 */

namespace Newspack_Story_Budget\Fields;

use WP_Error;

/**
 * Class representing a single status.
 */
class Status {
	/**
	 * The status slug.
	 *
	 * @var string
	 */
	private $slug;

	/**
	 * The status label.
	 *
	 * @var string
	 */
	private $label;

	/**
	 * The permission callback.
	 *
	 * @var callable|null
	 */
	private $permission_callback;

	/**
	 * Any errors that occurred during creation.
	 *
	 * @var WP_Error|null
	 */
	private $errors;

	/**
	 * Cache of user can use results.
	 *
	 * @var array
	 */
	private $user_can_cache = [];

	/**
	 * Constructor.
	 *
	 * @param array $args {
	 *     Arguments for creating a new status.
	 *
	 *     @type string        $slug               Required. The status slug.
	 *     @type string        $label              Required. The status label.
	 *     @type callable|null $permission_callback Optional. Callback to determine if user can use this status.
	 * }
	 */
	public function __construct( $args ) {
		$this->errors = new WP_Error();

		if ( empty( $args['slug'] ) ) {
			$this->errors->add(
				'missing_slug',
				__( 'Status slug is required.', 'newspack-story-budget' )
			);
		}

		if ( empty( $args['label'] ) ) {
			$this->errors->add(
				'missing_label',
				__( 'Status label is required.', 'newspack-story-budget' )
			);
		}

		if ( $this->has_errors() ) {
			return;
		}

		$this->slug = $args['slug'];
		$this->label = $args['label'];
		$this->permission_callback = ! empty( $args['permission_callback'] ) ? $args['permission_callback'] : null;
	}

	/**
	 * Get the status slug.
	 *
	 * @return string
	 */
	public function get_slug() {
		return $this->slug;
	}

	/**
	 * Get the status label.
	 *
	 * @return string
	 */
	public function get_label() {
		return $this->label;
	}

	/**
	 * Whether the current user can use this status.
	 *
	 * @return bool Whether the current user can use this status.
	 */
	public function current_user_can() {
		return $this->user_can( get_current_user_id() );
	}

	/**
	 * Whether a user can use this status.
	 *
	 * @param int $user_id User ID.
	 * @return bool Whether the user can use this status.
	 */
	public function user_can( $user_id ) {
		if ( ! $this->permission_callback ) {
			return true;
		}

		// memoize the result.
		if ( isset( $this->user_can_cache[ $user_id ] ) ) {
			return $this->user_can_cache[ $user_id ];
		}

		$this->user_can_cache[ $user_id ] = call_user_func( $this->permission_callback, $user_id );

		return $this->user_can_cache[ $user_id ];
	}

	/**
	 * Whether there were any errors during creation.
	 *
	 * @return bool
	 */
	public function has_errors() {
		return $this->errors->has_errors();
	}

	/**
	 * Get any errors that occurred during creation.
	 *
	 * @return WP_Error|null
	 */
	public function get_errors() {
		return $this->errors;
	}

	/**
	 * Convert the status to an array.
	 *
	 * @return array
	 */
	public function to_array() {
		return [
			'slug'                 => $this->get_slug(),
			'label'                => $this->get_label(),
			'current_user_can_use' => $this->current_user_can(),
		];
	}
}
