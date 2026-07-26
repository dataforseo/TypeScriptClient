# DataforseoLabsGoogleKeywordIdeasLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**seed_keywords** | **string[]** | keywords in a POST array. keywords are returned with decoded %## (plus character ‘+’ will be decoded to a space character) |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**total_count** | **number** | total number of results relevant to your request in our database |[optional]|
**items_count** | **number** | number of results returned in the items array |[optional]|
**offset** | **number** | current offset value |[optional]|
**offset_token** | **string** | offset token for subsequent requests. you can use the string provided in this field to get the subsequent results of the initial task;. note: offset_token values are unique for each subsequent task |[optional]|
**items** | **KeywordDataInfo[]** | contains keyword ideas and related data |[optional]|