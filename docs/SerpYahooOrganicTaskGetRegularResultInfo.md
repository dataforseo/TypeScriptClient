# SerpYahooOrganicTaskGetRegularResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword received in a POST array<br>keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character) |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | search engine domain in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**check_url** | **string** | direct URL to search engine results<br>you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | date and time when the result was received<br>in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”<br>example:<br>2019-11-15 12:57:46 +00:00 |[optional]|
**spell** | **SpellInfo** | autocorrection of the search engine<br>if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection |[optional]|
**refinement_chips** | **RefinementChipsInfo** | search refinement chips<br>equals null |[optional]|
**item_types** | **string[]** | types of search results found in SERP<br>contains types of all search results (items) found in the returned SERP<br>possible item types:<br>featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video;<br>note that this array contains all types of search results found in the returned SERP;<br>however, this endpoint provides data for organic, paid, and featured_snippet types only;<br>to get all items (including SERP features and rich snippets) found in the returned SERP, please refer to the Yahoo Organiс Advanced SERP endpoint |[optional]|
**se_results_count** | **number** | total number of results in SERP |[optional]|
**pages_count** | **number** | total pages retrieved<br>total number of retrieved SERPs in the result |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**items** | **BaseSerpApiElementItem[]** | items in SERP |[optional]|