# KeywordsDataBingKeywordsForKeywordsTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword in a POST array |[optional]|
**location_code** | **number** | location code in a POST array |[optional]|
**language_code** | **string** | language code in a POST array |[optional]|
**search_partners** | **boolean** | indicates whether data from partner networks included in the response |[optional]|
**device** | **string** | device type. indicates for what device type the data is provided;. possible values: all, mobile, desktop, tablet |[optional]|
**competition** | **number** | competition. represents the relative amount of competition associated with the given keyword in paid SERP only. This value is based on Bing Ads data.. Possible values: 0.1, 0.5,0.9 . 0.1 – low competition,. 0.5 – medium competition,. 0.9 – high competition;. if there is no data the value is null |[optional]|
**cpc** | **number** | cost-per-click. represents the average cost per click (USD) historically paid for the keyword.. if there is no data, then the value is null |[optional]|
**search_volume** | **number** | monthly average search volume rate. represents the (approximate) number of searches for the keyword on the Bing search engine, depending on the user’s targeting. search volume is rounded to the closest decimal values. if there is no data, then the value is null |[optional]|
**categories** | **string[]** | product and service categories. legacy field, the value will always be null |[optional]|
**monthly_searches** | **MonthlySearchesInfo[]** | monthly searches. represents the (approximate) number of searches on this keyword (as available for the past twelve months), targeted to the specified geographic locations.. if there is no data, then the value is null |[optional]|