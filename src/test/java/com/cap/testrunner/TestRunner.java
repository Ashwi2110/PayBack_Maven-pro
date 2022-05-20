package com.cap.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		junit= "--step-notifications",
		plugin = {"pretty",
				"json:resources/cucumber-reports/Cucumber.json",
				"junit:resources/cucumber-reports/Cucumber.xml",
				"html:resources/cucumber-reports/Cucumber.html" },
		features = "Feature"
		,glue={"step_definition"}
		
				
		)
public class TestRunner {

}
