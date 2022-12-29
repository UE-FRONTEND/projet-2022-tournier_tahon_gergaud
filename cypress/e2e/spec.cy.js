describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit('http://192.168.0.35:4000/');
        
        cy.wait(1000);
    });
    
    it('Test that we can write a word on the game page', () => {
        cy.visit('http://192.168.0.35:4000/');

        cy.get('#idButtonStart').click();

        cy.get('div').find('input[type=text]');

        cy.wait(1000);
    });

    it('Test that when we write zzzzz, we have an error message', () => {
        cy.visit('http://192.168.0.35:4000/');

        cy.get('#idButtonStart').click();

        cy.get('#idTextWord').type('zzzzz');
        cy.get('#idButtonValidate').click();

        cy.get('div').contains('mot invalide', { matchCase: false });

        cy.wait(1000);
    });

    it('Test that when we write jante, it s ok', () => {
        cy.visit('http://192.168.0.35:4000/');

        cy.get('#idButtonStart').click();

        cy.get('#idTextWord').type('jante');
        cy.get('#idButtonValidate').click();

        cy.get('#idTextWord').should('be.empty');
        cy.get('#idAllWords').contains('jante', { matchCase: false });

        cy.wait(1000);
    });

    // TODO game lose

    // TODO statistics
})