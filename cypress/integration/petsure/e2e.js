import Verifications from './pages/verifications'
import Web from './pages/web'

beforeEach (function() {
    cy.fixture('pets').then((pets) => {
        this.pets = pets
    })
}) 

describe('Petsure', function() {   
    const verifications = new Verifications()     
    const web = new Web()    

    beforeEach (function() {    
        web.visitPetsureAndAcceptCookies()
    }) 

    it('E2E', function() {
        web.enterPetName(this.pets.name)     
        
        verifications.verifyPetName(this.pets.name)
        web.selectPet(this.pets.type)

        verifications.verifyPetName(this.pets.name)
        web.selectGenderAndBirthday(this.pets.gender, this.pets.dob_day, this.pets.dob_month, this.pets.dob_year)

        verifications.verifyPetName(this.pets.name)
        web.selectBreed(this.pets.type, this.pets.breed)
        
    })
    
})

