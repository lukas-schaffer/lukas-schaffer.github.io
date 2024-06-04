import type { PostHideElements } from '~/content/config';

export const Site = 'https://lukas-schaffer.github.io';
export const SiteLanguage = 'en-GB';
export const SiteTitle = "Lukas' Blog - 95% Vegan!";
export const SiteDescription =
	"Lukas' Blog where he can throw his disordered thoughts at random people like ninja stars.";
export const AdminName = 'Zirruedo';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	github: { url: 'https://github.com/lukas-schaffer' },
	twitter: { url: 'https://x.com/Lukas_Schaffer_' },
	rss: { url: '/rss.xml' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'lukas-schaffer/lukas-schaffer.github.io',
	'data-repo-id': 'R_kgDOMBXO2w',
	'data-category': 'Comments',
	'data-category-id': 'DIC_kwDOMBXO284Cf1LI',
	'data-mapping': 'pathname',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'bottom',
	'data-theme': 'preferred_color_scheme',
	'data-lang': 'en',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
