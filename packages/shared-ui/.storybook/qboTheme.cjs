import { create } from "@storybook/theming";

export default create({
	base: "light",
	colorPrimary: "#ffffff",
	colorSecondary: "#0077c5",

	// Typography
	fontBase:
		"'AvenirNext forINTUIT', 'Avenir', 'Helvetica', 'Arial', sans-serif",

	// UI
	appBg: "#393a3d",
	appContentBg: "#ffffff",
	appBorderColor: "#000000",
	appBorderRadius: 8,

	// Text colors
	textColor: "#000000",
	textInverseColor: "#0077c5",

	// Toolbar default and active colors
	barTextColor: "#393a3d",
	barSelectedColor: "#0077c5",
	barBg: "#ffffff",

	// Form colors
	inputBg: "#ffffff",
	inputBorder: "#393a3d",
	inputTextColor: "#000000",
	inputBorderRadius: 4,

	// Branding
	brandTitle: "Marketing Design System",
	brandUrl: "https://quickbooks.intuit.com/",
	brandImage:
		"https://quickbooks.intuit.com/oidam/intuit/ic/en_us/logos/gwp-footer/quickbooks-gwp-sb-logo.svg",
});
