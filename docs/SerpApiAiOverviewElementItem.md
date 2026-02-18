# SerpApiAiOverviewElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**title** | **string** | title of the element |[optional]|
**text** | **string** | additional text of the element in SERP |[optional]|
**markdown** | **string** | content of the element in markdown format |[optional]|
**links** | **LinkElement[]** | sitelinks<br>the links shown below some of Google’s search results<br>if there are none, equals null |[optional]|
**images** | **AiModeImagesElementInfo[]** | images of the element<br>if there is none, equals null |[optional]|
**references** | **AiModeAiOverviewReferenceInfo[]** | references relevant to the element<br>includes references to webpages that were used to generate the ai_overview_element |[optional]|