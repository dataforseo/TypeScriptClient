# KeywordsDataBingSearchVolumeHistoryTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword in a POST array |[optional]|
**location_code** | **number** | location code in a POST array. if there is no data, then the value is null |[optional]|
**language_code** | **string** | language code in a POST array. if there is no data, then the value is null |[optional]|
**device** | **string[]** |  |[optional]|
**period** | **string** | time period. indicates if returned data is aggregated to a certain time period. default value monthly |[optional]|
**searches** | **SearchVolumeHistorySearchInfo** | contains results distributed by device type. if the device parameter is not specified, the data will be returned for all available device types |[optional]|