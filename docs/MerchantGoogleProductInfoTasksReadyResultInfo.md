# MerchantGoogleProductInfoTasksReadyResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | task identifier of the completed task. unique task identifier in our system in the UUID format |[optional]|
**se** | **string** | search engine specified when setting the task |[optional]|
**se_type** | **string** | type of search engine. can take the following values: shopping_specifications |[optional]|
**date_posted** | **string** | date when the task was posted (in the UTC format) |[optional]|
**tag** | **string** | user-defined task identifier |[optional]|
**endpoint_advanced** | **string** | URL for collecting the results of the Google Shopping Product Specifications Advanced task |[optional]|
**endpoint_html** | **string** | URL for collecting the results of the Google Shopping Product Specifications HTML task. note: HTML is not available for this endpoint, the value will be null |[optional]|