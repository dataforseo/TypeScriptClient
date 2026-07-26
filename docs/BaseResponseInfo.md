# BaseResponseInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**version** | **string** | the current version of the API |[optional]|
**status_code** | **number** | general status code. you can find the full list of the response codes here |[optional]|
**status_message** | **string** | general informational message. you can find the full list of general informational messages here |[optional]|
**time** | **string** | total execution time, seconds |[optional]|
**cost** | **number** | total tasks cost, USD |[optional]|
**tasks_count** | **number** | the number of tasks in the tasks array |[optional]|
**tasks_error** | **number** | the number of tasks in the tasks array returned with an error |[optional]|