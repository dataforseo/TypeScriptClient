# AiOptimizationResultTotalInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**location** | **GroupElement[]** | location-based groupingarray of objects containing mention metrics segmented by geographical location |[optional]|
**language** | **GroupElement[]** | language-based groupingarray of objects containing mention metrics segmented by content language |[optional]|
**platform** | **GroupElement[]** | platform-based groupingarray of group elements containing mention metrics segmented by AI platform |[optional]|
**sources_domain** | **GroupElement[]** | found source domains relevant to the targetarray of objects containing data on top domains that are cited as sources in LLM responses |[optional]|
**search_results_domain** | **GroupElement[]** | found search results domains relevant to the targetarray of objects containing data on top domains that appear in search results related to LLM queries |[optional]|
**brand_entities_title** | **GroupElement[]** | data on brand entities relevant to the targetarray of objects containing data on brand entity titles that appear in search results related to LLM queries |[optional]|
**brand_entities_category** | **GroupElement[]** | data on brand entities relevant to the targetarray of objects containing data on brand entity categories that appear in search results related to LLM queries |[optional]|