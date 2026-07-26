# KeywordInfoNormalizedWithInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**last_updated_time** | **string** | date and time when the dataset was updated. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**search_volume** | **number** | current search volume rate of a keyword |[optional]|
**is_normalized** | **boolean** | keyword info is normalized. if true, values are normalized with Bing data |[optional]|
**monthly_searches** | **MonthlySearchesInfo[]** | monthly search volume rates. array of objects with search volume rates in a certain month of a year |[optional]|