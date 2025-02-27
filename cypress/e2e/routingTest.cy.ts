describe('Test routing between two pages', () => {
	it('visit home page', () => {
		cy.visit('/');
		cy.contains('List of TODOs');
	});
	it('visit dialog page', () => {
		cy.visit('/');
		const linkToDialogPage = cy.get('a');
		linkToDialogPage.should('have.attr', 'href', '/dialog-page');
		linkToDialogPage.click();
		cy.contains('Dialog page');
	});
	it('go back to home page', () => {
		cy.visit('/dialog-page');
		const linkToHomePage = cy.get('a');
		linkToHomePage.should('have.attr', 'href', '/');
		linkToHomePage.click();
		cy.contains('List of TODOs');
	});
});
