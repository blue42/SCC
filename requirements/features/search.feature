@search
Feature: Search
  As a user of demandware
  I want to have access to the search results page
  So that I search for specific products

  Scenario: Search with expected results
    Given I am on the homepage
    When I input an existing product name in the search field
    And I click the search icon
    Then I should be redirected to the search results page
    And the product that I searched for should display

  Scenario: Search with no expected results
    Given I am on the homepage
    When I input a non-existing product name in the search field
    And I click the search icon
    Then I should be redirected to the search results page
    And a no-results message should display