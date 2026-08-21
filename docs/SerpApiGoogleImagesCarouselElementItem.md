# SerpApiGoogleImagesCarouselElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**page** | **number** |  |[optional]|
**position** | **string** | *the alignment of the element in SERP*. can take the following values:. `left`, `right` |[optional]|
**title** | **string** | *title of the element* |[optional]|
**items** | **SerpApiCarouselElement[]** | *items of the element* |[optional]|
**rectangle** | **AiModeRectangleInfo** | *rectangle parameters*. contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP. **note:**calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why `rectangle` always equals `null` |[optional]|