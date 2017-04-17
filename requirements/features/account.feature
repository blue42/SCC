@account
Feature: Account Login
  As a user of demandware
  I want to have access to login in and log out methods
  So that I can log in and out of my customer account

  Background: Filling account email/password fields
    Given I am on the log in page
    When I fill out email and password fields with valid credentials
    And I click the log in button

  Scenario: Log in
    Then I should be taken to my account dashboard

  Scenario: Log out
    Given I am on my account dashboard
    When I cick on the log out link
    Then I should be redirected to the login page
