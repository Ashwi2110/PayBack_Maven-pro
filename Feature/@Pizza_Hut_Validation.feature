@Pizza_Hut_Validation
Feature: To validate the functionalties of E-Voucher


@Pizza_Hut_Validation
Scenario Outline: Validating E-Voucher Option
Given user clicks on the "E-Voucher" Option
When user select any product
And user clicks on "Place Order" Option
And user should enter registered mobile number
And user enters on next
And user adds "Pin" number as <pin>
And user clicks on "Submit"
And user clicks on "Place Order" Option in E-Voucher page
And user should enter "OTP" as <otp> on Confirm OTP page
And user should click on "I agree to  Privacy Policy and Terms & conditions" option on Confirm OTP page
Then click on "Confirm Order" on E-Voucher page

Examples:
| MobileNumber | Pin  |Denomination|Quantity|Points to Redeem|Email					  |Mobile    |
| 9172137396   | 5254 |   50      |    1   |       100       |jawale.abj@gmail.com    |9172137396|

