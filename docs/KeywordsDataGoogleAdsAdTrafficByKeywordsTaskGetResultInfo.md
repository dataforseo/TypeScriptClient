# KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword in a POST array. metrics are provided for all the keywords specified in the POST array |[optional]|
**location_code** | **number** | location code in a POST array. if there is no data, then the value is null |[optional]|
**language_code** | **string** | language code in a POST array. if there is no data, then the value is null |[optional]|
**date_interval** | **string** | forecasting date interval in a POST array |[optional]|
**search_partners** | **boolean** | include Google search partners. the value is always false |[optional]|
**bid** | **number** | the maximum custom bid. the bid you have specified when setting the task. represents the price you are willing to pay for an ad. the higher value you have specified, the higher metrics and cost you receive in response. learn more in this help center article |[optional]|
**match** | **string** | keywords match-type. can take the following values: exact, broad, phrase |[optional]|
**impressions** | **number** | projected number of ad impressions. number of impressions an ad is projected to get within the specified time period. Note: parameter deprecated, the value is always null |[optional]|
**ctr** | **number** | projected clickthrough rate (CTR) of the advertisement. number of clicks an ad is projected to receive divided by the number of ad impressions;. Note: parameter deprecated, the value is always null |[optional]|
**average_cpc** | **number** | the average cost-per-click value. represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;. if there is no data, then the value is null |[optional]|
**cost** | **number** | charge for an ad. amount that will be charged for running an ad within the specified time period. if there is no data, then the value is null |[optional]|
**clicks** | **number** | number of clicks on an ad. number of clicks an ad is projected to get within the specified time period. if there is no data, then the value is null |[optional]|