# KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword. keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) |[optional]|
**spell** | **string** | correct spelling of the keyword. Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;. we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link |[optional]|
**location_code** | **number** | location code in a POST array. if there is no data, then the value is null |[optional]|
**language_code** | **string** | language code in a POST array. if there is no data, then the value is null |[optional]|
**search_partners** | **boolean** | indicates whether data from partner networks included in the response |[optional]|
**competition** | **string** | competition. represents the relative amount of competition associated with the given keyword in paid SERP only;. this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;. if there is no data the value is null;. learn more about the metric in this help center article |[optional]|
**competition_index** | **number** | competition. represents the relative amount of competition associated with the given keyword in paid SERP only;. this value is based on Google Ads data and can be between 0 and 100 (inclusive);. if there is no data the value is null;. learn more about the metric in this help center article |[optional]|
**search_volume** | **number** | monthly average search volume rate |[optional]|
**low_top_of_page_bid** | **number** | minimum bid for the ad to be displayed at the top of the first page. indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);. the value may differ depending on the location specified in a POST request |[optional]|
**high_top_of_page_bid** | **number** | maximum bid for the ad to be displayed at the top of the first page. indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);. the value may differ depending on the location specified in a POST request |[optional]|
**cpc** | **number** | cost per click. indicates the amount paid (USD) for each click on the ad displayed for a given keyword |[optional]|
**monthly_searches** | **MonthlySearchesInfo[]** | monthly searches. represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;. if there is no data then the value is null |[optional]|