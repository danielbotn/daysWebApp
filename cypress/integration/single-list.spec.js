/* eslint-disable no-undef */
import { getDay, getMonth, getYear } from "../helpers/helperFunctions";

Cypress.on(
  "uncaught:exception",
  () =>
    // returning false here prevents Cypress from
    // failing the test
    false
);

describe("Cypress", () => {
  it("Cypress is up and running", () => {
    expect(true).to.equal(true);
  });
});

describe("Visits localhost 3000", () => {
  it("Visits the app", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("Should Log the user into the system and click on Nota Tannþráð", () => {
  it("Writes username and password into inputs and clicks login button", () => {
    cy.get('input[type="text"]').type(Cypress.env("CYPRESS_USER_ONE"));
    cy.get('input[type="password"]').type(Cypress.env("CYPRESS_PASSWORD_ONE"));
    cy.get("#loginButton").should("be.visible").click();
  });
  it("Checks if the dashboard page appears", () => {
    cy.get(".font-semibold.tracking-wide.uppercase.text-4xl").contains(
      "Your Boards"
    );
    cy.wait(2000);
    cy.get(Cypress.env("CYPRESS_GRD_LYF")).contains("Gabriela Ros Lyf");
    cy.get(Cypress.env("CYPRESS_NOTA_TANNTRAD")).contains("Nota tannþráð");
    cy.get(".p-0").should("not.be.disabled");
  });
  it("Clicks on Nota tannþráð list and checks two plus days", () => {
    const fullDate = `${getYear()}-${getMonth()}-${getDay()}`;
    cy.get('img[src="https://picsum.photos/id/182/200/300"]').then(($image) => {
      $image[0].click();
      cy.wait(8000);
      cy.get("h1").contains("Nota tannþráð").should("be.visible");
      cy.get(`td[data-date="${fullDate}"]`).click();
      // Check if the event was clicked
      cy.get(`td[data-date="${fullDate}"]`)
        .children()
        .children()
        .first()
        .siblings()
        .first()
        .should("have.class", "fc-daygrid-day-events");
    });
  });
});
