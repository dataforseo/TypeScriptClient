# SerpGoogleDatasetInfoLiveAdvancedRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**dataset_id** | **string** | *ID of the dataset*. **required field**. you can find dataset ID in the dataset URL or `dataset` item of [Google Dataset Search](https://docs.dataforseo.com/v3/serp/google/dataset_search/live/advanced) result. example:. `L2cvMTFqbl85ZHN6MQ==` |[optional]|
**language_code** | **string** | *search engine language code*. optional field. if you use this field, you don't need to specify `language_name`. possible value:. `en` |[optional]|
**device** | **string** | *device type*. optional field. return results for a specific device type. possible value: `desktop` |[optional]|
**language_name** | **string** | *full name of search engine language*. optional field. if you use this field, you don't need to specify `language_code`. possible value:. `English` |[optional]|
**os** | **string** | *device operating system*. optional field. possible values: `windows`, `macos`. default value: `windows` |[optional]|
**tag** | **string** | *user-defined task identifier*. optional field. *the character limit is 255*. you can use this parameter to identify the task and match it with the result. you will find the specified `tag` value in the `data` object of the response |[optional]|