[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

Defined in: main.ts:132390

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo()

> **new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo**(`data`?): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

Defined in: main.ts:132439

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

## Properties

### average\_cpc?

> `optional` **average\_cpc**: `number`

Defined in: main.ts:132427

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`average_cpc`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#average_cpc)

***

### bid?

> `optional` **bid**: `number`

Defined in: main.ts:132411

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`bid`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#bid)

***

### clicks?

> `optional` **clicks**: `number`

Defined in: main.ts:132435

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`clicks`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#clicks)

***

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:132431

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#cost)

***

### ctr?

> `optional` **ctr**: `number`

Defined in: main.ts:132423

projected click through rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`ctr`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#ctr)

***

### date\_interval?

> `optional` **date\_interval**: `string`

Defined in: main.ts:132400

forecasting date interval in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`date_interval`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#date_interval)

***

### impressions?

> `optional` **impressions**: `number`

Defined in: main.ts:132419

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`impressions`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#impressions)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:132392

keyword in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:132398

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:132395

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#location_code)

***

### match?

> `optional` **match**: `string`

Defined in: main.ts:132414

keywords match-type
can take the following values: exact, broad, phrase

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`match`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#match)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:132405

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#search_partners)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:132448

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:132476

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

Defined in: main.ts:132469

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)
