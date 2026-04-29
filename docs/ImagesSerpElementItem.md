# ImagesSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP<br>position within a group of elements with identical type values;<br>positions of elements with different type values are omitted from rank_group;<br>always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP<br>absolute position among all the elements in SERP<br>always equals 0 for desktop |[optional]|
**title** | **string** | reference page title |[optional]|
**url** | **string** | URL |[optional]|
**items** | **AiModeImagesElementInfo[]** | contains arrays of specific images |[optional]|
**related_image_searches** | **RelatedImageSearchesElement[]** | contains keywords and images related to the specified search term<br>if there are none, equals null |[optional]|