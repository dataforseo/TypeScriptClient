# Total

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**location** | **GroupElement[]** | location-based grouping<br>array of objects containing mention metrics segmented by geographical location |[optional]|
**language** | **GroupElement[]** | language-based grouping<br>array of objects containing mention metrics segmented by content language |[optional]|
**platform** | **GroupElement[]** | platform-based grouping<br>array of group elements containing mention metrics segmented by AI platform |[optional]|
**sources_domain** | **GroupElement[]** | found source domains relevant to the target<br>array of objects containing data on top domains that are cited as sources in LLM responses |[optional]|
**search_results_domain** | **GroupElement[]** | found search results domains relevant to the target<br>array of objects containing data on top domains that appear in search results related to LLM queries |[optional]|