# BaseSerpApiElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**page** | **number** | *search results page number*. indicates the number of the SERP page on which the element is located |[optional]|
**position** | **string** | *the alignment of the element in SERP*. can take the following values:. `left`, `right` |[optional]|
**xpath** | **string** | *the [XPath](https://en.wikipedia.org/wiki/XPath) of the element* |[optional]|
**rectangle** | **AiModeRectangleInfo** | *rectangle parameters*. contains cartesian coordinates and pixel dimensions of the result's snippet in SERP. equals `null` if `calculate_rectangles` in the POST request is not set to `true` |[optional]|