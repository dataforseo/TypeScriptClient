# AiOptimizationLlmMentionssLiveItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**key** | **string** | URL of a found page<br>the URL of a page found in LLM mentions for the specified target |[optional]|
**location** | **GroupElement[]** | location-based grouping<br>array of objects containing page mention metrics segmented by geographical location |[optional]|
**language** | **GroupElement[]** | language-based grouping<br>array of objects containing page mention metrics segmented by content language |[optional]|
**platform** | **GroupElement[]** | platform-based grouping<br>array of group elements containing page mention metrics segmented by AI platform |[optional]|
**sources_domain** | **GroupElement[]** | source domains relevant to the specific page<br>array of objects containing data on domains that are cited as sources in LLM responses |[optional]|
**search_results_domain** | **GroupElement[]** | search results domains relevant to the specific page<br>array of objects containing data on domains that appear in search results related to LLM queries |[optional]|
**brand_entities_title** | **GroupElement[]** | data on brand entities relevant to the target<br>array of objects containing data on brand entity titles that appear in search results related to LLM queries |[optional]|
**brand_entities_category** | **GroupElement[]** | data on brand entities relevant to the target<br>array of objects containing data on brand entity categories that appear in search results related to LLM queries |[optional]|