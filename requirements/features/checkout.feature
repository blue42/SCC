@checkout
Feature: Checkout
  As a user of demandware
  I want to have access to the product and cart pages
  So that I can add to cart and successfuly checkout

  Background: Clicking ATC from product page
    Given I am on the product page
    And I click the add to cart button

  Scenario: Navigating to Checkout
    Then minicart should open with product added
    When clicking the Checkout CTA
    Then I should be taken to the Checkout landing page

   Scenario: Navigating through checkout as Guest
   	Given I am on the Checkout landing page
   	And I click then Guest Checkout CTA
   	Then I should be taken to Step 1 of checkout

   Scenario: Navigating through checkout as Logged In User
   	Given I am on the Checkout landing page
   	When I fill out the login fields
   	And click the Login CTA
   	Then I should be taken to Step 1 of checkout

   Scenario: Filling out Shipping Info
   	Given I am on Step 1 of checkout
   	Then I should be able to fill out the shipping form
   	And select a shipping method
   	When I click the Continue To Billing CTA
   	Then the address validation should appear
   	And if I click the suggested address
   	Then I should be taken to Step 2 of checkout

   Scenario: Filling out Billing Info
   	Given I am on Step 2 of checkout
   	Then I should be able to fill out the billing form
   	And enter payment information
   	When I click the Conitnue To Place Order CTA
   	Then I should be taken to Step 3 of checkout

   Scenario: Processing order
   	Given I am on Step 3 of checkout
   	And I press the Place Order CTA
   	Then I should go to the order success page