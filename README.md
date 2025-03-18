

## Introduction
Automation involves using software tools and scripts to perform tasks that would typically be done manually. In software testing, automation helps execute test cases and compare actual results with expected outcomes efficiently.

## Why Use Cypress?

Cypress is a powerful framework for web automation with several advantages:

- **Fast and Efficient**: Executes tests in the same run loop as the application, making them faster.
- **Real-time Testing**: Provides live application views, simplifying debugging.
- **Automatic Waiting**: Waits for DOM elements before interactions, reducing flaky tests.
- **Easy Setup**: Simple installation and configuration.
- **Powerful API**: Simulates user interactions, makes HTTP requests, and interacts with the DOM.
- **Continuous Integration Support**: Compatible with CI tools like Jenkins, CircleCI, and TravisCI.

### Benefits of POM:

- **Better Code Organization**: Keeps locators and actions in a separate file, making tests cleaner.
- **Reusability**: Common actions can be reused across multiple test cases.
- **Maintainability**: Changes in UI require updates only in one place.
- **Readability**: Test cases become more readable by abstracting the page interactions.

## Technology used:

- Cypress
- Visual Studio Code
- Javascript
- cypress-mochawesome-reporter

## How to run this project

- Clone this project
- First install dependencies:
  `npm install`

- Then run the test:
  `npx cypress open` // for browser mode
  or
  `npx cypress run` // for headless mode

## Scenerio:

1. Visit https://tooba-web.myababil.com/f/ramadan-campaign
2. Selecting a category
3. Selecting donation amount and proceed next
4. Fill up "Donor details" amount and proceed next
5. Entering card details and paying the amount
6. Validating after donation successful
7. After completing run, generated cypress-mochawesome-report

## Test case check list based on the Scenerio:

-

## Mocha Awesome Report:

## Automation Output Video:
