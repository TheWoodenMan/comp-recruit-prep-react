describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login')
  })

  it('should render a Button', () => {
    cy.get('Button').should('exist')
  })

  it('should show text Sign in with Google', () => {
    cy.get('span').contains('Sign in with Google')
  })
})
