const viewPorts = {
	mobile: {
		name: "Mobile",
		styles: {
			width: "30rem",
			height: "2648px",
		},
	},
	tablet: {
		name: "Tablet",
		styles: {
			width: "48rem",
			height: "2648px",
		},
	},
	desktop: {
		name: "Desktop",
		styles: {
			width: "64rem",
			height: "2648px",
		},
	},
};

const backgrounds = {
	default: "white",
	values: [
		{
			name: "White",
			value: "#ffffff",
		},
		{
			name: "Tofu",
			value: "#f7f8f3",
		},
	],
};

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	viewport: { viewports: viewPorts },
	backgrounds: backgrounds,
};
