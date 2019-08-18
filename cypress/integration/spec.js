describe('start page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/');
  });

  it('Has an div with class auction', () => {
    cy.get('div.auction')
  });
});

