// ***********************************************
import "@testing-library/cypress/add-commands";
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add("clickSearchHotel", () => {
  cy.get('[data-bs-target="#tab-hotels"]').should("be.visible");
  cy.get('[data-bs-target="#tab-hotels"]').click({ force: true });
});
Cypress.Commands.add("clickSearchByCity", (city) => {
  cy.get("#select2-hotels_city-container").click({ force: true });
  cy.get('[aria-controls="select2-hotels_city-results"]')
    .should("be.visible")
    .type(`${city}`);
  //   cy.get(".select2-search__field").type("{enter}");
});

Cypress.Commands.add("selectCityOption", () => {
  cy.get(".select2-results__option").click();
});

Cypress.Commands.add("clickSearch", () => {
  cy.get("#hotels-search").find(".search_button").click({ force: true });
});
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
