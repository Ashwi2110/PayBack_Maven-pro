package com.cap.testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;
//import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
features = "Feature",
glue = "step_definition",
plugin = { "pretty",
"json:TestNgReport/Cucumber.json",
"junit:TestNgReport/Cucumber.xml",
"html:TestNgReport/Cucumber.html" },
dryRun = false,
monochrome = true,
tags = {"@Smart_Watch or @Pizza_Hut_Validation or @Login_to_PayBack"}
)

public class TestNGRunner extends AbstractTestNGCucumberTests {
	
}