## Git Strategy

### Main Branch
The `main` branch contains the stable version of the project. All changes in this branch are thoroughly tested and approved.

### Feature Branch
Development work is done in feature branches. Each feature branch is created from the `main` branch and is named according to the feature being developed.

### Running Cypress Tests
The ***npx cypress open*** command launches the Cypress Test Runner in interactive mode. This mode allows you to:

* **Run Tests Interactively:** Select and run individual tests or test suites manually.
* **Debug Tests:** View tests running in real-time, making it easier to debug and inspect their behavior.
* **View Test Results:** Access detailed results and logs for each test, including screenshots and videos if configured.