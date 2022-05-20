package com.cap.testrunner;

import cucumber.api.CucumberOptions;



@CucumberOptions(
features = "Feature_Files",
glue = "com.sprint2.step_definition.Test_Steps",
plugin = { "pretty",
"json:target/Cucumber.json",
"junit:target/Cucumber.xml",
"html:target/Cucumber.html" },
dryRun = false,
monochrome = true,
tags = {"@Login_to_PayBack or @Pizza_Hut_Validation or @Smart_Watch"}
)
public class TestNgPayback {
  
}
