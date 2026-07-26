# DataforseoLabsGoogleBulkKeywordDifficultyLiveRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keywords** | **string[]** | target keywords. required field. UTF-8 encoding. maximum number of keywords you can specify in this array: 1000. the keywords will be converted to lowercase format. learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article |[optional]|
**location_name** | **string** | full name of the location. required field if don’t specify location_code. you can receive the list of available locations with their location_name by making a separate request to the. https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages. example:. United Kingdom |[optional]|
**location_code** | **number** | location code. required field if don’t specify location_name. you can receive the list of available locations with their location_code by making a separate request to the. https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages. example:. 2840 |[optional]|
**language_name** | **string** | full name of the language. required field if don’t specify language_code. you can receive the list of available languages with their language_name by making a separate request to the. https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages. example:. English |[optional]|
**language_code** | **string** | language code. required field if don’t specify language_name. you can receive the list of available languages with their language_code by making a separate request to the. https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages. example:. en |[optional]|
**tag** | **string** | user-defined task identifier. optional field. the character limit is 255. you can use this parameter to identify the task and match it with the result. you will find the specified tag value in the data object of the response |[optional]|