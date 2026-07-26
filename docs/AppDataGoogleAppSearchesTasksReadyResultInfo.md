# AppDataGoogleAppSearchesTasksReadyResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | task identifier of the completed task. unique task identifier in our system in the UUID format |[optional]|
**se** | **string** | search engine specified when setting the task |[optional]|
**se_type** | **string** | search engine type |[optional]|
**date_posted** | **string** | date when the task was posted (in the UTC format) |[optional]|
**tag** | **string** | user-defined task identifier |[optional]|
**endpoint_advanced** | **string** | URL for collecting the results of the Google App Searches task |[optional]|
**endpoint_html** | **string** | URL for collecting the results of the Google App Searches HTML task. if HTML tasks are not supported in the specified endpoint, the value will be null |[optional]|