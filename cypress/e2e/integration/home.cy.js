describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('should render a navbar', () => {
    cy.get('nav').should('exist')
  })

  it('should have a series of links that lead to other pages', () => {
    cy.get('a').each(link => {
      cy.request(link.prop('href'))
    })
  })

  // it('should go to the about page when the link is clicked', () => {
  //   cy.get('nav').within(() => {
  //     cy.get('a[href*="/about"]').last().click()
  //     cy.get('div.slate-900').should('include', 'About')
  //     cy.go('back')
  //   })
  // })

  // it('should go to the search page when the link is clicked', () => {
  //   cy.get('nav').within(() => {
  //     cy.get('a[href*="/search"]').last().click()
  //     cy.get('input').its('placeholder').should('eq', 'Search by value')
  //     cy.go('back')
  //   })
  // })

  // it('should go to the docs page when the link is clicked', () => {
  //   cy.get('nav').within(() => {
  //     cy.get('a[href*="/docs"]').last().click()
  //     cy.get('div.slate-900').should('include', 'Docs')
  //     cy.go('back')
  //   })
  // })

  // it('should go to the login page when the link is clicked', () => {
  //   cy.get('nav').within(() => {
  //     cy.get('a[href*="/login"]').last().click()
  //     cy.get('input').first().its('placeholder').should('eq', 'enter email')
  //     cy.go('back')
  //   })
  // })

  it('should render a footer', () => {
    cy.get('footer').should('exist')
  })
})
