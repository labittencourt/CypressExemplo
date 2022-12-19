/// <reference types="cypress"/>
import { Given, When, Then,  } from "@badeball/cypress-cucumber-preprocessor"
import Home from "../../support/pages/home"

Given(/^que faco login com um usuario valido$/, () => {
    Home.visitTheMainScreen()
    Home.doLoginSucess()
});