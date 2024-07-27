describe('Root test', () => {
    it('visits the app root url and has h3 dashboard element', () => {
        cy.visit('/')
        cy.contains('h3', ' Dashboard ')
    })

    it('should display table data correctly', () => {
        cy.visit('/');
        cy.get('#students-table').within(() => {
            cy.contains('th', 'First Name').should('exist');
            cy.get('tbody tr').should('have.length', 5);
            cy.get('tbody tr:first-child td:nth-child(2)').should('have.text', 'Eric');
        });
    });
})

describe('GridView', () => {
    it('should display student data from fixture', () => {
        cy.fixture('students.json').then((students) => {
            cy.visit('/'); // Replace with your page URL

            cy.get('#grid-view-button').click();

            // Assert the number of student elements
            cy.get('.bg-white.p-4.rounded.shadow').should('have.length', students.length);

            // Verify data for each student
            students.forEach((student: any, index: number) => {
                cy.get('.bg-white.p-4.rounded.shadow').eq(index).find('h2').should('contain.text', `${student.first_name} ${student.last_name}`);
            });
        });
    });
});