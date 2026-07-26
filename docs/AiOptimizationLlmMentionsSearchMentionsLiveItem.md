# AiOptimizationLlmMentionsSearchMentionsLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**platform** | **string** | *platform received in a POST array* |[optional]|
**model_name** | **string** | *name of the AI model from which the data was retrieved*. **Note:** for the `google` platform type, the value is always `google_ai_overview` |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**question** | **string** | *relevant question* |[optional]|
**answer** | **string** | *relevant answer in markdown format*. content of the result formatted in the [markdown markup language](https://en.wikipedia.org/wiki/Markdown) |[optional]|
**sources** | **Sources[]** | *array of sources*. the sources the model cited or relied on in its final answer. learn more about the sources and how to retrieve LLM citation data at our [Help Center](https://dataforseo.com/help-center/how-to-get-llm-citation-data-with-llm-mentions-api) |[optional]|
**search_results** | **SearchResults[]** | *array of search results*. all web search outputs the model retrieved when looking up information, including duplicates and unused entries |[optional]|
**ai_search_volume** | **number** | *current AI search volume rate of a keyword*. learn more about this metric [here](https://dataforseo.com/help-center/how-the-ai-search-volume-metric-works-in-llm-mentions) |[optional]|
**monthly_searches** | **MonthlySearchesInfo[]** | *monthly AI search volume rates*. array of objects with AI search volume rates in a certain month of a year |[optional]|
**first_response_at** | **string** | *date and time when the response data was first recorded*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2025-10-21 06:25:30 +00:00` |[optional]|
**last_response_at** | **string** | *date and time when the response data was last updated*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2025-10-21 06:25:30 +00:00` |[optional]|
**brand_entities** | **BrandEntities[]** | *array of brand entities*. contains information on brands mentioned in the response |[optional]|
**fan_out_queries** | **string[]** | *array of fan-out queries*. contains related search queries derived from the main query to provide a more comprehensive response |[optional]|
**is_web_search_based** | **boolean** | *indicates whether the response was generated using web search results*. if `true`, the model retrieved live web search results to produce the response. if `false`, the response was generated from the model's internal knowledge |[optional]|