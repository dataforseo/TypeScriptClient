# AiModeAiOverviewInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | group rank in SERPposition within a group of elements with identical type valuespositions of elements with different type values are omitted from rank_group |[optional]|
**rank_absolute** | **number** | absolute rank in SERPabsolute position among all the elements in SERP |[optional]|
**page** | **number** | SERP pageSERP page on which the element ranks |[optional]|
**position** | **string** | the alignment of the element in SERPcan take the following values:left, right |[optional]|
**xpath** | **string** | the XPath of the element |[optional]|
**markdown** | **string** | content of the element in markdown formatthe text of the ai_overview formatted in the markdown markup language |[optional]|
**items** | **BaseSerpApiAiModeAiOverviewElementItem[]** | elements of search results found in SERP |[optional]|
**references** | **AiModeAiOverviewReferenceInfo[]** | additional references relevant to the itemincludes references to webpages that may have been used to generate the ai_overview |[optional]|
**rectangle** | **AiModeRectangleInfo** | rectangle parameterscontains cartesian coordinates and pixel dimensions of the result's snippet in SERPequals null if calculate_rectangles in the POST request is not set to true |[optional]|