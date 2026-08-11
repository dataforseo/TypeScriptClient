# SerpGoogleOrganicLiveAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *keyword received in a POST array***the keyword is returned with decoded %## (plus character '+' will be decoded to a space character)** |[optional]|
**type** | **string** | type of element |[optional]|
**se_domain** | **string** | *search engine domain in a POST array* |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**check_url** | **string** | *direct URL to search engine results*. you can use it to make sure that we provided accurate results |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**spell** | **SpellInfo** | *autocorrection of the search engine*. if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection |[optional]|
**refinement_chips** | **RefinementChipsInfo** | *search refinement chips* |[optional]|
**item_types** | **string[]** | *types of search results in SERP*. contains types of search results (`items`) found in SERP.. possible item types:. [answer_box](#answer_box), [app](#app), [carousel](#carousel), [multi_carousel](#multi_carousel), [featured_snippet](#featured_snippet), [google_flights](#google_flights), [google_reviews](#google_reviews), [third_party_reviews](#third_party_reviews), [images](#images), [jobs](#jobs), [knowledge_graph](#knowledge_graph), [local_pack](#local_pack), [hotels_pack](#hotels_pack), [map](#map), [organic](#organic), [paid](#paid), [people_also_ask](#people_also_ask), [related_searches](#related_searches), [people_also_search](#people_also_search), [shopping](#shopping), [top_stories](#top_stories), [twitter](#twitter), [video](#video), [events](#events), [recipes](#recipes), [top_sights](#top_sights), [scholarly_articles](#scholarly_articles), [popular_products](#popular_products),  [questions_and_answers](#questions_and_answers), [find_results_on](#find_results_on), [stocks_box](#stocks_box), [commercial_units](#commercial_units), [local_services](#local_services), [google_hotels](#google_hotels), [math_solver](#math_solver), [currency_box](#currency_box),[product_considerations](#product_considerations), [short_videos](#short_videos), [refine_products](#refine_products), [perspectives](#perspectives), [discussions_and_forums](#discussions_and_forums), [compare_sites](#compare_sites), [ai_overview](#ai_overview) |[optional]|
**se_results_count** | **number** | *total number of results in SERP* |[optional]|
**pages_count** | **number** | *total search results pages retrieved*. total number of retrieved SERPs in the result |[optional]|
**items_count** | **number** | *the number of results returned in the **`items`** array* |[optional]|
**items** | **BaseSerpApiElementItem[]** | *items of the element* |[optional]|