# SerpGoogleFinanceMarketsLiveHtmlRequestInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**location_code** | **number** | search engine location coderequired field if you don't specify location_nameif you use this field, you don't need to specify location_nameyou can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locationsexample:2840 |[optional]|
**language_code** | **string** | search engine language coderequired field if you don't specify language_nameif you use this field, you don't need to specify language_nameyou can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:en |[optional]|
**device** | **string** | device typeoptional fieldpossible value: desktop |[optional]|
**location_name** | **string** | full name of search engine locationrequired field if you don't specify location_codeif you use this field, you don't need to specify location_codeyou can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locationsexample:London,England,United Kingdom |[optional]|
**language_name** | **string** | full name of search engine languagerequired field if you don't specify language_code if you use this field, you don't need to specify language_codeyou can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languagesexample:English |[optional]|
**os** | **string** | device operating systemoptional fieldpossible values: windows |[optional]|
**tag** | **string** | user-defined task identifieroptional fieldthe character limit is 255you can use this parameter to identify the task and match it with the resultyou will find the specified tag value in the data object of the response |[optional]|
**market_type** | **string** | type of google finance marketoptional fieldpossible values: most-active, indexes, indexes/americas, indexes/europe-middle-east-africa, indexes/asia-pacific, gainers, losers, climate-leaders, cryptocurrencies, currenciesdefault value: most-active |[optional]|