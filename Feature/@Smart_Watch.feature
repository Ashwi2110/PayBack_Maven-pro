@Smart_Watch
Feature: To validate the functionalties of Smart Watch


@Products_Validation
Scenario Outline: Validating Products Option
Given user clicks on the "Products" Option to validate
When user select any product In Products Option
And user selects "Quantity" as <qty>
And user clicks on "Confirm" Option to Login
And user should enter registered mobile number in Products Option
And user adds "Pin" number as <pin> in Products Option
And user clicks on "Login" option
Then clicks on "Confirm" Option to check availability


Examples:
| MobileNumber | Pin  |Quantity|
| 9172137396  | 5254 |    1   |

