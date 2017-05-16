module.exports = function () {
    this.When( /^I input an existing product name in the search field$/, function ( done ) {
        browser
            .setValue( '#q','BH55100' )
            .call( done );
    });

    this.When( /^I input a non-existing product name in the search field$/, function ( done ) {
        browser
            .click( '#q' )
            .setValue( '#q','xxxxx' )
            .call( done );
    });

    this.Then( /^I click the search icon$/, function ( done ) {
        browser
            .click( '#q' )
            .waitForVisible( '#wrapper > div.top-banner > div > div > form > fieldset > button', 1000 )
            .click( '#wrapper > div.top-banner > div > div > form > fieldset > button' )
            .call( done );
    });

    this.Then( /^I should be redirected to the search results page$/, { timeout: 10 * 1000 }, function ( done ) {
        browser
            .waitForVisible( '#main > header > div.page-title.search-page-title', 10000 )
            .call( done );
    });

    this.Then( /^the product that I searched for should display$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .waitForVisible( '#b89d5f0df4cce2f1aafff1e1b6 > div.product-info > a > div.product-model-number > p', 10000 )
            .call( done );
    });

    this.Then( /^a no-results message should display$/, { timeout: 10 * 1000 }, function( done ) {
        browser
            .waitForVisible( '#primary > div.no-hits-banner', 10000 )
            .call( done );
    });
};