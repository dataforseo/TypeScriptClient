# AmazonRankedSerpElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**serp_item** | **AmazonInfo** | contains data on the SERP element. the list of supported SERP elements can be found below |[optional]|
**check_url** | **string** | direct URL to Amazon results. you can use it to make sure that we provided accurate results |[optional]|
**serp_item_types** | **string[]** | direct URL to Amazon results. contains types of all search results (items) found in the returned SERP;. possible item types:. amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches |[optional]|
**se_results_count** | **number** | total number of results in Amazon SERP |[optional]|
**last_updated_time** | **string** | date and time when keyword data was updated. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**previous_updated_time** | **string** | previous to the most recent update of SERP data. in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”. example:. 2020-09-12T00:07:43.0733218Z |[optional]|