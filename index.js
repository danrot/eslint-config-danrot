module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		"project": ["./tsconfig.json"]
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"array-bracket-spacing": ["error", "never"],
		"arrow-spacing": ["error", {before: true, after: true}],
		"brace-style": ["error", "1tbs"],
		"comma-dangle": ["error", "always-multiline"],
		"curly": ["error"],
		"indent": ["error", "tab"],
		"keyword-spacing": ["error", {before: true, after: true}],
		"no-alert": ["error"],
		"no-console": ["error"],
		"no-debugger": ["error"],
		"no-mixed-spaces-and-tabs": ["error"],
		"no-multi-spaces": ["error"],
		"no-trailing-spaces": ["error"],
		"no-undef": ["error"],
		"object-curly-spacing": ["error", "never"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"space-before-blocks": ["error", "always"],
		"space-before-function-paren": ["error", "never"],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": ["error"],
		"space-unary-ops": ["error", {words: true, nonwords: false}],
		"@typescript-eslint/no-unnecessary-condition": ["error"],
		"@typescript-eslint/no-unused-vars": ["error"]
	}
}
