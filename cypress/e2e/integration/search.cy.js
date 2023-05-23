describe('Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/search')
  })

  it('should render an input box', () => {
    cy.get('input').should('exist')
  })

  it('should render a Submit button', () => {
    cy.get('Button').should('exist')
    cy.get('Button').contains('Submit')
  })

  it('should render a clear button', () => {
    cy.get('button').should('exist')
    cy.get('button').contains('Clear')
  })

  it('should return a card when searching for a value', () => {
    cy.get('input').type('humility')
    cy.get('Button.btn-lg').first().click()
    cy.get('div.card').should('exist')
    cy.get('div.chip').contains('humility')
    cy.get('a.text-base-content').contains('Edit')
  })
})
