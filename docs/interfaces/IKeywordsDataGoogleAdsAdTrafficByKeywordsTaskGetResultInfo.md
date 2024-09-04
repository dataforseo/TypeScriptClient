[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

# Interface: IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### average\_cpc?

> `optional` **average\_cpc**: `number`

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Defined in

main.ts:121529

***

### bid?

> `optional` **bid**: `number`

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Defined in

main.ts:121513

***

### clicks?

> `optional` **clicks**: `number`

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Defined in

main.ts:121537

***

### cost?

> `optional` **cost**: `number`

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Defined in

main.ts:121533

***

### ctr?

> `optional` **ctr**: `number`

projected clickthrough rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Defined in

main.ts:121525

***

### date\_interval?

> `optional` **date\_interval**: `string`

forecasting date interval in a POST array

#### Defined in

main.ts:121502

***

### impressions?

> `optional` **impressions**: `number`

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Defined in

main.ts:121521

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array
metrics are provided for all the keywords specified in the POST array

#### Defined in

main.ts:121494

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:121500

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

main.ts:121497

***

### match?

> `optional` **match**: `string`

keywords match-type
can take the following values: exact, broad, phrase

#### Defined in

main.ts:121516

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Defined in

main.ts:121507
