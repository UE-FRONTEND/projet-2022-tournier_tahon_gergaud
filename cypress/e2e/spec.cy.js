describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit('http://192.168.0.35:4000/');
        
        cy.wait(1000);
    });
    
    it('Test that we can write a word on the game page', () => {
        cy.visit('http://192.168.0.35:4000/');

        cy.get('#idButtonStart').click();

        cy.get('#idKeyboard').type('z');

        cy.get('#idDivWord').contains('z');

        cy.wait(1000);
    });

    it('Test that when we write zzzzz, we have an error message', () => {
        cy.visit('http://192.168.0.35:4000/');

        cy.get('#idButtonStart').click();
        cy.get('#idKeyboard');
        cy.get('#idKeyboard');

        cy.get('#idKeyboard').type('zzzzz');
        cy.get('#idKeyboard').type('{enter}');

        cy.get('div').contains('mot invalide', { matchCase: false });

        cy.wait(1000);
    });

    it('Test that when we write jante, it s ok', () => {
        cy.visit('http://192.168.0.35:4000/');

        cy.get('#idButtonStart').click();

        cy.get('#idKeyboard').type('jante');
        cy.get('#idKeyboard').type('{enter}');

        cy.get('#idTextWord').should('be.empty');
        cy.get('#idAllWords').contains('jante', { matchCase: false });

        cy.wait(1000);
    });

    it('Test that when we lose, we have a lose page', () => {
        cy.visit('http://192.168.0.35:4000/');

        cy.get('#idButtonStart').click();

        cy.get('#idButtonGiveUp').click();

        cy.contains('perdu', { matchCase: false });

        cy.wait(1000);
    });

    it('Test that on statistics, we have all we want', () => {
        cy.visit('http://192.168.0.35:4000/');

        cy.get('#idButtonStart').click();
        cy.get('#idButtonGiveUp').click();
        cy.get('#idButtonBack').click();

        cy.get('#idButtonStatistics').click();
        
        cy.contains('temps moyen de jeu', { matchCase: false });
        cy.contains('nombre de tentatives moyennes', { matchCase: false });
        cy.contains('pourcentage de victoire', { matchCase: false });
        cy.contains('ensemble des parties jouées', { matchCase: false });

        cy.get('#idAllGames').should('have.length', 1);

        cy.get('#idAllGames').contains('tentative', { matchCase: false });
        cy.get('#idAllGames').contains('mot', { matchCase: false });
        cy.get('#idAllGames').contains(/(\d){2}\/(\d){2}\/(\d){4}/);
        cy.get('#idDivLose').should('have.css', 'border-left-color', 'rgb(255, 0, 0)');
        cy.get('#idAllGames').contains(/(\d){1,2}m(\d){1,2}s/);

        cy.wait(1000);
    });
});