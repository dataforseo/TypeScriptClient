# AiOptimizationChatGptLlmScraperTasksReadyResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | *task identifier of the completed task*. **unique task identifier in our system in the [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format** |[optional]|
**se** | **string** | *search engine specified when setting the task* |[optional]|
**se_type** | **string** | *type of search engine*. example: `{{low_se_type_under}}` |[optional]|
**date_posted** | **string** | *date when the task was posted (in the UTC format)* |[optional]|
**tag** | **string** | *user-defined task identifier* |[optional]|
**endpoint_regular** | **string** | *URL for collecting the results of the Regular task*. if the Regular function is not supported in the specified endpoint, the value will be `null` |[optional]|
**endpoint_advanced** | **string** | *URL for collecting the results of the Advanced task*. if the Advanced function is not supported in the specified endpoint, the value will be `null` |[optional]|
**endpoint_html** | **string** | *URL for collecting the results of the HTML task*. if the HTML function is not supported in the specified endpoint, the value will be `null` |[optional]|