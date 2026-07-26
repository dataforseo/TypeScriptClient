# GoogleFinanceFuturesChainElement

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**expiration_timestamp** | **string** | futures’ date and time of expiration. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2025-02-10 09:40:00 +00:00 |[optional]|
**symbol** | **string** | futures’ symbol |[optional]|
**price** | **number** | price of the market instrument. price of the market instrument at a given timestamp |[optional]|
**price_currency** | **string** | currency of the price value |[optional]|
**price_delta** | **number** | change in price of the market instrument. change in price at a given timestamp |[optional]|
**percentage_delta** | **number** | percentage of change in value of the market index |[optional]|
**trend** | **string** | growth trend of the market index. possible values: up, down, stable |[optional]|