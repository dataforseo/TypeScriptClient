# KeywordsDataBingSearchVolumeTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | *keyword in a POST array* |[optional]|
**location_code** | **number** | *location code in a POST array* |[optional]|
**language_code** | **string** | *language code in a POST array* |[optional]|
**search_partners** | **boolean** | *indicates whether data from partner networks included in the response* |[optional]|
**device** | **string** | *device type in a POST array*. if there is no data, then the value is_`null`n |[optional]|
**competition** | **number** | *competition*. represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.. Possible values: `0.1`, `0.5`,`0.9` . `0.1` - low competition,. `0.5` - medium competition, . `0.9` - high competition;. if there is no data the value is `null` |[optional]|
**cpc** | **number** | *cost-per-click*. represents the average cost per click (USD) historically paid for the keyword.. if there is no data then the value is_`null`n |[optional]|
**search_volume** | **number** | *monthly average search volume rate*. search volume is rounded to the nearest tens |[optional]|
**categories** | **string[]** | *product and service categories*. our API doesn't return categories for this endpoint: the parameter will always equal `null` |[optional]|
**monthly_searches** | **MonthlySearchesInfo[]** | *monthly searches*. represents the (approximate) number of searches on this keyword idea (as available for the past twelve months), targeted to the specified geographic locations. if there is no data then the value is_`null`n |[optional]|