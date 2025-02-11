[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationTaskGetResultInfo

# Class: KeywordsDataBingAudienceEstimationTaskGetResultInfo

Defined in: main.ts:140968

## Implements

- [`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationTaskGetResultInfo()

> **new KeywordsDataBingAudienceEstimationTaskGetResultInfo**(`data`?): [`KeywordsDataBingAudienceEstimationTaskGetResultInfo`](KeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

Defined in: main.ts:140999

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationTaskGetResultInfo`](KeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:140995

currency name
example: USDollar

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`currency`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#currency)

***

### est\_audience\_size?

> `optional` **est\_audience\_size**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:140972

monthly estimated reach user count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_audience_size)

***

### est\_clicks?

> `optional` **est\_clicks**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:140974

monthly estimated click count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_clicks`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_clicks)

***

### est\_cost\_per\_event?

> `optional` **est\_cost\_per\_event**: [`EstCInfo`](EstCInfo.md)

Defined in: main.ts:140978

indicates the estimated cost per event with range result

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_cost_per_event`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_cost_per_event)

***

### est\_ctr?

> `optional` **est\_ctr**: [`EstCInfo`](EstCInfo.md)

Defined in: main.ts:140980

estimated click-through rate range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_ctr`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_ctr)

***

### est\_impressions?

> `optional` **est\_impressions**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:140970

monthly estimated impressions range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_impressions)

***

### est\_reach\_audience\_size?

> `optional` **est\_reach\_audience\_size**: `number`

Defined in: main.ts:140990

monthly estimated user count

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_reach_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_reach_audience_size)

***

### est\_reach\_impressions?

> `optional` **est\_reach\_impressions**: `number`

Defined in: main.ts:140992

monthly estimated impressions

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_reach_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_reach_impressions)

***

### est\_spend?

> `optional` **est\_spend**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:140976

monthly estimated spending range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`est_spend`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#est_spend)

***

### events\_lost\_to\_bid?

> `optional` **events\_lost\_to\_bid**: `number`

Defined in: main.ts:140986

indicates event lost count due to insufficient input bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`events_lost_to_bid`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#events_lost_to_bid)

***

### events\_lost\_to\_budget?

> `optional` **events\_lost\_to\_budget**: `number`

Defined in: main.ts:140988

indicates the event lost count due to insufficient input budget

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`events_lost_to_budget`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#events_lost_to_budget)

***

### suggested\_bid?

> `optional` **suggested\_bid**: `number`

Defined in: main.ts:140982

suggested bid value under the current targeting

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`suggested_bid`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#suggested_bid)

***

### suggested\_budget?

> `optional` **suggested\_budget**: `number`

Defined in: main.ts:140984

suggested daily budget value under the current targeting and bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTaskGetResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md).[`suggested_budget`](../interfaces/IKeywordsDataBingAudienceEstimationTaskGetResultInfo.md#suggested_budget)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:141008

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:141037

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationTaskGetResultInfo`](KeywordsDataBingAudienceEstimationTaskGetResultInfo.md)

Defined in: main.ts:141030

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationTaskGetResultInfo`](KeywordsDataBingAudienceEstimationTaskGetResultInfo.md)
