describe('Turing Cafe', () => {

  const baseURL = 'http://localhost:3000';

  beforeEach(() => {
    cy.fixture('res-data.json')
      .then(reservations => {
        cy.intercept('http://localhost:3001/api/v1/reservations', {
          method: 'GET',
          statusCod: 200,
          body: reservations.allReservations,
        })
      })
    cy.visit(baseURL);
  })

  describe('Page Render', () => {

    it('Should display the page title', () => {
      cy.get('h1').contains('Turing Cafe');
    })

    it('Should display the correct URL', () => {
      cy.url().should('eq', 'http://localhost:3000/')
    })

    it('Should display the background image', () => {
      cy.get('.App').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/cafe-img.12c28102.jpeg")')
    })

    it('Should contain a form with three inputs and a button', () => {
      cy.get('form').children().should('have.length', 5);
      cy.get('form').find('input').should('have.length', 4)
      cy.get('form').find('button').should('have.length', 1)
    })

    it('Should display all reservations from the fetched dataset', () => {
      cy.get('.resy-container')
        .find('.resy-card').should('have.length', 9)
    });

     it('Should display all fetched data in a given reservation card', () => {
      cy.get('.resy-container').find('#1')
        .get('.name').contains('Christie')
        .get('.date').contains('12/29')
        .get('.time').contains('7:00')
        .get('.number').contains(12)
    });

     it('Should contain a "Cancel" button in a given reservation card', () => {
      cy.get('.resy-container').find('#1')
        .get('button').contains('Cancel')
    });

  })

  describe('Page Functionality', () => {

  it('Should be able to type info into form inputs', () => {
      cy.get('.name').type('Pete')
        .should('have.value', 'Pete')

      cy.get('.date').type('06/24')
        .should('have.value', '06/24')

      cy.get('.time').type('3:00')
        .should('have.value', '3:00')

      cy.get('.number').type(1)
        .should('have.value', 1)      
    })

    it('Should be able to click make a reservation button and see new Res displays', () => {
      cy.get('res-btn').click()

      cy.get('.resy-container')
        .find('.resy-card').should('have.length', 9)
    })

  })

})