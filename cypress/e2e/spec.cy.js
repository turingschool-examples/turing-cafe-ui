describe('Reservations Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", [
      {
        "id": 1,
        "name": "Christie",
        "date": "12/29",
        "time": "7:00",
        "number": 12
      },
      {
        "id": 2,
        "name": "Leta",
        "date": "4/5",
        "time": "7:00",
        "number": 2
      },
      {
        "id": 3,
        "name": "Pam",
        "date": "1/21",
        "time": "6:00",
        "number": 4
      },
      {
        "id": 4,
        "name": "Khalid",
        "date": "5/9",
        "time": "7:30",
        "number": 7
      }
    ]
    )
    cy.visit("http://localhost:3000/")
  });
  it("Should display a header when a user visits the page", () => {
    cy.get("h1").contains("Turing Cafe Reservations");
  });
  it("Should have a form where a user can submit a new reservation, containing inputs and a button", () => {
    cy.get("input").should("have.length", 4);
    cy.get("button").contains("Make Reservation").should("be.visible");
  })
  it("Should display pre-existing reservations on the page", () => {
    cy.get(".card").should("have.length", 4);
    cy.get(".card").first().contains("Christie")
    cy.get(".card").first().contains("12/29")
    cy.get(".card").first().contains("7:00")
    cy.get(".card").first().contains("Number of guests: 12");
    cy.get(".card").first().contains("Cancel");
  })
})