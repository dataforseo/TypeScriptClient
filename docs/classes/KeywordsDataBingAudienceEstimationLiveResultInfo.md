[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationLiveResultInfo

# Class: KeywordsDataBingAudienceEstimationLiveResultInfo

## Implements

- [`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationLiveResultInfo()

> **new KeywordsDataBingAudienceEstimationLiveResultInfo**(`data`?): [`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

#### Defined in

main.ts:141179

## Properties

### currency?

> `optional` **currency**: `string`

currency name
example: USDollar

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`currency`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#currency)

#### Defined in

main.ts:141175

***

### est\_audience\_size?

> `optional` **est\_audience\_size**: [`EstInfo`](EstInfo.md)

monthly estimated reach user count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_audience_size)

#### Defined in

main.ts:141152

***

### est\_clicks?

> `optional` **est\_clicks**: [`EstInfo`](EstInfo.md)

monthly estimated click count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_clicks`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_clicks)

#### Defined in

main.ts:141154

***

### est\_cost\_per\_event?

> `optional` **est\_cost\_per\_event**: [`EstCInfo`](EstCInfo.md)

indicates the estimated cost per event with range result

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_cost_per_event`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_cost_per_event)

#### Defined in

main.ts:141158

***

### est\_ctr?

> `optional` **est\_ctr**: [`EstCInfo`](EstCInfo.md)

estimated click-through rate range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_ctr`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_ctr)

#### Defined in

main.ts:141160

***

### est\_impressions?

> `optional` **est\_impressions**: [`EstInfo`](EstInfo.md)

monthly estimated impressions range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_impressions)

#### Defined in

main.ts:141150

***

### est\_reach\_audience\_size?

> `optional` **est\_reach\_audience\_size**: `number`

monthly estimated user count

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_reach_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_reach_audience_size)

#### Defined in

main.ts:141170

***

### est\_reach\_impressions?

> `optional` **est\_reach\_impressions**: `number`

monthly estimated impressions

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_reach_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_reach_impressions)

#### Defined in

main.ts:141172

***

### est\_spend?

> `optional` **est\_spend**: [`EstInfo`](EstInfo.md)

monthly estimated spending range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_spend`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_spend)

#### Defined in

main.ts:141156

***

### events\_lost\_to\_bid?

> `optional` **events\_lost\_to\_bid**: `number`

indicates event lost count due to insufficient input bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`events_lost_to_bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#events_lost_to_bid)

#### Defined in

main.ts:141166

***

### events\_lost\_to\_budget?

> `optional` **events\_lost\_to\_budget**: `number`

indicates the event lost count due to insufficient input budget

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`events_lost_to_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#events_lost_to_budget)

#### Defined in

main.ts:141168

***

### suggested\_bid?

> `optional` **suggested\_bid**: `number`

suggested bid value under the current targeting

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`suggested_bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#suggested_bid)

#### Defined in

main.ts:141162

***

### suggested\_budget?

> `optional` **suggested\_budget**: `number`

suggested daily budget value under the current targeting and bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`suggested_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#suggested_budget)

#### Defined in

main.ts:141164

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:141188

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:141217

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

#### Defined in

main.ts:141210
