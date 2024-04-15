**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo(data)

> **new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo**(`data`?): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Source

main.ts:121317

## Properties

### average\_cpc?

> **`optional`** **average\_cpc**: `number`

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`average_cpc`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#average_cpc)

#### Source

main.ts:121305

***

### bid?

> **`optional`** **bid**: `number`

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`bid`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#bid)

#### Source

main.ts:121289

***

### clicks?

> **`optional`** **clicks**: `number`

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`clicks`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#clicks)

#### Source

main.ts:121313

***

### cost?

> **`optional`** **cost**: `number`

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#cost)

#### Source

main.ts:121309

***

### ctr?

> **`optional`** **ctr**: `number`

projected click through rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`ctr`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#ctr)

#### Source

main.ts:121301

***

### date\_interval?

> **`optional`** **date\_interval**: `string`

forecasting date interval in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`date_interval`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#date_interval)

#### Source

main.ts:121278

***

### impressions?

> **`optional`** **impressions**: `number`

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`impressions`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#impressions)

#### Source

main.ts:121297

***

### keyword?

> **`optional`** **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#keyword)

#### Source

main.ts:121270

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#language_code)

#### Source

main.ts:121276

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#location_code)

#### Source

main.ts:121273

***

### match?

> **`optional`** **match**: `string`

keywords match-type
can take the following values: exact, broad, phrase

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`match`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#match)

#### Source

main.ts:121292

***

### search\_partners?

> **`optional`** **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#search_partners)

#### Source

main.ts:121283

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:121326

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:121354

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Source

main.ts:121347
