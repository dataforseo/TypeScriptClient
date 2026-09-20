# DataforseoLabsGoogleSearchIntentLiveRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keywords** | **string[]** | *target keywords*. **required field**. UTF-8 encoding. maximum number of keywords you can specify in this array: 1000;. the keywords will be converted to lowercase format. learn more about rules and limitations of `keyword` and `keywords` fields in DataForSEO APIs in this [Help Center article](https://dataforseo.com/help-center/rules-and-limitations-of-keyword-and-keywords-fields-in-dataforseo-apis) |[optional]|
**tag** | **string** | *user-defined task identifier*. optional field. *the character limit is 255*. you can use this parameter to identify the task and match it with the result. you will find the specified `tag` value in the `data` object of the response |[optional]|