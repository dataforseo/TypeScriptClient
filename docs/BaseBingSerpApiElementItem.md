# BaseBingSerpApiElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP |[optional]|
**page** | **number** | *search results page number*. indicates the number of the SERP page on which the element is located |[optional]|
**position** | **string** | *the alignment of the element in SERP*.             can take the following values:.             `left`, `right` |[optional]|
**xpath** | **string** | *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* |[optional]|
**rectangle** | **AiModeRectangleInfo** | *rectangle parameters*.             contains cartesian coordinates and pixel dimensions of the result's snippet in SERP.             equals `null` if `calculate_rectangles` in the POST request is not set to `true` |[optional]|