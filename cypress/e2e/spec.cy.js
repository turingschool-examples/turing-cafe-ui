import reservations from "../fixtures/mockReservations"

describe('As a user, I can navigate to the homepage and see: the App title, previous reservations, and a form to make new reservations', () => {

  beforeEach(()=> {
    cy.intercept('http://localhost:3001/api/v1/reservations', reservations)
    cy.visit('http://localhost:3000')
  })

  it('An application title is visible upon page load:', () => {
    cy.get('.app-title')
    .should('be.visible').should('exist')
    .contains('Turing Cafe Reservations')
  })

  it('Previous reservations are visible upon page load:', ()=> {
    cy.get('.res-container').should('exist').should('be.visible').should('have.length', 1)

    cy.get('.single-res').should('exist').should('be.visible').should('have.length', 9)
    .first().contains('Name: Christie')

    cy.get('.single-res')
    .last().contains('Name: Brittany')

  })

  it('The form to make new reservations is visible upon page load:', ()=> {
    cy.get('.input-box').should('exist').should('be.visible')

    cy.get('.input-field').should('exist').should('be.visible').should('have.length', 4)

    cy.get('.submit-button').should('exist').should('be.visible').contains('Make Reservation')
  })

  it('As a user interacts with the form, the values of those input fields are updated with each change (controlled form):', ()=> {
    cy.get('#input-date').should('be.visible')
    .type('12/25')
    .should('have.value', '12/25')

    cy.get('#input-name').should('be.visible')
    .type('Shane')
    .should('have.value', 'Shane')

    cy.get('#input-number').should('be.visible')
    .type('2')
    .should('have.value', '2')

    cy.get('#input-time').should('be.visible')
    .type('12:35')
    .should('have.value', '12:35')
  })
})