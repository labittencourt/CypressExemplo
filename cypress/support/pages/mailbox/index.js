const el_mailbox = require("./elements").Elements
const data = require("../../constants/constants").DATATEST

class Mailbox {
    email_created = (data.create_new_email_public + '@mailsac.com').toLowerCase()
    email_valid = data.email_valid + '@mailsac.com'

    checkMailBoxCreated() {
        cy.get(el_mailbox.messages).should('be.visible')
        cy.get(el_mailbox.make_this_inbox_private).should('be.visible')
        return cy.get(el_mailbox.mail_box).then(($a) => {
            if ($a.text().includes(this.email_created)) {
                return true
            } else if ($a.text().includes(this.email_valid)) {
                return true
            } else {
                return cy.log('Aconteceu alguma mudanca')
            }
        })
    }
}
export default new Mailbox()