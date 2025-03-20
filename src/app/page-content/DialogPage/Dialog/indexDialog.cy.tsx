// cypress/component/Dialog.spec.ts
import React from 'react';
import { Dialog } from '.';

describe('<Dialog />', () => {
	it('renders', () => {
		cy.mount(<Dialog isOpen={true} close={() => {}} />);
	});

	it('closes when close button is clicked', () => {
		const closeSpy = cy.spy();
		cy.mount(<Dialog isOpen={true} close={closeSpy} />);

		cy.contains('Close').click();
		cy.wrap(closeSpy).should('have.been.called');
	});
});
