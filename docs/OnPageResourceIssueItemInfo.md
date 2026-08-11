# OnPageResourceIssueItemInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**line** | **number** | *line where the error was found* |[optional]|
**column** | **number** | *column where the error was found* |[optional]|
**message** | **string** | *text message of the error*. the full list of possible HTML errors can be found [here](https://github.com/AngleSharp/AngleSharp/blob/3968eb050e142b1d94550fba407afe772232b126/src/AngleSharp/Html/Parser/HtmlParseError.cs) |[optional]|
**status_code** | **number** | *general status code*. you can find the full list of the response codes [here](/v3/appendix/errors). **Note:** we strongly recommend designing a necessary system for handling related exceptional or error conditions |[optional]|