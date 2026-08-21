# SerpGoogleFinanceMarketsLiveAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *keyword received in a POST array*. **the keyword is returned with decoded %## (plus character '+' will be decoded to a space character)** |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | *search engine domain in a POST array* |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**check_url** | **string** | *direct URL to search engine results*. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**spell** | **SpellInfo** | *autocorrection of the search engine*. if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection;. in this case, the value will be `null` |[optional]|
**refinement_chips** | **RefinementChipsInfo** | *search refinement chips*. in this case, the value will be `null` |[optional]|
**item_types** | **string[]** | *types of search results in SERP*. contains types of search results (`items`) found in SERP;. possible item types: [google_finance_hero_groups](#google_finance_hero_groups), [google_finance_explore_market_trends](#google_finance_explore_market_trends), [google_finance_news](#google_finance_news), [google_finance_interested](#google_finance_interested), [google_finance_people_also_search](#google_finance_people_also_search) |[optional]|
**se_results_count** | **number** | *total number of results in SERP* |[optional]|
**items_count** | **number** | *the number of results returned in the **`items`** array* |[optional]|
**items** | **BaseSerpApiGoogleFinanceElementItem[]** | *elements of search results found in SERP* |[optional]|