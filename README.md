# Temporal API Angular App

Testing the use of the [@js-temporal/polyfill](https://www.npmjs.com/package/@js-temporal/polyfill) to only type the `Temporal` object in an Angular application. Check out the [live version](https://alexlehner86.github.io/temporal-api-angular-app/) on GitHub Pages (will only work in Firefox, Chrome and Edge).

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.1.

## Integration of Temporal API

The web client uses the [Temporal API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal), the modern JavaScript object for date and time management. As Angular 21 and TypeScript don't support `Temporal` yet, the project includes the package [@js-temporal/polyfill](https://www.npmjs.com/package/@js-temporal/polyfill) as a dev dependency.

The file `src/types/temporal.d.ts` declares the `Temporal` object globally, referencing the type definitions from `@js-temporal/polyfill`. This enables the use of all objects and methods that are part of the API, e.g., `Temporal.ZonedDateTime.from("...")`.

If you want to use Temporal types for variables or class properties, you need to import and use the type definitions the following way:

```
import type { Temporal as TemporalType } from "@js-temporal/polyfill";

let myVar: TemporalType.ZonedDateTime = ...
```

This way, the `Temporal` object and all its properties and methods are typed and can be comfortably used in implementation. During runtime of the web application, the actual global `Temporal` object of the browser will be used.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
