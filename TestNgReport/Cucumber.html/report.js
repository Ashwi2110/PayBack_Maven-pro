$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/products.feature");
formatter.feature({
  "name": "To validate the functionalties of Products",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Products"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validating Products Option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Products_Validation"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"Products\" Option to validate",
  "keyword": "Given "
});
formatter.step({
  "name": "user select any product In Products Option",
  "keyword": "When "
});
formatter.step({
  "name": "user selects \"Quantity\" as \u003cqty\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \"Confirm\" Option to Login",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter registered mobile number in Products Option",
  "keyword": "And "
});
formatter.step({
  "name": "user adds \"Pin\" number as \u003cpin\u003e in Products Option",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \"Login\" option",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"Confirm\" Option to check availability",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MobileNumber",
        "Pin",
        "Quantity"
      ]
    },
    {
      "cells": [
        "9538681791",
        "8864",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating Products Option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Products"
    },
    {
      "name": "@Products_Validation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the \"Products\" Option to validate",
  "keyword": "Given "
});
formatter.match({
  "location": "PaybackSteps.user_clicks_on_the_Option_to_validate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select any product In Products Option",
  "keyword": "When "
});
formatter.match({
  "location": "PaybackSteps.user_select_any_product_In_Products_Option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects \"Quantity\" as \u003cqty\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_selects_as_qty(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Confirm\" Option to Login",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_clicks_on_Option_to_Login(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter registered mobile number in Products Option",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_should_enter_registered_mobile_number_in_Products_Option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds \"Pin\" number as \u003cpin\u003e in Products Option",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_adds_number_as_pin_in_Products_Option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Login\" option",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_clicks_on_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on \"Confirm\" Option to check availability",
  "keyword": "Then "
});
formatter.match({
  "location": "PaybackSteps.clicks_on_Option_to_check_availability(String)"
});
formatter.result({
  "status": "passed"
});
});