# MerchantGoogleSellersTaskGetAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**product_id** | **string** | product_id received in a POST array. learn more about the parameter in this help center guide |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to Google Shopping results. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**title** | **string** | title of the product |[optional]|
**url** | **string** | URL to the product page |[optional]|
**image_url** | **string** | URL to the product image |[optional]|
**rating** | **RatingInfo** | product rating. the product popularity rate based on product reviews |[optional]|
**item_types** | **string[]** | types of search results found in Google Shopping SERP. contains types of all search results (items) found in the returned SERP. possible item types:. shops_list, buy_on_google |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**items** | **BaseMerchantGoogleShoppingSellersElementItem[]** | items in SERP |[optional]|