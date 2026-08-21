# AiOptimizationLlmMentionsTopMentionedDomainsLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**domain** | **string** | *domain name*. the domain name of the website found in LLM mentions for the specified target |[optional]|
**location** | **AggregatedMetricsItemInfo[]** | *location-based grouping*. array of objects containing mention metrics segmented by geographical location |[optional]|
**language** | **AggregatedMetricsItemInfo[]** | *language-based grouping*. array of objects containing mention metrics segmented by content language |[optional]|
**platform** | **AggregatedMetricsItemInfo[]** | *platform-based grouping*. array of group elements containing mention metrics segmented by AI platform |[optional]|
**sources_domain** | **AggregatedMetricsItemInfo[]** | *found top source domains relevant to the target*. array of objects containing data on top domains that are cited as sources in LLM responses. learn more about the sources and how to retrieve LLM citation data at our [Help Center](https://dataforseo.com/help-center/how-to-get-llm-citation-data-with-llm-mentions-api) |[optional]|
**search_results_domain** | **AggregatedMetricsItemInfo[]** | *found top search results domains relevant to the target*. array of objects containing data on top domains that appear in search results related to LLM queries;. **Note:** available only for `chat_gpt` |[optional]|
**brand_entities_title** | **AggregatedMetricsItemInfo[]** | *data on brand entities relevant to the target*. array of objects containing data on brand entity titles that appear in search results related to LLM queries;. **Note:** available only for `chat_gpt` |[optional]|
**brand_entities_category** | **AggregatedMetricsItemInfo[]** | *data on brand entities relevant to the target*. array of objects containing data on brand entity categories that appear in search results related to LLM queries;. **Note:** available only for `chat_gpt` |[optional]|
**total** | **AggregatedMetricsInfoTotalInfo** | *aggregated mentions metrics summary*. contains overall aggregated LLM mention metrics across all dimensions |[optional]|