Feature: Login to jira feature

    @TestCaseKey=CT-T1
    Scenario: Login to jira 
      Given I visit jira login page
      When  I set "aouedraogo@nehemiecreation.com"
      When  I click on next
      When  I set The "adama7484"
      When  I click on login
      Then  User Logged in 
