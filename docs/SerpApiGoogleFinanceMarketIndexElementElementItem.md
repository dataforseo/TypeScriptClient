# SerpApiGoogleFinanceMarketIndexElementElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**ticker** | **string** | *ticker of the market index*. example: `DAX` |[optional]|
**market_identifier** | **string** | *market identifier*. example: `INDEXDB` |[optional]|
**index_value** | **number** | *value of the market index*. numerical value of the index at a given `timestamp` |[optional]|
**index_value_delta** | **number** | *change in value of the market index*. change in the `index_value` at a given `timestamp` |[optional]|
**identifier** | **string** | *identifier of the element*. full identifier of the element that consists from `ticker` and `market_identifier`. example: `PX1:INDEXDB` |[optional]|
**displayed_name** | **string** | *name of the market index as displayed on Google Finance*. example: `CAC 40` |[optional]|
**url** | **string** | *URL to the page of the market index on Google Finance* |[optional]|
**location** | **string** | *location of the market index*. example: `Europe/Paris` |[optional]|
**trend** | **string** | *growth trend of the market index*. possible values: `up`, `down`, `stable` |[optional]|
**timestamp** | **string** | *date and time of the value readout*. in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2025-02-10 09:40:00 +00:00` |[optional]|
**percentage_delta** | **number** | *percentage of change in value of the market index* |[optional]|