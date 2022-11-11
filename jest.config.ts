const nextJest = require('next/jest');
import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	moduleNameMapper: {
		// Handle module aliases (this will be automatically configured for you soon)
		'^@/components/(.*)$': '<rootDir>/components/$1',

		'^@/pages/(.*)$': '<rootDir>/pages/$1',
	},
	transform: {
		'.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
	},
	testEnvironment: 'jest-environment-jsdom',
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.test.json',
		},
	},
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
