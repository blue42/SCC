@newsletter
Feature: Newsletter
  As a user of demandware
  I want to be able to submit my email address
  So that I can signup for the newsletter

  Scenario: Invalid email submission
    Given I am on the homepage
    When I input an invalid email address to the newsletter field
    And I click the subscribe button
    Then I should see an error validation message

  Scenario: Valid email submission
    Given I am on the homepage
    When I input a valid email address to the newsletter field
    And I click the subscribe button
    Then I should see a success message