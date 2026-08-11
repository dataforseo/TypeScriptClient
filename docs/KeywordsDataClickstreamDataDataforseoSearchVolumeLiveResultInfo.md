# KeywordsDataClickstreamDataDataforseoSearchVolumeLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**location_code** | **number** | *location code in a POST array*. if there is no data, then the value is `null` |[optional]|
**language_code** | **string** | *language code in a POST array*. **Note:**if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;. we use the functionality of Google Ads API to check and validate the spelling of keywords, [learn more by this link](https://support.google.com/google-ads/answer/7476658) |[optional]|
**use_clickstream** | **boolean** | *indicates if the `use_clickstream` parameter is active*. possible values: `true`, `false` |[optional]|
**items_count** | **number** | *ithe number of results returned in the `items` array* |[optional]|
**items** | **KeywordsDataClickstreamDataSearchVolumeLiveItem[]** | *array of keywords*. contains keywords and their search volume rates |[optional]|