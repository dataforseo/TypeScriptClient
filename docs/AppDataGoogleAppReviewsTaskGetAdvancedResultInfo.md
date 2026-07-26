# AppDataGoogleAppReviewsTaskGetAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**app_id** | **string** | application id received in a POST array |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**title** | **string** | title of the app. title of the application for which the reviews are collected |[optional]|
**rating** | **RatingInfo** | rating of the app. rating of the application for which the reviews are collected |[optional]|
**reviews_count** | **number** | the total number of reviews |[optional]|
**items_count** | **number** | the number of reviews items in the results array. you can get more results by using the depth parameter when setting a task |[optional]|
**items** | **GooglePlayReviewsSearch[]** | found reviews. you can get more results by using the depth parameter when setting a task |[optional]|