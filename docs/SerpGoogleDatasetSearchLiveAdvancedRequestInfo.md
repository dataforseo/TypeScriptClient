# SerpGoogleDatasetSearchLiveAdvancedRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *keyword*. **required field**. you can specify **up to 700 characters** in the `keyword` field. all %## will be decoded (plus character ‘+’ will be decoded to a space character). if you need to use the “%” character for your `keyword`, please specify it as “%25”;. if you need to use the “+” character for your `keyword`, please specify it as “%2B”;. learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) |[optional]|
**language_code** | **string** | *search engine language code*. optional field if you don't specify `language_name`. if you use this field, you don't need to specify `language_name`. possible value:. `en` |[optional]|
**depth** | **number** | *parsing depth*. optional field. number of results in SERP. default value: `20`. max value: `200`. **Your account will be billed per each SERP containing up to 20 results;**. Setting depth above 20 may result in additional charges if the search engine returns more than 20 results;. If the specified depth is higher than the number of results in the response, the difference will be refunded to your account balance automatically. |[optional]|
**device** | **string** | *device type*. optional field. return results for a specific device type. possible value: `desktop` |[optional]|
**language_name** | **string** | *full name of search engine language*. optional field. if you use this field, you don't need to specify `language_code`. possible value:. `English` |[optional]|
**os** | **string** | *device operating system*. optional field. choose from the following values: `windows`, `macos`. default value: `windows` |[optional]|
**tag** | **string** | *user-defined task identifier*. optional field. *the character limit is 255*. you can use this parameter to identify the task and match it with the result. you will find the specified `tag` value in the `data` object of the response |[optional]|
**last_updated** | **string** | *last time the dataset was updated*. optional field. possible values: `1m`, `1y`, `3y` |[optional]|
**file_formats** | **string[]** | *file formats of the dataset*. optional field. possible values: `other`, `archive`, `text`, `image`, `document`, `tabular` |[optional]|
**usage_rights** | **string** | *usage rights of the dataset*. optional field. possible values: `commercial`, `noncommercial` |[optional]|
**is_free** | **boolean** | *indicates whether displayed datasets are free*. optional field. possible values: `true`, `false` |[optional]|
**topics** | **string[]** | *dataset topics*. optional field. possible values: `humanities`, `social_sciences`, `life_sciences`, `agriculture`, `natural_sciences`, `geo`, `computer`, `architecture_and_urban_planning`, `engineering` |[optional]|