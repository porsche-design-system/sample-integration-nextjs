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


### npm
* Install dependencies via `npm install`
* Build the application via `npm run build`
* Run tests via `npm test`
* Run the application via `npm start`

---

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
