module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	parserOptions: {
		"project": ["./tsconfig.json"]
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"array-bracket-spacing": ["error", "never"],
		"brace-style": ["error", "1tbs"],
		"comma-dangle": ["error", "always-multiline"],
		"curly": ["error"],
		"indent": ["error", "tab"],
		"object-curly-spacing": ["error", "never"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"@typescript-eslint/no-unnecessary-condition": ["error"],
		"@typescript-eslint/no-unused-vars": ["error"]
	}
}