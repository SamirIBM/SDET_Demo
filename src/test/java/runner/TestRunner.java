package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="src/test/java/features/calculator.feature",
		glue={"stepDefinition"},
		tags= {"@RegressionTest"},//single tag
		//tags= {"@SmokeTest","@RegressionTest"}//And condition
		//tags= {"@SmokeTest,@RegressionTest"}//or condition
		//tags= {"@FunctionalTest"}//feature tag
	   // tags= {"@FunctionalTest","~@RegressionTest"}//will exclude Regression Test
		plugin = { "pretty", "html:target/cucumber-pretty"}
		
		)
public class TestRunner {

}
