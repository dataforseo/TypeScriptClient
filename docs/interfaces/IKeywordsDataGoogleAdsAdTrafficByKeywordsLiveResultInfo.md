**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

# Interface: IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### average\_cpc?

> **`optional`** **average\_cpc**: `number`

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Source

main.ts:123770

***

### bid?

> **`optional`** **bid**: `number`

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Source

main.ts:123754

***

### clicks?

> **`optional`** **clicks**: `number`

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Source

main.ts:123778

***

### cost?

> **`optional`** **cost**: `number`

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Source

main.ts:123774

***

### ctr?

> **`optional`** **ctr**: `number`

projected click through rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Source

main.ts:123766

***

### date\_interval?

> **`optional`** **date\_interval**: `string`

forecasting date interval in a POST array

#### Source

main.ts:123743

***

### impressions?

> **`optional`** **impressions**: `number`

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Source

main.ts:123762

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Source

main.ts:123735

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Source

main.ts:123741

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Source

main.ts:123738

***

### match?

> **`optional`** **match**: `string`

keywords match-type
can take the following values: exact, broad, phrase

#### Source

main.ts:123757

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Source

main.ts:123748
