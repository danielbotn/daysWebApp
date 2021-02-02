/* eslint-disable no-undef */
Cypress.on("uncaught:exception", () => 
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

describe("Should Log the user into the system", () => {
	it("Writes username and password into inputs and clicks login button", () => {
		cy.get("input[type=\"text\"]").type(Cypress.env("CYPRESS_USER_ONE"));
		cy.get("input[type=\"password\"]").type(Cypress.env("CYPRESS_PASSWORD_ONE"));
		cy.get("#loginButton").should("be.visible").click();
	});
	it("Checks if the dashboard page appears", () => {
		cy.get(".font-semibold.tracking-wide.uppercase.text-4xl").contains("Your Boards");
		cy.wait(2000)
		cy.get(Cypress.env("CYPRESS_GRD_LYF")).contains("Gabriela Ros Lyf");
		cy.get(Cypress.env("CYPRESS_NOTA_TANNTRAD")).contains("Nota tannþráð");
		cy.get(".p-0").should("not.be.disabled");
	});
	it("Checks if the logo appears", () => {
		cy.get("a[href*=\"/\"]").then(($image) => {
			const logo = $image[0].children[0].alt
			expect(logo).to.eq("logo");
		})
	});
	it("Checks if logout button appears", () => {
		cy.get(".px-6").then(($logout) => {
			const logout = $logout[0].outerText;
			expect(logout).to.eq("Logout");
		});
	});
});
