class Web {

    visitPetsureAndAcceptCookies() {
        cy.visit('https://exaltwebuat.petsure.com')
        return cy.get('#accept-all').click()
    }

    enterPetName(PET_NAME) {
        cy.get('#petName').type(PET_NAME)
        cy.clickContinue()
    }

    selectPet(PET_TYPE) {
        if (PET_TYPE = 'cat') {
            cy.get('.icon-cat').click()
        }
        else if (PET_TYPE = 'dog') {
            cy.get('.icon-dog').click()
        }
        cy.clickContinue()
    }

}

export default Web