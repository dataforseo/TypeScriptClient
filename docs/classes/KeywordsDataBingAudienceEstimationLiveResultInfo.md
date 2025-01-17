[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationLiveResultInfo

# Class: KeywordsDataBingAudienceEstimationLiveResultInfo

Defined in: main.ts:141216

## Implements

- [`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingAudienceEstimationLiveResultInfo()

> **new KeywordsDataBingAudienceEstimationLiveResultInfo**(`data`?): [`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

Defined in: main.ts:141247

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md)

#### Returns

[`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

## Properties

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:141243

currency name
example: USDollar

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`currency`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#currency)

***

### est\_audience\_size?

> `optional` **est\_audience\_size**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:141220

monthly estimated reach user count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_audience_size)

***

### est\_clicks?

> `optional` **est\_clicks**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:141222

monthly estimated click count range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_clicks`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_clicks)

***

### est\_cost\_per\_event?

> `optional` **est\_cost\_per\_event**: [`EstCInfo`](EstCInfo.md)

Defined in: main.ts:141226

indicates the estimated cost per event with range result

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_cost_per_event`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_cost_per_event)

***

### est\_ctr?

> `optional` **est\_ctr**: [`EstCInfo`](EstCInfo.md)

Defined in: main.ts:141228

estimated click-through rate range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_ctr`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_ctr)

***

### est\_impressions?

> `optional` **est\_impressions**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:141218

monthly estimated impressions range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_impressions)

***

### est\_reach\_audience\_size?

> `optional` **est\_reach\_audience\_size**: `number`

Defined in: main.ts:141238

monthly estimated user count

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_reach_audience_size`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_reach_audience_size)

***

### est\_reach\_impressions?

> `optional` **est\_reach\_impressions**: `number`

Defined in: main.ts:141240

monthly estimated impressions

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_reach_impressions`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_reach_impressions)

***

### est\_spend?

> `optional` **est\_spend**: [`EstInfo`](EstInfo.md)

Defined in: main.ts:141224

monthly estimated spending range

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`est_spend`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#est_spend)

***

### events\_lost\_to\_bid?

> `optional` **events\_lost\_to\_bid**: `number`

Defined in: main.ts:141234

indicates event lost count due to insufficient input bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`events_lost_to_bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#events_lost_to_bid)

***

### events\_lost\_to\_budget?

> `optional` **events\_lost\_to\_budget**: `number`

Defined in: main.ts:141236

indicates the event lost count due to insufficient input budget

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`events_lost_to_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#events_lost_to_budget)

***

### suggested\_bid?

> `optional` **suggested\_bid**: `number`

Defined in: main.ts:141230

suggested bid value under the current targeting

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`suggested_bid`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#suggested_bid)

***

### suggested\_budget?

> `optional` **suggested\_budget**: `number`

Defined in: main.ts:141232

suggested daily budget value under the current targeting and bid

#### Implementation of

[`IKeywordsDataBingAudienceEstimationLiveResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md).[`suggested_budget`](../interfaces/IKeywordsDataBingAudienceEstimationLiveResultInfo.md#suggested_budget)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:141256

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:141285

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)

Defined in: main.ts:141278

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingAudienceEstimationLiveResultInfo`](KeywordsDataBingAudienceEstimationLiveResultInfo.md)
