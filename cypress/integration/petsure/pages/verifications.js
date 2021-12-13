class Verifications {

    verifyPetName(PET_NAME) {
        cy.get('#titleLbl > .text-primary').contains(PET_NAME)        
    }
}

export default Verifications