describe("Visits localhost:3000", () => {
  it("Clicks the docs button", () => {
    cy.visit("http://localhost:3000");
    cy.get("#test-me > p").should("exist");
  });
});

export {};
