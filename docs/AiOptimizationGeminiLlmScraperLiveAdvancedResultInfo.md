# AiOptimizationGeminiLlmScraperLiveAdvancedResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *keyword received in a POST array***the keyword is returned with decoded %## (plus symbol '+' will be decoded to a space character)** |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**model** | **string** | *indicates the model version* |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**markdown** | **string** | *content of the element in markdown format*. content of the result formatted in the [markdown markup language](https://en.wikipedia.org/wiki/Markdown) |[optional]|
**sources** | **SourceInfo[]** | *array of sources*. the sources the model actually cited or relied on in its final answer |[optional]|
**se_results_count** | **number** | *total number of results* |[optional]|
**item_types** | **string[]** | *types of search results*. contains types of search results (`items`) found in SERP.. possible item types:. `gemini_text`, `gemini_table`, `gemini_images` |[optional]|
**items_count** | **number** | *the number of results returned in the **`items`** array* |[optional]|
**items** | **BaseGeminiLlmScraperElementItem[]** | *elements of Gemini results* |[optional]|