@cart
Feature: Cart
  As a user of demandware
  I want to have access to the product and cart pages
  So that I can add to cart and remove from cart

  Background: Clicking ATC from product page
    Given I am on the product page
    And I click the add to cart button

  Scenario: Adding to cart
    Then minicart should open with product added
    When clicking the view cart CTA
    Then I should be taken to the cart page

  Scenario: Removing from cart
    Given I am on the cart page
    When clicking the remove button
    Then the item should be removed from my cart