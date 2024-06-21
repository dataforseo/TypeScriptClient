**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HistoricalMetricsBundleInfo

# Class: HistoricalMetricsBundleInfo

## Implements

- [`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HistoricalMetricsBundleInfo(data)

> **new HistoricalMetricsBundleInfo**(`data`?): [`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Parameters

• **data?**: [`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md)

#### Returns

[`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Source

main.ts:102488

## Properties

### featured\_snippet?

> **`optional`** **featured\_snippet**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from the local pack results in SERP

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`featured_snippet`](../interfaces/IHistoricalMetricsBundleInfo.md#featured_snippet)

#### Source

main.ts:102484

***

### local\_pack?

> **`optional`** **local\_pack**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from the featured snippet results in Google SERP

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`local_pack`](../interfaces/IHistoricalMetricsBundleInfo.md#local_pack)

#### Source

main.ts:102482

***

### organic?

> **`optional`** **organic**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from organic search

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`organic`](../interfaces/IHistoricalMetricsBundleInfo.md#organic)

#### Source

main.ts:102478

***

### paid?

> **`optional`** **paid**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from paid search

#### Implementation of

[`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md).[`paid`](../interfaces/IHistoricalMetricsBundleInfo.md#paid)

#### Source

main.ts:102480

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:102497

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:102533

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Source

main.ts:102526
