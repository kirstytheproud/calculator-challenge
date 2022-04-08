
//describe block for our suite of tests
describe("Calculator tests", () => {
    it("should check 7 + 9 equals 16", () => {
        // 1. Arrange
        cy.visit("localhost:5500/index.html");

        // 2. Act
        cy.get('#7').click();
        cy.get('#add').click();
         cy.get('#9').click();
         cy.get('#equals').click();
       
         // 3. Assert
        cy.get('#output_value').should("have.value", "16");
    })
    it("should check 22 / 11 equals 2", () => {
        // 1. Arrange
        cy.visit("localhost:5500/index.html");

        // 2. Act
        cy.get('#2').click();
        cy.get('#2').click();
        cy.get('#divide').click();
        cy.get('#1').click();
        cy.get('#1').click();
        cy.get('#equals').click();
       
         // 3. Assert
        cy.get('#output_value').should("have.value", "2");
    })
    it("should check 2 * 11 equals 22", () => {
        // 1. Arrange
        cy.visit("localhost:5500/index.html");

        // 2. Act
        cy.get('#2').click();
        cy.get('#multiply').click();
        cy.get('#1').click();
        cy.get('#1').click();
        cy.get('#equals').click();
       
         // 3. Assert
        cy.get('#output_value').should("have.value", "22");
    })
    it("should check 200 - 22 equals 178", () => {
        // 1. Arrange
        cy.visit("localhost:5500/index.html");

        // 2. Act
        cy.get('#2').click();
        cy.get('#0').click();
        cy.get('#0').click();
        cy.get('#subtract').click();
        cy.get('#2').click();
        cy.get('#2').click();
        cy.get('#equals').click();
       
         // 3. Assert
        cy.get('#output_value').should("have.value", "178");
    })
    it("should check 19 becomes -19 plus 19 equals 0", () => {
        // 1. Arrange
        cy.visit("localhost:5500/index.html");

        // 2. Act
        cy.get('#1').click();
        cy.get('#9').click();
        cy.get('#plus-minus').click();
        cy.get('#add').click();
        cy.get('#1').click();
        cy.get('#9').click();
        cy.get('#equals').click();
       
         // 3. Assert
        cy.get('#output_value').should("have.value", "0");
    })

    it("should check 1333 becomes 130", () => {
        // 1. Arrange
        cy.visit("localhost:5500/index.html");

        // 2. Act
        cy.get('#1').click();
        cy.get('#3').click();
        cy.get('#3').click();
        cy.get('#3').click();
        cy.get('#delete').click();
        cy.get('#delete').click();
        cy.get('#0').click();
       
         // 3. Assert
        cy.get('#output_value').should("have.value", "130");
    })

    it("should 80% of 38 is 30.4", () => {
        // 1. Arrange
        cy.visit("localhost:5500/index.html");

        // 2. Act
        cy.get('#8').click();
        cy.get('#0').click();
        cy.get('#percentage').click();
        cy.get('#multiply').click();
        cy.get('#3').click();
        cy.get('#8').click();
        cy.get('#equals').click();
       
         // 3. Assert
        cy.get('#output_value').should("have.value", "30.4");
    })

})