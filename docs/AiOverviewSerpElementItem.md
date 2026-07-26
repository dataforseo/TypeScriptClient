# AiOverviewSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP. position within a group of elements with identical type values;. positions of elements with different type values are omitted from rank_group;. always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP. absolute position among all the elements in SERP. always equals 0 for desktop |[optional]|
**asynchronous_ai_overview** | **boolean** | indicates whether the element is loaded asynchronously. if true, the ai_overview element is loaded asynchronously;. if false, the ai_overview element is loaded from cache;. to obtain the content of ai_overview elements, use the load_async_ai_overview parameter in the POST request |[optional]|
**markdown** | **string** | content of the element in markdown format. the text of the ai_overview formatted in the markdown markup language |[optional]|
**items** | **BaseSerpApiAiOverviewElementItem[]** | contains arrays of elements available in the list |[optional]|
**references** | **AiModeAiOverviewReferenceInfo[]** | references relevant to the element. includes references to webpages that were used to generate the ai_overview_element |[optional]|