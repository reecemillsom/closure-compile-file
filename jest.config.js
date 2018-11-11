module.exports = {
	verbose: true,
	collectCoverageFrom: [
		"<root-dir>/src/**/*!(spec).ts"
	],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90
		}
	},
	coverageReporters: ["text"],
	moduleFileExtensions: ["ts", "js"],
	testMatch: ['<rootDir>/src/**/*.spec.ts'],
};
