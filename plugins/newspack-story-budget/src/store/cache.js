/**
 * Helper functions for caching data in session storage.
 */
const STORAGE_KEY_BASE = 'newspack-story-budget-';

// Cache configuration.
export const STORAGE_KEYS = {
	fields: {
		actions: [
			'fetchFields'
		],
		ttl: 1000 * 60 * 60 * 24, // 24 hours
	},
	stories: {
		actions: [
			'refreshStories',
		],
		ttl: 1000 * 60, // 1 minute
	},
	view: {}, // No expiration.
};

/**
 * Encode object to be stored.
 *
 * @param {Object} object Object to encode.
 *
 * @return {string} Encoded object.
 */
export function encode( object ) {
	return JSON.stringify( object );
}

/**
 * Decode object to be read.
 *
 * @param {string} str String to decode.
 *
 * @return {Object} Decoded string.
 */
export function decode( str ) {
	if ( ! str || 'string' !== typeof str ) {
		return str;
	}
	return JSON.parse( str );
}

/**
 * Get a cached object.
 *
 * @param {string} key Cache.
 *
 * @return {Object} Cached data.
 */
export function getCache( key ) {
	if ( ! STORAGE_KEYS.hasOwnProperty( key ) ) {
		return null;
	}
	const cache = decode( sessionStorage.getItem( STORAGE_KEY_BASE + key ) );
	if ( ! cache?.data ) {
		return null;
	}
	return cache;
}

/**
 * Set a cached object.
 *
 * @param {string} key  Cache.
 * @param {Object} data Data to set.
 */
export function setCache( key, data ) {
	if ( ! STORAGE_KEYS.hasOwnProperty( key ) ) {
		return;
	}
	sessionStorage.setItem( STORAGE_KEY_BASE + key, encode( { data, timestamp: Date.now() } ) );
}

/**
 * Delete a cached object.
 *
 * @param {string} key Cache.
 */
export function deleteCache( key ) {
	if ( ! STORAGE_KEYS.hasOwnProperty( key ) ) {
		return;
	}
	sessionStorage.removeItem( STORAGE_KEY_BASE + key );
}
