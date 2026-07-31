# ClickstreamKeywordInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**search_volume** | **number** | average monthly search volume raterepresents the (approximate) number of searches for the given keyword idea on google.com |[optional]|
**last_updated_time** | **string** | date and time when keyword data was updatedin the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”example:2019-11-15 12:57:46 +00:00 |[optional]|
**gender_distribution** | **{ [key: string]: number; }** | distribution of estimated clickstream-based metrics by genderlearn more about how the metric is calculated in this help center article |[optional]|
**age_distribution** | **{ [key: string]: number; }** | distribution of clickstream-based metrics by agelearn more about how the metric is calculated in this help center article |[optional]|
**monthly_searches** | **MonthlySearchesInfo[]** | monthly searchesrepresents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations |[optional]|