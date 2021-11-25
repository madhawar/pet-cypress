import Web from './pages/web'

beforeEach (function() {
    cy.fixture('pets').then((pets) => {
        this.pets = pets
    })
}) 

describe('Petsure', function() {    
    const web = new Web()    

    beforeEach (function() {    
        web.visitPetsureAndAcceptCookies()
    }) 

    it('E2E', function() {
        web.enterPetName(this.pets.name)        
        web.selectPet(this.pets.type)
        web.selectGenderAndBirthday(this.pets.gender, this.pets.dob_day, this.pets.dob_month, this.pets.dob_year)
    })
    
})

