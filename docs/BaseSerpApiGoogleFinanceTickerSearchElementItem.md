# BaseSerpApiGoogleFinanceTickerSearchElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**type** | **string** | type of element |[optional]|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP |[optional]|
**identifier** | **string** | *identifier of the element*. full identifier of the element that consists from `ticker` and `market_identifier`. example: `PX1:INDEXDB` |[optional]|
**displayed_name** | **string** | *name of the market index as displayed on Google Finance*. example: `CAC 40` |[optional]|
**url** | **string** | *URL to the page of the market index on Google Finance* |[optional]|
**location** | **string** | *location of the market index*. example: `Europe/Paris` |[optional]|
**trend** | **string** | *growth trend of the market index*. possible values: `up`, `down`, `stable` |[optional]|
**timestamp** | **string** | *date and time of the value readout*. in the UTC format: 'yyyy-mm-dd hh-mm-ss +00:00'. example:. `2025-02-10 09:40:00 +00:00` |[optional]|
**percentage_delta** | **number** | *percentage of change in value of the market index* |[optional]|