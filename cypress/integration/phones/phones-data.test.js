/// <reference types="cypress" />

context('Phones', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
    
    it('While the phoneList is loading the packman loader is rendered', () => {
      cy.get('[data-cy=pacman-loader]')
    })

    it('When the phone list is loaded almost one card is renderer', () => {
      cy.get('[data-cy=phone_7-card] > .card-container')
    })

    it('Should render phone details when I click in one of phone card ', () => {
      cy.get('[data-cy=alaxy_s7-card] > .card-container').click()
      cy.get('[data-cy=card-details]')
    })

    it('Should return to phone list page when the button of the card-details is clicked ', () => {
      cy.get('[data-cy=alaxy_s7-card] > .card-container').click()
      cy.get('[data-cy=card-details]')
      cy.get('[data-cy=btn-go-back]').click()
    })

})

  