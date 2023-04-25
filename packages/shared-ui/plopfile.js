export default function (plop) {
	// create your generators here
	plop.setGenerator("component", {
		description: "Lets generate Component",
		prompts: [
			{
				type: "rawlist",
				choices: ["atoms", "molecules", "organisms", "sections"],
				name: "componenttype",
				message: "What is the type of Component",
			},
			{
				type: "input",
				name: "componentname",
				message: "What will be the name of component",
			},
		], // array of inquirer prompts
		actions: [
			{
				type: "add",
				path: "src/components/{{componenttype}}/{{pascalCase componentname}}/{{pascalCase componentname}}.tsx",
				templateFile: "plopTemplate/component.tsx.hbs",
			},
			{
				type: "add",
				path: "src/components/{{componenttype}}/{{pascalCase componentname}}/{{pascalCase componentname}}.module.scss",
				templateFile: "plopTemplate/component.module.scss.hbs",
			},
			{
				type: "add",
				path: "src/components/{{componenttype}}/{{pascalCase componentname}}/{{pascalCase componentname}}.stories.tsx",
				templateFile: "plopTemplate/component.stories.tsx.hbs",
			},
			{
				type: "add",
				path: "src/components/{{componenttype}}/{{pascalCase componentname}}/index.ts",
				templateFile: "plopTemplate/index.ts.hbs",
			},
			{
				type: "add",
				path: "src/components/{{componenttype}}/{{pascalCase componentname}}/README.md",
				templateFile: "plopTemplate/README.md.hbs",
			},
			{
				path: "src/components/{{componenttype}}/index.ts",
				pattern: /(\/\/ COMPONENT IMPORTS)/g,
				template:
					"import {{pascalCase componentname}} from './{{pascalCase componentname}}';\n$1",
				type: "modify",
			},
			{
				path: "src/components/{{componenttype}}/index.ts",
				pattern: /(\/\/ COMPONENT EXPORTS)/g,
				template: "{{pascalCase componentname}},\n$1",
				type: "modify",
			},
		], // array of actions
	});
}
