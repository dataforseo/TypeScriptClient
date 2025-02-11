[**Documentation**](../README.md)

***

[Documentation](../README.md) / HistoricalMetricsBundleInfo

# Class: HistoricalMetricsBundleInfo

Defined in: main.ts:111534

## Implements

- [`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HistoricalMetricsBundleInfo()

> **new HistoricalMetricsBundleInfo**(`data`?): [`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

Defined in: main.ts:111546

#### Parameters

##### data?

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md)

#### Returns

[`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

## Properties

### featured\_snippet?

> `optional` **featured\_snippet**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

Defined in: main.ts:111542

traffic data from the local pack results in SERP

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`featured_snippet`](../interfaces/IHistoricalMetricsBundleInfo.md#featured_snippet)

***

### local\_pack?

> `optional` **local\_pack**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

Defined in: main.ts:111540

traffic data from the featured snippet results in Google SERP

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`local_pack`](../interfaces/IHistoricalMetricsBundleInfo.md#local_pack)

***

### organic?

> `optional` **organic**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

Defined in: main.ts:111536

traffic data from organic search

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`organic`](../interfaces/IHistoricalMetricsBundleInfo.md#organic)

***

### paid?

> `optional` **paid**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

Defined in: main.ts:111538

traffic data from paid search

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`paid`](../interfaces/IHistoricalMetricsBundleInfo.md#paid)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:111555

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:111591

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

Defined in: main.ts:111584

#### Parameters

##### data

`any`

#### Returns

[`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)
