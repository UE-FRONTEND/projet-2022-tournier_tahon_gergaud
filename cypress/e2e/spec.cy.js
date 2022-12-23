describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit('http://192.168.0.22:4000/');
        
        cy.wait(1000);
    });
    
    it('Test that we can write a word on the game page', () => {
        cy.visit('http://192.168.0.22:4000/');

        cy.get('#idButtonStart').click();

        cy.get('div').find('input[type=text]');

        cy.wait(1000);
    });

    // TODO message error

    it('Test that when we write jante, it s ok', () => {
        cy.visit('http://192.168.0.22:4000/');

        cy.get('#idButtonStart').click();

        cy.get('#idTextWord').type('jante');
        cy.get('#idButtonValidate').click();

        cy.get('#idTextWord').should('be.empty');
        cy.get('#idAllWords').contains('jante');

        cy.wait(1000);
    });

    // TODO game lose

    // TODO statistics
})