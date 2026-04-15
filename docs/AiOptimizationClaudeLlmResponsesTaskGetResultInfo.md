# AiOptimizationClaudeLlmResponsesTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**model_name** | **string** | name of the AI model used |[optional]|
**input_tokens** | **number** | number of tokens in the inputtotal count of tokens processed |[optional]|
**output_tokens** | **number** | number of tokens in the outputtotal count of tokens generated in the AI response |[optional]|
**reasoning_tokens** | **number** | number of reasoning tokenstotal count of tokens used to generate reasoning content |[optional]|
**web_search** | **boolean** | indicates if web search was used |[optional]|
**money_spent** | **number** | cost of AI tokens, USDthe price charged by the third-party AI model provider for according to its Pricing |[optional]|
**datetime** | **string** | date and time when the result was receivedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2019-11-15 12:57:46 +00:00 |[optional]|
**items** | **BaseAiOptimizationLlmResponseElementItem[]** | array of response itemscontains structured AI response data |[optional]|
**fan_out_queries** | **string[]** | array of fan-out queriescontains related search queries derived from the main query to provide a more comprehensive response |[optional]|