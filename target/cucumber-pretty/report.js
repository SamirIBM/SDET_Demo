$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/calculator.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "Verify the login module",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Getting the BMI",
  "description": "",
  "id": "login-feature;getting-the-bmi",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user verifies the page title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicks on the BMI Calculator link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enters the \"\u003cage\u003e\",\"\u003cheight\u003e\" and \"\u003cweight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on the calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Should get the corresponding BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-feature;getting-the-bmi;",
  "rows": [
    {
      "cells": [
        "age",
        "height",
        "weight"
      ],
      "line": 15,
      "id": "login-feature;getting-the-bmi;;1"
    },
    {
      "cells": [
        "10",
        "127",
        "40"
      ],
      "line": 16,
      "id": "login-feature;getting-the-bmi;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 17,
      "id": "login-feature;getting-the-bmi;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 18,
      "id": "login-feature;getting-the-bmi;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 19,
      "id": "login-feature;getting-the-bmi;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 20,
      "id": "login-feature;getting-the-bmi;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Getting the BMI",
  "description": "",
  "id": "login-feature;getting-the-bmi;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user verifies the page title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicks on the BMI Calculator link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enters the \"10\",\"127\" and \"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on the calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Should get the corresponding BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.the_user_is_on_the_homepage()"
});
formatter.result({
  "duration": 7618727900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.the_user_verifies_the_page_title()"
});
formatter.result({
  "duration": 9870200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_BMI_Calculator_link()"
});
formatter.result({
  "duration": 3872732100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    },
    {
      "val": "127",
      "offset": 17
    },
    {
      "val": "40",
      "offset": 27
    }
  ],
  "location": "BMICalculator.enters_the_and(String,String,String)"
});
formatter.result({
  "duration": 241104500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_calculate_button()"
});
formatter.result({
  "duration": 385142500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.should_get_the_corresponding_BMI()"
});
formatter.result({
  "duration": 26287300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 56078500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Getting the BMI",
  "description": "",
  "id": "login-feature;getting-the-bmi;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user verifies the page title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicks on the BMI Calculator link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enters the \"30\",\"156\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on the calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Should get the corresponding BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.the_user_is_on_the_homepage()"
});
formatter.result({
  "duration": 6296168500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.the_user_verifies_the_page_title()"
});
formatter.result({
  "duration": 5829900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_BMI_Calculator_link()"
});
formatter.result({
  "duration": 3778252300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 12
    },
    {
      "val": "156",
      "offset": 17
    },
    {
      "val": "70",
      "offset": 27
    }
  ],
  "location": "BMICalculator.enters_the_and(String,String,String)"
});
formatter.result({
  "duration": 223567400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_calculate_button()"
});
formatter.result({
  "duration": 564709300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.should_get_the_corresponding_BMI()"
});
formatter.result({
  "duration": 25816500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 40873900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Getting the BMI",
  "description": "",
  "id": "login-feature;getting-the-bmi;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user verifies the page title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicks on the BMI Calculator link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enters the \"25\",\"152\" and \"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on the calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Should get the corresponding BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.the_user_is_on_the_homepage()"
});
formatter.result({
  "duration": 6160865100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.the_user_verifies_the_page_title()"
});
formatter.result({
  "duration": 7899200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_BMI_Calculator_link()"
});
formatter.result({
  "duration": 3892026000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 12
    },
    {
      "val": "152",
      "offset": 17
    },
    {
      "val": "55",
      "offset": 27
    }
  ],
  "location": "BMICalculator.enters_the_and(String,String,String)"
});
formatter.result({
  "duration": 234807700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_calculate_button()"
});
formatter.result({
  "duration": 387127900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.should_get_the_corresponding_BMI()"
});
formatter.result({
  "duration": 31008700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 58352800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Getting the BMI",
  "description": "",
  "id": "login-feature;getting-the-bmi;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user verifies the page title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicks on the BMI Calculator link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enters the \"20\",\"160\" and \"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on the calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Should get the corresponding BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.the_user_is_on_the_homepage()"
});
formatter.result({
  "duration": 6262157200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.the_user_verifies_the_page_title()"
});
formatter.result({
  "duration": 6648600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_BMI_Calculator_link()"
});
formatter.result({
  "duration": 3761594500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 12
    },
    {
      "val": "160",
      "offset": 17
    },
    {
      "val": "45",
      "offset": 27
    }
  ],
  "location": "BMICalculator.enters_the_and(String,String,String)"
});
formatter.result({
  "duration": 231161700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_calculate_button()"
});
formatter.result({
  "duration": 383229900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.should_get_the_corresponding_BMI()"
});
formatter.result({
  "duration": 23272100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 40897100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Getting the BMI",
  "description": "",
  "id": "login-feature;getting-the-bmi;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "The user verifies the page title",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Clicks on the BMI Calculator link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enters the \"35\",\"160\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on the calculate button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Should get the corresponding BMI",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.the_user_is_on_the_homepage()"
});
formatter.result({
  "duration": 6196975200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.the_user_verifies_the_page_title()"
});
formatter.result({
  "duration": 6838800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_BMI_Calculator_link()"
});
formatter.result({
  "duration": 3841904900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 12
    },
    {
      "val": "160",
      "offset": 17
    },
    {
      "val": "70",
      "offset": 27
    }
  ],
  "location": "BMICalculator.enters_the_and(String,String,String)"
});
formatter.result({
  "duration": 222105100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.clicks_on_the_calculate_button()"
});
formatter.result({
  "duration": 377201400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.should_get_the_corresponding_BMI()"
});
formatter.result({
  "duration": 26096200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 44022900,
  "status": "passed"
});
});