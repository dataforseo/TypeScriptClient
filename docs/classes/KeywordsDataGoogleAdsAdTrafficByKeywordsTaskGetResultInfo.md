[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo()

> **new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo**(`data`?): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Defined in

main.ts:131706

## Properties

### average\_cpc?

> `optional` **average\_cpc**: `number`

the average cost-per-click value
represents the cost-per-click (USD) estimated for a keyword based on the specified time period and historical data;
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`average_cpc`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#average_cpc)

#### Defined in

main.ts:131694

***

### bid?

> `optional` **bid**: `number`

the maximum custom bid
the bid you have specified when setting the task
represents the price you are willing to pay for an ad
the higher value you have specified, the higher metrics and cost you receive in response
learn more in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`bid`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#bid)

#### Defined in

main.ts:131678

***

### clicks?

> `optional` **clicks**: `number`

number of clicks on an ad
number of clicks an ad is projected to get within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`clicks`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#clicks)

#### Defined in

main.ts:131702

***

### cost?

> `optional` **cost**: `number`

charge for an ad
amount that will be charged for running an ad within the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#cost)

#### Defined in

main.ts:131698

***

### ctr?

> `optional` **ctr**: `number`

projected clickthrough rate (CTR) of the advertisement
number of clicks an ad is projected to receive divided by the number of ad impressions; the CTR is projected for the specified time period
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`ctr`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#ctr)

#### Defined in

main.ts:131690

***

### date\_interval?

> `optional` **date\_interval**: `string`

forecasting date interval in a POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`date_interval`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#date_interval)

#### Defined in

main.ts:131667

***

### impressions?

> `optional` **impressions**: `number`

projected number of ad impressions
number of impressions an ad is projected to get within the specified time period
if there is no data, then the value is null
learn more about impressions in this help center article

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`impressions`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#impressions)

#### Defined in

main.ts:131686

***

### keyword?

> `optional` **keyword**: `string`

keyword in a POST array
metrics are provided for all the keywords specified in the POST array

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`keyword`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#keyword)

#### Defined in

main.ts:131659

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`language_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#language_code)

#### Defined in

main.ts:131665

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`location_code`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#location_code)

#### Defined in

main.ts:131662

***

### match?

> `optional` **match**: `string`

keywords match-type
can take the following values: exact, broad, phrase

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`match`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#match)

#### Defined in

main.ts:131681

***

### search\_partners?

> `optional` **search\_partners**: `boolean`

include Google search partners
the value you specified when setting the task
if true, the results are returned for owned, operated, and syndicated networks across Google and partner sites that host Google search;
if false, the results are returned for Google search sites only

#### Implementation of

[`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md).[`search_partners`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md#search_partners)

#### Defined in

main.ts:131672

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:131715

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:131743

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)

#### Defined in

main.ts:131736
