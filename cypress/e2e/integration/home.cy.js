describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should render a navbar', () => {
    cy.get('nav').should('exist')
  })

  it('should render a footer', () => {
    cy.get('footer').should('exist')
  })
})
