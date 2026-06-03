/**
 * InsightsWizard
 *
 * Top-level chrome for the Newspack Insights wizard. Owns active tab,
 * date range, and comparison-mode state; renders header (title +
 * LastUpdated), date picker, comparison toggle, tab navigation, and
 * the lazy-loaded tab content.
 *
 * Tab routing happens entirely client-side via URL query persistence so
 * tabs are linkable and refresh restores state.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useCallback, useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ComparisonToggle from './ComparisonToggle';
import DateRangePicker from './DateRangePicker';
import LastUpdated from './LastUpdated';
import TabContent from './TabContent';
import TabNavigation, {
	ALL_TABS,
	type TabKey,
	type TabVisibility,
} from './TabNavigation';
import useComparisonMode from '../state/useComparisonMode';
import useDateRange, { type DateRange } from '../state/useDateRange';

export interface InsightsBootConfig {
	tabs: TabVisibility;
	defaultDateRange: DateRange;
	defaultComparison: boolean;
	timezone: string;
	settingsUrl: string;
	/**
	 * Optional ISO 8601 timestamp of the most recent cache update for the
	 * currently-displayed data. Null while no data has loaded.
	 */
	lastUpdated?: string | null;
}

export interface InsightsWizardProps {
	config: InsightsBootConfig;
}

const TAB_KEYS = ALL_TABS.map( t => t.key );

const isTabKey = ( v: unknown ): v is TabKey =>
	typeof v === 'string' && ( TAB_KEYS as readonly string[] ).includes( v );

/**
 * Read initial active tab from URL ?tab=, falling back to the first
 * visible tab. (Not necessarily 'audience' — if audience is hidden
 * for this publisher, the first visible one wins.)
 */
const readInitialTab = ( visibility: TabVisibility ): TabKey => {
	const visible = TAB_KEYS.filter( k => visibility[ k as TabKey ] ) as TabKey[];
	const fallback = visible[ 0 ] ?? 'audience';
	if ( typeof window === 'undefined' ) {
		return fallback;
	}
	const fromUrl = new URLSearchParams( window.location.search ).get( 'tab' );
	if ( isTabKey( fromUrl ) && visibility[ fromUrl ] ) {
		return fromUrl;
	}
	return fallback;
};

const writeTabToUrl = ( tab: TabKey ) => {
	if ( typeof window === 'undefined' ) {
		return;
	}
	const params = new URLSearchParams( window.location.search );
	params.set( 'tab', tab );
	const next = `${ window.location.pathname }?${ params.toString() }${ window.location.hash }`;
	window.history.replaceState( window.history.state, '', next );
};

const InsightsWizard = ( { config }: InsightsWizardProps ) => {
	const [ activeTab, setActiveTabState ] = useState< TabKey >( () =>
		readInitialTab( config.tabs )
	);

	const setActiveTab = useCallback( ( tab: TabKey ) => {
		setActiveTabState( tab );
	}, [] );

	useEffect( () => {
		writeTabToUrl( activeTab );
	}, [ activeTab ] );

	const { range, setPreset, setCustom } = useDateRange( {
		defaultRange: config.defaultDateRange,
	} );

	const { enabled: comparisonEnabled, setEnabled: setComparisonEnabled, previousRange } =
		useComparisonMode( {
			defaultEnabled: config.defaultComparison,
			currentRange: range,
		} );

	return (
		<div className="newspack-insights">
			<header className="newspack-insights__header">
				<div className="newspack-insights__header-left">
					<h1 className="newspack-insights__title">
						{ __( 'Insights', 'newspack-plugin' ) }
					</h1>
				</div>
				<div className="newspack-insights__header-right">
					<DateRangePicker
						range={ range }
						onPresetChange={ setPreset }
						onCustomChange={ setCustom }
					/>
					<ComparisonToggle
						enabled={ comparisonEnabled }
						onChange={ setComparisonEnabled }
					/>
					<LastUpdated timestamp={ config.lastUpdated ?? null } />
				</div>
			</header>

			<TabNavigation
				activeTab={ activeTab }
				visibility={ config.tabs }
				onTabChange={ setActiveTab }
			/>

			<TabContent
				activeTab={ activeTab }
				range={ range }
				previousRange={ previousRange }
			/>
		</div>
	);
};

export default InsightsWizard;
