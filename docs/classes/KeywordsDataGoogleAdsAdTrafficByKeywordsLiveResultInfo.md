[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo()

> **new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo**(`data`?): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Defined in

main.ts:122012

## Properties

### average\_cpc?

> `optional` **average\_cpc**: `number`

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`average_cpc`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#average_cpc)

#### Defined in

main.ts:122000

***

### bid?

> `optional` **bid**: `number`

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`bid`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#bid)

#### Defined in

main.ts:121984

***

### clicks?

> `optional` **clicks**: `number`

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`clicks`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#clicks)

#### Defined in

main.ts:122008

***

### cost?

> `optional` **cost**: `number`

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#cost)

#### Defined in

main.ts:122004

***

### ctr?

> `optional` **ctr**: `number`

projected click through rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`ctr`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#ctr)

#### Defined in

main.ts:121996

***

### date\_interval?

> `optional` **date\_interval**: `string`

forecasting date interval in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`date_interval`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#date_interval)

#### Defined in

main.ts:121973

***

### impressions?

> `optional` **impressions**: `number`

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`impressions`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#impressions)

#### Defined in

main.ts:121992

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#keyword)

#### Defined in

main.ts:121965

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:121971

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:121968

***

### match?

> `optional` **match**: `string`

keywords match-type
can take the following values: exact, broad, phrase

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`match`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#match)

#### Defined in

main.ts:121987

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md#search_partners)

#### Defined in

main.ts:121978

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:122021

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:122049

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResultInfo.md)

#### Defined in

main.ts:122042
