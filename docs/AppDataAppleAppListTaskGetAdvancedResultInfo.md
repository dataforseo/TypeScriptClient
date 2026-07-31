# AppDataAppleAppListTaskGetAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *app collection received in a POST array* |[optional]|
**se_domain** | **string** | *search engine domain in a POST array* |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**check_url** | **string** | *direct URL to search engine results*. in this case, the value will be `null` |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**se_results_count** | **number** | *the total number of results* |[optional]|
**items_count** | **number** | *the number of app items in the results array*. you can get more results by using the `depth` parameter when setting a task |[optional]|
**items** | **AppStoreSearchOrganic[]** | *found apps*. you can get more results by using the `depth` parameter when setting a task |[optional]|