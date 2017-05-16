module.exports = function () {
    this.Given(/^I am on the product page$/, { timeout: 10 * 1000 }, function(done) {
        browser
            .url('http://dev04-web-oreck.demandware.net/on/demandware.store/Sites-Hoover-Site/en_US/Product-Show?pid=BH55100')
            .call(done);
    });

    this.Then(/^I click the add to cart button$/, function (done) {
        browser
            .click('#add-to-cart')
            .call(done);
    });

    this.Then(/^minicart should open with product added$/, { timeout: 5 * 1000 }, function (done) {
        browser
            .waitForVisible('#wrapper > div.mini-cart-content.open > div.mini-cart-products > div > div.mini-cart-name > a')
            .call(done);
    });

    this.When(/^clicking the view cart CTA$/, function (done) {
        browser
            .click('#wrapper > div.mini-cart-content.open > div.mini-cart-totals > a.mini-cart-link-cart > span')
            .call(done);
    });

    this.Then(/^I should be taken to the cart page$/, { timeout: 10 * 1000 }, function (done) {
        browser
            .waitForVisible('#cart-table > tbody', 10000)
            .call(done);
    });

    this.Given(/^I am on the cart page$/, { timeout: 10 * 1000 }, function(done) {
        browser
            .url('https://dev04-web-oreck.demandware.net/on/demandware.store/Sites-Hoover-Site/en_US/Cart-Show')
            .call(done);
    });

    this.When(/^clicking the remove button$/, function (done) {
        browser
            .click('#cart-table > tbody > tr > td.item-details > button')
            .call(done);
    });

    this.Then(/^the item should be removed from my cart$/, { timeout: 10 * 1000 }, function (done) {
        browser
            .waitForVisible('#primary > div > div > h5', 10000)
            .call(done);
    });

};
