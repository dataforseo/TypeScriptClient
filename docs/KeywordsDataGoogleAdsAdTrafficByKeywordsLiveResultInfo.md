# KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
**keyword** | **string** | keyword in a POST array |[optional]|
**location_code** | **number** | location code in a POST array<br>if there is no data, then the value is null |[optional]|
**language_code** | **string** | language code in a POST array<br>if there is no data, then the value is null |[optional]|
**date_interval** | **string** | forecasting date interval in a POST array |[optional]|
**search_partners** | **boolean** | include Google search partners<br>the value you specified when setting the task<br>Note: parameter deprecated, the value is always false |[optional]|
**bid** | **number** | the maximum custom bid<br>the bid you have specified when setting the task<br>represents the price you are willing to pay for an ad<br>the higher value you have specified, the higher metrics and cost you receive in response<br>learn more in this help center article |[optional]|
**match** | **string** | keywords match-type<br>can take the following values: exact, broad, phrase |[optional]|
**impressions** | **number** | projected number of ad impressions<br>number of impressions an ad is projected to get within the specified time period<br>Note: parameter deprecated, the value is always null |[optional]|
**ctr** | **number** | projected click through rate (CTR) of the advertisement<br>number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period<br>Note: parameter deprecated, the value is always null |[optional]|
**average_cpc** | **number** | the average cost-per-click value<br>represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;<br>if there is no data, then the value is null |[optional]|
**cost** | **number** | charge for an ad<br>amount that will be charged for running an ad within the specified time period<br>if there is no data, then the value is null |[optional]|
**clicks** | **number** | number of clicks on an ad<br>number of clicks an ad is projected to get within the specified time period<br>if there is no data, then the value is null |[optional]|