# KeywordInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**se_type** | **string** | search engine type |[optional]|
**last_updated_time** | **string** | date and time when keyword data was updated. in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”. example:. 2019-11-15 12:57:46 +00:00 |[optional]|
**competition** | **number** | competition. represents the relative amount of competition associated with the given keyword. This value is based on Google Ads data and can be between 0 and 1 (inclusive) |[optional]|
**competition_level** | **string** | competition level. represents the relative level of competition associated with the given keyword in paid SERP only;. possible values: LOW, MEDIUM, HIGH. if competition level is unknown, the value is null;. learn more about the metric in this help center article |[optional]|
**cpc** | **number** | cost-per-click. represents the average cost per click (USD) historically paid for the keyword |[optional]|
**search_volume** | **number** | average monthly search volume rate. represents the (approximate) number of searches for the given keyword idea on google.com |[optional]|
**low_top_of_page_bid** | **number** | minimum bid for the ad to be displayed at the top of the first page. indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers). the value may differ depending on the location specified in a POST request |[optional]|
**high_top_of_page_bid** | **number** | maximum bid for the ad to be displayed at the top of the first page. indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers). the value may differ depending on the location specified in a POST request |[optional]|
**categories** | **number[]** | product and service categories. you can download the full list of possible categories |[optional]|
**monthly_searches** | **MonthlySearchesInfo[]** | monthly searches. represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations |[optional]|
**search_volume_trend** | **SearchVolumeTrend** | search volume trend changes. represents search volume change in percent compared to the previous period |[optional]|