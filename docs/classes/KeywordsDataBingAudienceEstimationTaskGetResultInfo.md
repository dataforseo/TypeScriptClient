[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationTaskGetResultInfo

# Class: KeywordsDataBingAudienceEstimationTaskGetResultInfo

## Implements

- [`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationTaskGetResultInfo()

> **new KeywordsDataBingAudienceEstimationTaskGetResultInfo**(`data`?): [`KeywordsDataBingAudienceEstimationTaskGetResultInfo`](KeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationTaskGetResultInfo`](KeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

#### Defined in

main.ts:140767

## Properties

### currency?

> `optional` **currency**: `string`

currency name
example: USDollar

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`currency`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#currency)

#### Defined in

main.ts:140763

***

### est\_audience\_size?

> `optional` **est\_audience\_size**: [`EstInfo`](EstInfo.md)

monthly estimated reach user count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_audience_size)

#### Defined in

main.ts:140740

***

### est\_clicks?

> `optional` **est\_clicks**: [`EstInfo`](EstInfo.md)

monthly estimated click count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_clicks`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_clicks)

#### Defined in

main.ts:140742

***

### est\_cost\_per\_event?

> `optional` **est\_cost\_per\_event**: [`EstCInfo`](EstCInfo.md)

indicates the estimated cost per event with range result

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_cost_per_event`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_cost_per_event)

#### Defined in

main.ts:140746

***

### est\_ctr?

> `optional` **est\_ctr**: [`EstCInfo`](EstCInfo.md)

estimated click-through rate range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_ctr`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_ctr)

#### Defined in

main.ts:140748

***

### est\_impressions?

> `optional` **est\_impressions**: [`EstInfo`](EstInfo.md)

monthly estimated impressions range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_impressions)

#### Defined in

main.ts:140738

***

### est\_reach\_audience\_size?

> `optional` **est\_reach\_audience\_size**: `number`

monthly estimated user count

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_reach_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_reach_audience_size)

#### Defined in

main.ts:140758

***

### est\_reach\_impressions?

> `optional` **est\_reach\_impressions**: `number`

monthly estimated impressions

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_reach_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_reach_impressions)

#### Defined in

main.ts:140760

***

### est\_spend?

> `optional` **est\_spend**: [`EstInfo`](EstInfo.md)

monthly estimated spending range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_spend`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_spend)

#### Defined in

main.ts:140744

***

### events\_lost\_to\_bid?

> `optional` **events\_lost\_to\_bid**: `number`

indicates event lost count due to insufficient input bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`events_lost_to_bid`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#events_lost_to_bid)

#### Defined in

main.ts:140754

***

### events\_lost\_to\_budget?

> `optional` **events\_lost\_to\_budget**: `number`

indicates the event lost count due to insufficient input budget

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`events_lost_to_budget`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#events_lost_to_budget)

#### Defined in

main.ts:140756

***

### suggested\_bid?

> `optional` **suggested\_bid**: `number`

suggested bid value under the current targeting

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`suggested_bid`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#suggested_bid)

#### Defined in

main.ts:140750

***

### suggested\_budget?

> `optional` **suggested\_budget**: `number`

suggested daily budget value under the current targeting and bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`suggested_budget`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#suggested_budget)

#### Defined in

main.ts:140752

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:140776

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:140805

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationTaskGetResultInfo`](KeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationTaskGetResultInfo`](KeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

#### Defined in

main.ts:140798
