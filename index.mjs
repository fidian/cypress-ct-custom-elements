import { getContainerEl, setupHooks } from "@cypress/mount-utils";

let root;

function cleanup() {
    if (root) {
        root.innerHTML = '';
        root = null;
    }
}

export function mount(html, options = {}) {
    root = getContainerEl();
    root.innerHTML = html;
    return cy.wait(0, { log: false }).then(() => {
        if (options.log !== false) {
            Cypress.log({
                name: "mount",
                message: "Mounted component"
            });
        }
    });
}

setupHooks(cleanup);
