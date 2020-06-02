# NextJS - Sample integration with Porsche Design System

For further documentation regarding designing websites and the correct usage of the components, 
you can visit our website https://designsystem.porsche.com/.

---

## Get the project up and running

### yarn
* Install dependencies via `yarn install`
* Build the application via `yarn build`
* Run tests via `yarn test`
* Run the application via `yarn start`

---

## Setup

### Requirements
* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)
* [Docker](https://www.docker.com) ([see below](#docker-installation-steps))

### Getting started
1. Clone [`sample-integration-nextjs` repository](https://github.com/porscheui/sample-integration-nextjs)
1. Switch to __project root directory__
1. Execute command `npm login --registry=https://porscheui.jfrog.io/porscheui/api/npm/npm/`
1. Enter username, password (Artifactory API Key, __not__ Artifactory password!) and e-mail address when asked in terminal
1. Execute `cat ~/.npmrc`, find following line `//porscheui.jfrog.io/porscheui/api/npm/npm/:_authToken=` and copy the generated _npm registry token_ from the file to your clipboard
1. Create an `.env` file within __project root directory__ (never push this file to Git because it will contain secrets – by default it's ignored by `.gitignore`)
1. Add _npm registry token_ in following format `PORSCHE_NPM_REGISTRY_TOKEN=YOUR_TOKEN_GOES_HERE`
1. Make sure that Docker app is running
1. Run `./docker.sh run-install` - this may take up to several minutes at first start depending on your internet connection

*Note: `./docker.sh run-install` should be executed after every pull.*

### Docker installation steps
1. Register your Docker account on [Hub-Docker](https://hub.docker.com)
1. Download Docker app locally on your machine and login
1. Start Docker

### Start
1. Switch to __project root directory__
1. Run `./docker.sh run-start` (starts test server for sample-integration-nextjs itself)

### Build
1. Switch to __project root directory__
1. Run `./docker.sh run-build` (builds releasable sample-integration-nextjs npm package)

### Test
1. Switch to __project root directory__
1. Run `./docker.sh run-test` (executes test for sample-integration-nextjs)

## Test the application

It is yet not possible to render our web components in **jsdom**.

To ensure your tests don't fail, we provide mocks for every Porsche Design System component. 
They are distributed in the `@porsche-design-system/components-react` npm package.

We consume the Mocks in the **setupTest.js** file in the root folder.

```
// setupTest.js

jest.mock('@porsche-design-system/components-react', () => {
    return require('@porsche-design-system/components-react/mocks');
});
```
You have to access the mocks in the Mock-Factory of the `jest.mock()` function. We have to use `require` because the mock factory doesn't allow otherwise. 

Use this solution until there is an upgrades to a newer **jsdom** version which provides support for **Web Components**.
In the meantime we keep providing mocks.
 
You find detailed information on how to use mock functions in **Jest** [here](https://jestjs.io/docs/en/mock-functions.html).
