$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/@Login_to_PayBack.feature");
formatter.feature({
  "name": "To validate the functionalties of Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login_to_PayBack"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login into Payback",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter the \"MobileNumber\" as \u003cmobno\u003e on Login Page",
  "keyword": "When "
});
formatter.step({
  "name": "user enter \"Pin\" as \u003cpin\u003e on Login Page",
  "keyword": "When "
});
formatter.step({
  "name": "user Click on the \"Login\" button on Login Page",
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
        "Pin"
      ]
    },
    {
      "cells": [
        "9172137396",
        "5254"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login into Payback",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login_to_PayBack"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "PaybackSteps.user_is_on_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the \"MobileNumber\" as \u003cmobno\u003e on Login Page",
  "keyword": "When "
});
formatter.match({
  "location": "PaybackSteps.user_enter_the_as_mobno_on_Login_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"Pin\" as \u003cpin\u003e on Login Page",
  "keyword": "When "
});
formatter.match({
  "location": "PaybackSteps.user_enter_as_pin_on_Login_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Click on the \"Login\" button on Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "PaybackSteps.user_Click_on_the_button_on_Login_Page(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton class\u003d\"btn pb-login-submit red-button\" disabled\u003d\"\"\u003e...\u003c/button\u003e is not clickable at point (391, 566). Other element would receive the click: \u003ciframe title\u003d\"recaptcha challenge expires in two minutes\" src\u003d\"https://www.google.com/recaptcha/api2/bframe?hl\u003den\u0026amp;v\u003dM-QqaF9xk6BpjLH22uHZRhXt\u0026amp;k\u003d6LfeWlAUAAAAACm-9sbgznU7woMofbUA_LawU4E3\" name\u003d\"c-pnqwlxbwyl1\" frameborder\u003d\"0\" scrolling\u003d\"no\" sandbox\u003d\"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox\" style\u003d\"width: 400px; height: 580px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-B33943GF\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\SAGARJ~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58920}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bca1be1614b77bd0c1e96ef425e1d0a4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat step_definition.PaybackSteps.user_Click_on_the_button_on_Login_Page(PaybackSteps.java:70)\r\n\tat ✽.user Click on the \"Login\" button on Login Page(Feature/@Login_to_PayBack.feature:8)\r\n",
  "status": "failed"
});
formatter.uri("Feature/@Pizza_Hut_Validation.feature");
formatter.feature({
  "name": "To validate the functionalties of E-Voucher",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Pizza_Hut_Validation"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validating E-Voucher Option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Pizza_Hut_Validation"
    }
  ]
});
formatter.step({
  "name": "user clicks on the \"E-Voucher\" Option",
  "keyword": "Given "
});
formatter.step({
  "name": "user select any product",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on \"Place Order\" Option",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter registered mobile number",
  "keyword": "And "
});
formatter.step({
  "name": "user enters on next",
  "keyword": "And "
});
formatter.step({
  "name": "user adds \"Pin\" number as \u003cpin\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \"Place Order\" Option in E-Voucher page",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter \"OTP\" as \u003cotp\u003e on Confirm OTP page",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on \"I agree to  Privacy Policy and Terms \u0026 conditions\" option on Confirm OTP page",
  "keyword": "And "
});
formatter.step({
  "name": "click on \"Confirm Order\" on E-Voucher page",
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
        "Denomination",
        "Quantity",
        "Points to Redeem",
        "Email",
        "Mobile"
      ]
    },
    {
      "cells": [
        "9172137396",
        "5254",
        "50",
        "1",
        "100",
        "jawale.abj@gmail.com",
        "9172137396"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating E-Voucher Option",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Pizza_Hut_Validation"
    },
    {
      "name": "@Pizza_Hut_Validation"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the \"E-Voucher\" Option",
  "keyword": "Given "
});
formatter.match({
  "location": "PaybackSteps.user_clicks_on_the_Option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select any product",
  "keyword": "When "
});
formatter.match({
  "location": "PaybackSteps.user_select_any_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on \"Place Order\" Option",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_clicks_on_Option(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-B33943GF\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\SAGARJ~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58991}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 396419d0943419f2c950610735fff4dc\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-payback\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat step_definition.PaybackSteps.user_clicks_on_Option(PaybackSteps.java:106)\r\n\tat ✽.user clicks on \"Place Order\" Option(Feature/@Pizza_Hut_Validation.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should enter registered mobile number",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_should_enter_registered_mobile_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters on next",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_enters_on_next()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user adds \"Pin\" number as \u003cpin\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_adds_number_as_pin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Submit\"",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_clicks_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"Place Order\" Option in E-Voucher page",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_clicks_on_Option_in_E_Voucher_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should enter \"OTP\" as \u003cotp\u003e on Confirm OTP page",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_should_enter_as_otp_on_Confirm_OTP_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should click on \"I agree to  Privacy Policy and Terms \u0026 conditions\" option on Confirm OTP page",
  "keyword": "And "
});
formatter.match({
  "location": "PaybackSteps.user_should_click_on_option_on_Confirm_OTP_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on \"Confirm Order\" on E-Voucher page",
  "keyword": "Then "
});
formatter.match({
  "location": "PaybackSteps.click_on_on_E_Voucher_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Feature/@Smart_Watch.feature");
formatter.feature({
  "name": "To validate the functionalties of Smart Watch",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smart_Watch"
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
        "9172137396",
        "5254",
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
      "name": "@Smart_Watch"
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton type\u003d\"button\" class\u003d\"pb-redeem-now-btn red-button pb-showmore\" id\u003d\"redeemBtn\"\u003e...\u003c/button\u003e is not clickable at point (876, 422). Other element would receive the click: \u003ciframe title\u003d\"reCAPTCHA\" src\u003d\"https://www.google.com/recaptcha/api2/anchor?ar\u003d1\u0026amp;k\u003d6LfeWlAUAAAAACm-9sbgznU7woMofbUA_LawU4E3\u0026amp;co\u003daHR0cHM6Ly93d3cucGF5YmFjay5pbjo0NDM.\u0026amp;hl\u003den\u0026amp;v\u003dM-QqaF9xk6BpjLH22uHZRhXt\u0026amp;size\u003dnormal\u0026amp;cb\u003d5c82ccvq6qaw\" width\u003d\"304\" height\u003d\"78\" role\u003d\"presentation\" name\u003d\"a-nsmgrb2drola\" frameborder\u003d\"0\" scrolling\u003d\"no\" sandbox\u003d\"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-B33943GF\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\SAGARJ~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59176}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 149fae5a68cd56eb8f1798dcf8f9cc05\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat step_definition.PaybackSteps.clicks_on_Option_to_check_availability(PaybackSteps.java:241)\r\n\tat ✽.clicks on \"Confirm\" Option to check availability(Feature/@Smart_Watch.feature:14)\r\n",
  "status": "failed"
});
});