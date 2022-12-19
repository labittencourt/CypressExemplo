const elHome = require('./elements').Elements
const data = require('../../constants/constants').DATATEST
class Home {
    visitTheMainScreen() {
        cy.visit("")
        this.uncaughtExceptionSystem()
    }

    inputPublicEmailName() {
        cy.get(elHome.input_email)
            .click()
            .type(data.create_new_email_public)
    }

    clickCheckMailBtn(text){
        cy.get(elHome.btn_check_email)
            .contains(text)
            .click()
    }

    doLoginSucess(){
        cy.get(elHome.input_email)
            .click()
            .type(data.email_valid)
        cy.get(elHome.btn_check_email)
            .click()
    }




    uncaughtExceptionSystem() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }
}
export default new Home()