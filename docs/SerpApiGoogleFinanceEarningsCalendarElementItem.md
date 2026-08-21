# SerpApiGoogleFinanceEarningsCalendarElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values. positions of elements with different `type` values are omitted from `rank_group` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP |[optional]|
**items** | **GoogleFinanceEarningsCalendarElement[]** | *market indexes data*. array of items containing market indexes data;. possible `type` of items: `google_finance_asset_pair_element`, `google_finance_market_instrument_element`, `google_finance_market_index_element` |[optional]|