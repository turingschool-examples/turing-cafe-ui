describe('empty spec', () => {
  beforeEach(() => {
   cy.intercept('http://localhost:3001/api/v1/reservations',{fixture:'example.json'}) 
  })

  it('Should visit a page' , () => {
    cy.visit('http://localhost:3000/?name=Andy&date=03%2F22&time=3%3A15&numberGuest=3')
    expect(true).to.be(true)
  })
  
  it('Should have a title', function() {
    cy.get('app-title').should(be.visible)
  })

  it('Should have a display of cards', function () {
    cy.get('display-area').should(be.visible)
  })
  it('Should have a form area', function() {
    cy.get('form-area').should(be.visible)
  })
  it('should be able to write inside the form', function () {
    cy.get('form-area')
    cy.get('form-area').first()
    cy.type('Andy')
  })
  it('Should have a card display',function(){
    cy.get('card-body').should('contain','Christie')
    cy.get('card-body').should('contain','Leta')
  })
  it('Should be able to submit a form', function(){
    cy.get('form-area').first()
    cy.get('form-area').first().next()
    cy.type('05/27')
    cy.get('form-area').first().next().next()
    cy.type('3:22')
    cy.get('form-area').first().next().next().next()
    cy.type('4')
    cy.get('form-btn').click()
    cy.get('display-area'). should('contain','05/27')
  })

})