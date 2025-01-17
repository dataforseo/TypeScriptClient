[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

Defined in: main.ts:131724

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo()

> **new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo**(`data`?): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

Defined in: main.ts:131774

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

## Properties

### average\_cpc?

> `optional` **average\_cpc**: `number`

Defined in: main.ts:131762

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`average_cpc`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#average_cpc)

***

### bid?

> `optional` **bid**: `number`

Defined in: main.ts:131746

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`bid`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#bid)

***

### clicks?

> `optional` **clicks**: `number`

Defined in: main.ts:131770

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`clicks`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#clicks)

***

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:131766

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#cost)

***

### ctr?

> `optional` **ctr**: `number`

Defined in: main.ts:131758

projected clickthrough rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`ctr`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#ctr)

***

### date\_interval?

> `optional` **date\_interval**: `string`

Defined in: main.ts:131735

forecasting date interval in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`date_interval`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#date_interval)

***

### impressions?

> `optional` **impressions**: `number`

Defined in: main.ts:131754

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`impressions`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#impressions)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:131727

keyword in a POST array
metrics are provided for all the keywords specified in the POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:131733

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:131730

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#location_code)

***

### match?

> `optional` **match**: `string`

Defined in: main.ts:131749

keywords match-type
can take the following values: exact, broad, phrase

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`match`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#match)

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

Defined in: main.ts:131740

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#search_partners)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:131783

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:131811

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

Defined in: main.ts:131804

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)
