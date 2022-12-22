describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit('http://192.168.0.22:4000/');
        
        cy.wait(1000);
    });
    
    it('Test that we can write a word on the game page', () => {
        cy.visit('http://192.168.0.22:4000/');

        cy.get('#idButtonStart').click();

        cy.get('div').find('input[type=text]');
    });
})