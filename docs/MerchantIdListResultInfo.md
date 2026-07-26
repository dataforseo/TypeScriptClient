# MerchantIdListResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**id** | **string** | task identifier. unique task identifier in our system in the UUID format |[optional]|
**url** | **string** | URL of the task. URL you used for making an API call |[optional]|
**datetime_posted** | **string** | date and time when the task was made. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2023-01-15 12:57:46 +00:00 |[optional]|
**datetime_done** | **string** | date and time when the task was completed. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2023-01-15 12:57:46 +00:00 |[optional]|
**status** | **string** | informational message of the task. you can find the full list of general informational messages here |[optional]|
**cost** | **number** | total tasks cost, USD |[optional]|
**metadata** | **{ [key: string]: any; }** | contains parameters you specified in the POST request |[optional]|