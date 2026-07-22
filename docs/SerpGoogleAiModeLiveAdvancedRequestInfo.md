# SerpGoogleAiModeLiveAdvancedRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keywordrequired fieldyou can specify up to 700 characters in the keyword fieldall %## will be decoded (plus character ‘+’ will be decoded to a space character)if you need to use the “%” character for your keyword, please specify it as “%25”;if you need to use the “+” character for your keyword, please specify it as “%2B”<br>learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article |[optional]|
**location_code** | **number** | search engine location coderequired field if you don't specify location_name or location_coordinateif you use this field, you don't need to specify location_name or location_coordinateyou can receive the list of available locations of the search engines with their location_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/locationsNote: check  Google Search Help for the list of countries where AI Mode is currently available |[optional]|
**language_code** | **string** | search engine language coderequired field if you don't specify language_name;if you use this field, you don't need to specify language_name;you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/ai_mode/languages |[optional]|
**device** | **string** | device typeoptional fieldreturn results for a specific device typecan take the values:desktop, mobiledefault value: desktop |[optional]|