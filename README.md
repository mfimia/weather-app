# Weather App

A modern and responsive weather application built with Next.js and Tailwind CSS. Users can select a city and view its current weather as well as a 3-day forecast.

## Get Started

1. Preparation
   Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm

# Install dependencies:

```sh
npm install
```

2. Running the Application

```sh
# To run the application in development mode:
npm run dev
# This will spin up the application on http://localhost:3000
```

3. Run tests

```sh
# To run all tests:
npm run test
```

4. Build for Production

```sh
# To create a production-ready build:
npm run build
```

## Development

Dive into the application structure:

- src/app: This is the main application logic including API routes, global styles, layout, and utility functions.
- api/weather: Contains the route related to fetching weather data.
  - utils: Contains the JSON Renderer utility.
  - types: Contains type definitions for the application.
  - src/components: All React components utilized within the application can be found here.
- src/hooks: Contains custom React hooks.
- src/data: Static mock weather data for 3 European cities.

### Structure

- .husky: Contains configuration for git hooks. Currently, it lints the code before commits.
- next-env.d.ts: Contains types for Next.js.
- next.config.js: Next.js configuration file.
- postcss.config.js: Configuration for PostCSS, mainly used here for Tailwind CSS.
- tailwind.config.ts: Configuration for Tailwind CSS.
- tsconfig.json: TypeScript configuration file.

## Details

### .husky

Husky is used to ensure code quality by running lint and formatter checks before each commit.

### src/app

Main application logic and utilities reside here. You'll find API routes, global styles, layouts, type definitions, and utilities. App is the latest router feature of [NextJS](https://nextjs.org/docs#app-router-vs-pages-routerorg/).

### src/components

Components for the application.

### public

Standard NextJS directory containing all necessary static assets for your application.

## Deployment

Follow the standard [Next.js deployment procedure](https://nextjs.org/docs/pages/building-your-application/deploying). The application is designed to run in any environment with minimal configurations.
