# SerpApiGoogleFinanceNewsElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP |[optional]|
**title** | **string** | *title of the news element*. example: `In the news` |[optional]|
**sub_title** | **string** | *sub-title of the news element*. example: `Based on Europe, Middle East, and Africa` |[optional]|
**items** | **GoogleFinanceNewsElement[]** | *market indexes data*. array of items containing market indexes data;. possible `type` of items: `google_finance_asset_pair_element`, `google_finance_market_instrument_element`, `google_finance_market_index_element` |[optional]|