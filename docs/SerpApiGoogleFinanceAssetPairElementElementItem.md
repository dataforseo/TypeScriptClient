# SerpApiGoogleFinanceAssetPairElementElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**base_symbol** | **string** | *identifier of the base asset in a pair*. example: `EUR` |[optional]|
**quote_symbol** | **string** | *identifier of the quote asset in a pair*. example: `USD` |[optional]|
**base_display_name** | **string** | *full name of the base asset in a pair*. example: `Euro` |[optional]|
**quote_display_name** | **string** | *full name of the base asset in a pair*. example: `Euro` |[optional]|
**price** | **number** | *value of the base asset compared to the quote asset* |[optional]|
**price_delta** | **number** | *change in price*. change in `price` at a given `timestamp` |[optional]|
**identifier** | **string** | *identifier of the element*. full identifier of the element that consists from `ticker` and `market_identifier`. example: `PX1:INDEXDB` |[optional]|
**displayed_name** | **string** | *name of the market index as displayed on Google Finance*. example: `CAC 40` |[optional]|
**url** | **string** | *URL to the page of the market index on Google Finance* |[optional]|
**location** | **string** | *location of the market index*. example: `Europe/Paris` |[optional]|
**trend** | **string** | *growth trend of the market index*. possible values: `up`, `down`, `stable` |[optional]|
**timestamp** | **string** | *date and time of the value readout*. in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2025-02-10 09:40:00 +00:00` |[optional]|
**percentage_delta** | **number** | *percentage of change in value of the market index* |[optional]|