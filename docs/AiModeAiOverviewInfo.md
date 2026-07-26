# AiModeAiOverviewInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP |[optional]|
**page** | **number** | *SERP page*. SERP page on which the element ranks |[optional]|
**position** | **string** | *the alignment of the element in SERP*. can take the following values:. `left`, `right` |[optional]|
**xpath** | **string** | *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* |[optional]|
**markdown** | **string** | *content of the element in markdown format*. the text of the `ai_overview` formatted in the [markdown markup language](https://en.wikipedia.org/wiki/Markdown) |[optional]|
**items** | **BaseSerpApiAiModeAiOverviewElementItem[]** | *items present in the element* |[optional]|
**references** | **AiModeAiOverviewReferenceInfo[]** | *additional references relevant to the item*. includes references to webpages that may have been used to generate the `ai_overview` |[optional]|
**rectangle** | **AiModeRectangleInfo** | *rectangle parameters*. contains cartesian coordinates and pixel dimensions of the result's snippet in SERP. equals `null` if `calculate_rectangles` in the POST request is not set to `true` |[optional]|