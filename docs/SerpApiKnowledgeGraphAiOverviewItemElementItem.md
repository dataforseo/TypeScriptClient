# SerpApiKnowledgeGraphAiOverviewItemElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**asynchronous_ai_overview** | **boolean** | indicates whether the element is loaded asynchronously<br>if true, the ai_overview element is loaded asynchronously;<br>if false, the ai_overview element is loaded from cache;<br>to obtain the content of ai_overview elements, use the load_async_ai_overview parameter in the POST request |[optional]|
**items** | **BaseSerpApiAiOverviewElementItem[]** | popular keywords relevant to the initial search query<br>if there are none, equals null |[optional]|
**references** | **AiModeAiOverviewReferenceInfo[]** | additional references relevant to the item<br>includes references to webpages that may have been used to generate the ai_overview |[optional]|