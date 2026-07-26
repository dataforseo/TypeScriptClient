# MerchantGoogleProductsTaskGetAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *keyword received in a POST array*. **keyword is returned with decoded %## (plus character '+' will be decoded to a space character)** |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | *search engine domain in a POST array* |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**check_url** | **string** | *direct URL to Google Shopping results*. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**spell** | **SpellInfo** | *autocorrection of the search engine*. if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection |[optional]|
**item_types** | **string[]** | *types of search results found in Google Shopping SERP*. contains types of all search results (`items`) found in the returned SERP. possible item types:. `google_shopping_sponsored_carousel`, `google_shopping_paid`, `google_shopping_serp`, `google_shopping_carousel`, `related_searches` |[optional]|
**items_count** | **number** | *the number of results returned in the **`items`** array* |[optional]|
**items** | **BaseMerchantGoogleShoppingProductsElementItem[]** | *additional items present in the element*. contains a list of related keywords;. if there are none, equals `null` |[optional]|