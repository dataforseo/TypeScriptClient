# SerpApiKnowledgeGraphAiOverviewItemElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**asynchronous_ai_overview** | **boolean** | *indicates whether the element is loaded asynchronously*. if `true`, the `ai_overview` element is loaded asynchronously;. if `false`, the `ai_overview` element is loaded from cache;. to obtain the content of `ai_overview` elements, use the `load_async_ai_overview` parameter in the POST request |[optional]|
**items** | **BaseSerpApiAiOverviewElementItem[]** | *contains results featured in the 'hotels_pack' element of SERP* |[optional]|
**references** | **AiModeAiOverviewReferenceInfo[]** | *additional references relevant to the item*. includes references to webpages that may have been used to generate the `ai_overview` |[optional]|