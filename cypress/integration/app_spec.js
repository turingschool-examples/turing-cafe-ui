describe('App Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should load stored reservations on load', () => {
    cy.get('.card').should('have.length', 9)
  })

  it('should display name, date. time, and number of guests on each reservation', () => {
    cy.get('.card-name').should('include.text', 'Leta')
    cy.get('.card-date').should('include.text', '1/21')
    cy.get('.card-time').should('include.text', '6:30')
    cy.get('.card-guests').should('include.text', 12)
  })
})

describe('Form Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should allow the user to enter information in form inputs', () => {
    const name = "Zach"
    cy.get('.form-name')
      .type(name)
      .should('have.value', name)
    const date = "10/22"
    cy.get('.form-date')
      .type(date)
      .should('have.value', date)
    const time = "7:00"
    cy.get('.form-time')
      .type(time)
      .should('have.value', time)
    cy.get('.form-num')
      .type(1)
      .should('have.value', "01")
  })

  it('should allow a user to add a reservation to the page', () => {
    const name = "Zach"
    cy.get('.form-name')
      .type(name)
    const date = "10/22"
    cy.get('.form-date')
      .type(date)
    const time = "7:45"
    cy.get('.form-time')
      .type(time)
    cy.get('.form-num')
      .type(1)
    cy.get('.form-submit').click()
    cy.get('.card').should('have.length', 10)
    cy.get('.card-name').should('include.text', 'Zach')
    cy.get('.card-date').should('include.text', '10/22')
    cy.get('.card-time').should('include.text', '7:45')
    cy.get('.card-guests').should('include.text', "01")
  })
})
