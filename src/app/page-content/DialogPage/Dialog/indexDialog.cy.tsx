// cypress/component/Dialog.spec.ts
import React from 'react';
import { Dialog } from '.';

describe('<Dialog />', () => {
	beforeEach(() => {
		cy.mount(<Dialog isOpen={true} close={() => {}} />);
	});
	it('renders', () => {
		cy.contains('Test form dialog');
	});
	it('can go to next step', () => {
		cy.contains('Select campaign settings').should('have.class', 'Mui-active');

		cy.get('button').contains('Next').click();

		cy.contains('Create an ad group').should('have.class', 'Mui-active');
	});
});
