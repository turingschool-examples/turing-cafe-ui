describe('dashboard display', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("should title of the page", () => {
    cy.get('.app-title')
    .contains('Turing Cafe Reservations')
  } )

  it('should display reservations', () => {
    cy.get('.resy-container')
    .get(".res-container")
    .get(".card")
    .contains("h1", 'Christie')
    .get("h2")
    .contains("12/29")
    .contains("@")
    .contains("7:00")
    .get("button")
    .contains("Delete Reservation")
  })
  
  it('should have a form with a button', () => {
    cy.get('.resy-form')
    .get('form')
    .get('input')
    .get('button').contains('Make Reservation')
  })
})