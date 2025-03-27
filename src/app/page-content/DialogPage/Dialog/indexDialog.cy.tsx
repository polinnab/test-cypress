// cypress/component/Dialog.spec.ts
import React from 'react';
import { Dialog } from '.';

describe('<Dialog />', () => {
	beforeEach(() => {
		cy.mount(<Dialog isOpen={true} close={() => {}} />);
	});
	it('renders', () => {});
	it('renders the first step with all fields', () => {
		cy.contains('Test form dialog');

		cy.contains('Select campaign settings').should('have.class', 'Mui-active');

		// Check form fields
		cy.get('input[name="campaignName"]').should('be.visible');
		cy.get('input[name="budget"]').should('be.visible');

		// Check buttons
		cy.contains('Next').should('be.visible');
		cy.contains('Close').should('be.visible');
	});

	it('validates required fields when clicking Next', () => {
		cy.contains('Next').click();

		// Check validation messages
		cy.contains('Campaign Name is required').should('be.visible');
		cy.contains('Budget is required').should('be.visible');
	});

	it('validates minimum value for Budget', () => {
		cy.get('input[name="budget"]').type('0'); // Budget must be at least 1
		cy.contains('Next').click();

		cy.contains('Budget must be at least 1').should('be.visible');
	});

	it('proceeds to the next step when valid input is provided', () => {
		// Fill valid data
		cy.get('input[name="campaignName"]').type('Valid Campaign');
		cy.get('input[name="budget"]').type('100');

		// Click Next
		cy.contains('Next').click();

		// Ensure first step validation messages are gone
		cy.contains('Campaign Name is required').should('not.exist');
		cy.contains('Budget is required').should('not.exist');

		// Check that the second step is now displayed
		cy.contains('Create an ad group').should('have.class', 'Mui-active');
	});
});
