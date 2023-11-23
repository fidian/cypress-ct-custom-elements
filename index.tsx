import { getContainerEl, setupHooks } from "@cypress/mount-utils";

let dispose: () => void;

function cleanup() {
  dispose?.();
}

interface MountingOptions {
  log?: boolean;
}

export function mount(
  html: string,
  options: MountingOptions = {}
) {
  const root = getContainerEl();
  root.innerHTML = html;

  return cy.wait(0, { log: false }).then(() => {
    if (options.log !== false) {
      Cypress.log({
        name: "mount",
        message: "Mounted component",
      });
    }
  });
}

setupHooks(cleanup);
