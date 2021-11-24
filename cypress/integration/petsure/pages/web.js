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

    selectGenderAndBirthday(PET_GENDER, DOB_DATE, DOB_MONTH, DOB_YEAR) {
        cy.get('#day').type(DOB_DATE)
        cy.get('#month').type(DOB_MONTH)
        cy.get('#year').type(DOB_YEAR)

        if (PET_GENDER = 'male') {
            cy.get(':nth-child(2) > label > .radio-text').click()
        }
        else if (PET_GENDER = 'female') {
            cy.get(':nth-child(3) > label > .radio-text').click()
        }                

        cy.clickContinue()
    }


}

export default Web