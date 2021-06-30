// Not working in this version. Error = call intercept\route outside of 'it'
export const spyOnGet = (URL: string) => cy.intercept('GET', URL);

export const spyOnPost = (URL: string) => cy.intercept('POST', URL);
