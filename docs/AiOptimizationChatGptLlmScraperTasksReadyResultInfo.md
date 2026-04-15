# AiOptimizationChatGptLlmScraperTasksReadyResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | task identifier of the completed taskunique task identifier in our system in the UUID format |[optional]|
**se** | **string** | search engine specified when setting the task |[optional]|
**se_type** | **string** | type of search engineexample: llm_scraper |[optional]|
**date_posted** | **string** | date when the task was posted (in the UTC format) |[optional]|
**tag** | **string** | user-defined task identifier |[optional]|
**endpoint_regular** | **string** | URL for collecting the results of the Regular taskif the Regular function is not supported in the specified endpoint, the value will be null |[optional]|
**endpoint_advanced** | **string** | URL for collecting the results of the Advanced taskif the Advanced function is not supported in the specified endpoint, the value will be null |[optional]|
**endpoint_html** | **string** | URL for collecting the results of the HTML taskif the HTML function is not supported in the specified endpoint, the value will be null |[optional]|