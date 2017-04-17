@accountCreate
Feature: Account Create
  As a user of demandware
  I want to be able to create an account
  So that I can log in and out of my customer account

  Background: Filling account create account fields
    Given I am on the create account page
    When I fill out the registration fields with valid credentials
    And I click the submit button

  Scenario: Log in
    Then I should be taken to my account dashboard
