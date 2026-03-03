# SerpApiAiModeAiOverviewElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the element |[optional]|
**text** | **string** | text or description of the element in SERP |[optional]|
**markdown** | **string** | content of the element in markdown format |[optional]|
**links** | **AiModeLinkElementInfo[]** | website links featured in the elementif there are none, equals null |[optional]|
**images** | **AiModeImagesElementInfo[]** | images of the elementif there are none, equals null |[optional]|
**references** | **AiModeAiOverviewReferenceInfo[]** | references relevant to the elementincludes references to webpages that were used to generate the ai_overview_element |[optional]|