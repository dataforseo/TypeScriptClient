# BusinessDataTrustpilotReviewsTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**domain** | **string** | domain of the business entity |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**title** | **string** | title of the ‘reviews’ element on Trustpilot. the name of the business entity for which the reviews are collected |[optional]|
**location** | **string** | location of the business entity as specified on Trustpilot. address of the business entity for which the reviews are collected |[optional]|
**reviews_count** | **string** | the total number of reviews |[optional]|
**rating** | **any** | rating of the corresponding business entity. popularity rate based on reviews and displayed in SERP |[optional]|
**items_count** | **number** | the number of items in the results array. you can get more results by using the depth parameter when setting a task |[optional]|
**items** | **TrustpilotReviewSearch[]** | found reviews. you can get more results by using the depth parameter when setting a task |[optional]|