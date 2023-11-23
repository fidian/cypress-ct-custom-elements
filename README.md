A Cypress Framework Definition for testing your custom elements (web components). It simply puts your custom element into the HTML. No other actions are triggered.

To use this framework, first install it.

    npm install cypress-ct-custom-elements

Next, modify your `cypress.config.ts` (or your own config if not using TypeScript) and set the framework.

    import { defineConfig } from 'cypress';

    export default defineConfig({
        component: {
            devServer: {
                bundler: 'vite',
                framework: 'cypress-ct-custom-elements',
                includeShadowDom: true
            }
        }
    });

Finally, add a test file, such as `cypress/component/basic.cy.ts`.

    import { YourComponent } from '../../src';

    customElements.define('your-component', YourComponent);

    describe('basic initialization', () => {
        beforeEach(() => {
            cy.mount('<your-component></your-component>');
        });

        it('passes a test that you have to make', () => {
            cy.get('your-component').should('.......');
        });
    });

See [the documentation](https://docs.cypress.io/guides/component-testing/third-party-definitions#List-of-Framework-Definitions) to Learn how to author a Framework Definition for your favorite library!
