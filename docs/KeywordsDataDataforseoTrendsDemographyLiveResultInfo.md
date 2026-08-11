# KeywordsDataDataforseoTrendsDemographyLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keywords** | **string[]** | *keywords in a POST array* |[optional]|
**type** | **string** | type of element |[optional]|
**location_code** | **number** | *location code in a POST array*. if there is no data, then the value is_`null`n |[optional]|
**language_code** | **string** | *language code in a POST array*. if there is no data, then the value is_`null`n |[optional]|
**datetime** | **string** | *date and time when the result was received*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**items_count** | **number** | *the number of results returned in the **`items`** array* |[optional]|
**items** | **DataforseoTrendsDemographyElementItem[]** | *contains keyword popularity and related data* |[optional]|