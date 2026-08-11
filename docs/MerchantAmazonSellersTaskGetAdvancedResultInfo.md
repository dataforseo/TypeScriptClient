# MerchantAmazonSellersTaskGetAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**asin** | **string** | *`asin` received in a POST array*. learn more about ASINs in [this help center guide](https://dataforseo.com/help-center/asin-in-amazon-api) |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | *search engine domain received in a POST array* |[optional]|
**location_code** | **number** | *location code received in a POST array* |[optional]|
**language_code** | **string** | *language code received in a POST array* |[optional]|
**check_url** | **string** | *direct URL to Amazon results*. you can use it to make sure the provided results are accurate |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**title** | **string** | *product title*. title of the product relevant to the `asin` received in a POST array |[optional]|
**image** | **string** | *product image url*. image URL of the product relevant to the `asin` received in a POST array |[optional]|
**item_types** | **string[]** | *types of search results found in Amazon Sellers SERP*. contains types of all search results (`items`) found in the returned SERP. possible item types:. `amazon_seller_main_item`, `amazon_seller_item` |[optional]|
**items_count** | **number** | *the number of results returned in the **`items`** array* |[optional]|
**items** | **BaseMerchantAmazonSellersElementItem[]** | *items in SERP* |[optional]|