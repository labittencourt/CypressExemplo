/// <reference types="cypress"/>
import { Given, When, Then,  } from "@badeball/cypress-cucumber-preprocessor"
import Home from "../../support/pages/home"
import Mailbox from "../../support/pages/mailbox";

Given(/^que estou na tela home do site mailsac$/, () => {
    Home.visitTheMainScreen()
});
When(/^informo no campo um email para ser criado$/, () => {
    Home.inputPublicEmailName()
});
When(/^clico no botao "([^"]*)"$/, (text) => {
    Home.clickCheckMailBtn(text)
});
Then(/^o sistema direciona para a caixa de entrada do email$/, () => {
    Mailbox.checkMailBoxCreated().should('be.true')
});
