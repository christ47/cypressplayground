describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://phptravels.net");
    cy.viewport(1280, 720);
  });
  it("can find a hotel by city", () => {
    cy.clickSearchHotel();
    cy.clickSearchByCity("Dubai");
    cy.findByText("United Arab Emirates").should("be.visible");
    cy.selectCityOption();
    cy.clickSearch();
  });
});
