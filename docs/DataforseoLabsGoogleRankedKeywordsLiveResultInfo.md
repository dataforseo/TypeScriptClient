# DataforseoLabsGoogleRankedKeywordsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**target** | **string** | target domain or webpage in a POST array |[optional]|
**location_code** | **number** | location code in a POST array<br>if there is no data, then the value is null |[optional]|
**language_code** | **string** | language code in a POST array<br>if there is no data, then the value is null |[optional]|
**total_count** | **number** | total number of results in our database relevant to your request |[optional]|
**items_count** | **number** | the number of results returned in the items array |[optional]|
**metrics** | **{ [key: string]: DataforseoLabsMetricsInfo; }** | ranking data relevant to the specified domain or webpage <br>ranking data is provided by the rank_group parameters that show the result’s rank considering only equivalent SERP elements |[optional]|
**metrics_absolute** | **{ [key: string]: DataforseoLabsMetricsInfo; }** | ranking data relevant to the specified domain or webpage<br>ranking data is provided by the rank_absolute parameters that indicate the result’s position among all SERP elements |[optional]|
**items** | **DataforseoLabsRankedKeywordsLiveItem[]** | contains ranked keywords and related data |[optional]|