# MerchantAmazonAsinLiveAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**asin** | **string** | *ASIN received in a POST array*. the unique product identifier in Amazon (ASIN) received in a POST array. learn more about the identified in [this help center guide](https://dataforseo.com/help-center/asin-in-amazon-api) |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | *Amazon domain in a POST array* |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**check_url** | **string** | *direct URL to Amazon results*. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**item_types** | **string[]** | *types of search results found on Amazon*. contains types of all search results (`items`) found in the returned SERP. possible item types:. `amazon_product_info` |[optional]|
**items_count** | **number** | *the number of results returned in the **`items`** array* |[optional]|
**items** | **AmazonProductInfo[]** | *Amazon product info items* |[optional]|