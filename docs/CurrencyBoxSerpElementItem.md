# CurrencyBoxSerpElementItem

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**rank_group** | **number** | *group rank in SERP*. position within a group of elements with identical `type` values;. positions of elements with different `type` values are omitted from `rank_group`;. always equals `0` for `desktop` |[optional]|
**rank_absolute** | **number** | *absolute rank in SERP*. absolute position among all the elements in SERP. always equals `0` for `desktop` |[optional]|
**value** | **number** | *the value of the rating* |[optional]|
**converted_value** | **number** | *value converted to a requested currency*. indicates the exact value based on Google Fincance data at the time when our API pulled the results. note that exchange rates displayed in the `currency_box` element may be delayed according to [the Google Finance disclaimer](https://www.google.com/intl/en_us/googlefinance/disclaimer/) |[optional]|
**currency** | **string** | *currency of the listed price*. ISO code of the currency applied to the price |[optional]|
**converted_currency** | **string** | *converted currency* |[optional]|
**timestamp** | **string** | *date and time when the result was published*. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. `2019-11-15 12:57:46 +00:00` |[optional]|
**table** | **Table** | *table present in the element*. the header and content of the table present in the element |[optional]|
**graph** | **Graph** | *contains data provided in the graph of the element* |[optional]|