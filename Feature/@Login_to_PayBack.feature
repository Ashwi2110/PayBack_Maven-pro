@Login_to_PayBack
Feature: To validate the functionalties of Login

Scenario Outline: Login into Payback 
Given User is on Login Page
When user enter the "MobileNumber" as <mobno> on Login Page
When user enter "Pin" as <pin> on Login Page
Then user Click on the "Login" button on Login Page


Examples:
| MobileNumber | Pin  |
| 9172137396   | 5254 |
