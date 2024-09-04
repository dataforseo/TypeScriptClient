[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / HistoricalMetricsBundleInfo

# Class: HistoricalMetricsBundleInfo

## Implements

- [`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HistoricalMetricsBundleInfo()

> **new HistoricalMetricsBundleInfo**(`data`?): [`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Parameters

• **data?**: [`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md)

#### Returns

[`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Defined in

main.ts:101639

## Properties

### featured\_snippet?

> `optional` **featured\_snippet**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from the local pack results in SERP

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`featured_snippet`](../interfaces/IHistoricalMetricsBundleInfo.md#featured_snippet)

#### Defined in

main.ts:101635

***

### local\_pack?

> `optional` **local\_pack**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from the featured snippet results in Google SERP

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`local_pack`](../interfaces/IHistoricalMetricsBundleInfo.md#local_pack)

#### Defined in

main.ts:101633

***

### organic?

> `optional` **organic**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from organic search

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`organic`](../interfaces/IHistoricalMetricsBundleInfo.md#organic)

#### Defined in

main.ts:101629

***

### paid?

> `optional` **paid**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from paid search

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`paid`](../interfaces/IHistoricalMetricsBundleInfo.md#paid)

#### Defined in

main.ts:101631

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:101648

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:101684

***

### fromJS()

> `static` **fromJS**(`data`): [`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Defined in

main.ts:101677
