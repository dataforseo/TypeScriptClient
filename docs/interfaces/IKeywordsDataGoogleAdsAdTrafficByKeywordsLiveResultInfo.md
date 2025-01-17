[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

# Interface: IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

Defined in: main.ts:132382

## Indexable

\[`key`: `string`\]: `any`

## Properties

### average\_cpc?

> `optional` **average\_cpc**: `number`

Defined in: main.ts:132419

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

***

### bid?

> `optional` **bid**: `number`

Defined in: main.ts:132403

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

***

### clicks?

> `optional` **clicks**: `number`

Defined in: main.ts:132427

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

***

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:132423

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

***

### ctr?

> `optional` **ctr**: `number`

Defined in: main.ts:132415

projected click through rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

***

### date\_interval?

> `optional` **date\_interval**: `string`

Defined in: main.ts:132392

forecasting date interval in a POST array

***

### impressions?

> `optional` **impressions**: `number`

Defined in: main.ts:132411

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:132384

keyword in a POST array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:132390

language code in a POST array
if there is no data, then the value is null

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:132387

location code in a POST array
if there is no data, then the value is null

***

### match?

> `optional` **match**: `string`

Defined in: main.ts:132406

keywords match-type
can take the following values: exact, broad, phrase

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:132397

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only
