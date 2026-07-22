# GoogleFlightsSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | group rank in SERP<br>position within a group of elements with identical type values;<br>positions of elements with different type values are omitted from rank_group;<br>always equals 0 for desktop |[optional]|
**rank_absolute** | **number** | absolute rank in SERP<br>absolute position among all the elements in SERP<br>always equals 0 for desktop |[optional]|
**title** | **string** | title of the row |[optional]|
**url** | **string** | URL of the third-party review source |[optional]|
**items** | **GoogleFlightsElement[]** | contains arrays of elements available in the list |[optional]|