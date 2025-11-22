# AiOptimizationLlmMentionsSearchLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**platform** | **string** | platform received in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**question** | **string** | relevant question |[optional]|
**answer** | **string** | relevant answer in markdown format<br>content of the result formatted in the markdown markup language |[optional]|
**sources** | **Sources[]** | array of sources<br>the sources the model cited or relied on in its final answer |[optional]|
**search_results** | **SearchResults[]** | array of search results<br>all web search outputs the model retrieved when looking up information, including duplicates and unused entries |[optional]|
**ai_search_volume** | **number** | current AI search volume rate of a keyword<br>learn more about this metric here |[optional]|
**monthly_searches** | **MonthlySearchesInfo[]** |  |[optional]|