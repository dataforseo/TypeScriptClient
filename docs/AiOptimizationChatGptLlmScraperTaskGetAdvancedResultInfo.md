# AiOptimizationChatGptLlmScraperTaskGetAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *keyword received in a POST array***the keyword is returned with decoded %## (plus symbol '+' will be decoded to a space character)** |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**model** | **string** | *indicates the model version* |[optional]|
**check_url** | **string** | *direct URL to search engine results*you can use it to make sure that we provided exact results |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**markdown** | **string** | *content of the element in markdown format*. content of the result formatted in the [markdown markup language](https://en.wikipedia.org/wiki/Markdown) |[optional]|
**search_results** | **ChatgptSearchResult[]** | *array of search results*. all web search outputs the model retrieved when looking up information, including duplicates and unused entries |[optional]|
**sources** | **SourceInfo[]** | *array of sources*. the sources the model actually cited or relied on in its final answer |[optional]|
**fan_out_queries** | **string[]** | *array of fan-out queries*. contains related search queries derived from the main query to provide a more comprehensive response |[optional]|
**brand_entities** | **ChatGptBrandEntity[]** | *array of brand entities*. contains information on brands mentioned in the response |[optional]|
**se_results_count** | **number** | *total number of results* |[optional]|
**item_types** | **string[]** | *types of search results*. contains types of search results (`items`) found.. possible item types:. `chat_gpt_text`, `chat_gpt_table`, `chat_gpt_navigation_list`, `chat_gpt_images`, `chat_gpt_local_businesses`, `chat_gpt_products` |[optional]|
**items_count** | **number** | *the number of results returned in the **`items`** array* |[optional]|
**items** | **BaseChatGptLlmScraperElementItem[]** | *items present in the element* |[optional]|