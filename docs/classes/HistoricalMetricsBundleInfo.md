[Documentation](../README.md) / [Exports](../modules.md) / HistoricalMetricsBundleInfo

# Class: HistoricalMetricsBundleInfo

## Implements

- [`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HistoricalMetricsBundleInfo.md#constructor)

### Properties

- [featured\_snippet](HistoricalMetricsBundleInfo.md#featured_snippet)
- [local\_pack](HistoricalMetricsBundleInfo.md#local_pack)
- [organic](HistoricalMetricsBundleInfo.md#organic)
- [paid](HistoricalMetricsBundleInfo.md#paid)

### Methods

- [init](HistoricalMetricsBundleInfo.md#init)
- [toJSON](HistoricalMetricsBundleInfo.md#tojson)
- [fromJS](HistoricalMetricsBundleInfo.md#fromjs)

## Constructors

### constructor

• **new HistoricalMetricsBundleInfo**(`data?`): [`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHistoricalMetricsBundleInfo`](../interfaces/IHistoricalMetricsBundleInfo.md) |

#### Returns

[`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Defined in

main.ts:100639

## Properties

### featured\_snippet

• `Optional` **featured\_snippet**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from the local pack results in SERP

#### Implementation of

[IHistoricalMetricsBundleInfo](../interfaces/IHistoricalMetricsBundleInfo.md).[featured_snippet](../interfaces/IHistoricalMetricsBundleInfo.md#featured_snippet)

#### Defined in

main.ts:100635

___

### local\_pack

• `Optional` **local\_pack**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from the featured snippet results in Google SERP

#### Implementation of

[IHistoricalMetricsBundleInfo](../interfaces/IHistoricalMetricsBundleInfo.md).[local_pack](../interfaces/IHistoricalMetricsBundleInfo.md#local_pack)

#### Defined in

main.ts:100633

___

### organic

• `Optional` **organic**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from organic search

#### Implementation of

[IHistoricalMetricsBundleInfo](../interfaces/IHistoricalMetricsBundleInfo.md).[organic](../interfaces/IHistoricalMetricsBundleInfo.md#organic)

#### Defined in

main.ts:100629

___

### paid

• `Optional` **paid**: [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)[]

traffic data from paid search

#### Implementation of

[IHistoricalMetricsBundleInfo](../interfaces/IHistoricalMetricsBundleInfo.md).[paid](../interfaces/IHistoricalMetricsBundleInfo.md#paid)

#### Defined in

main.ts:100631

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:100648

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:100684

___

### fromJS

▸ **fromJS**(`data`): [`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HistoricalMetricsBundleInfo`](HistoricalMetricsBundleInfo.md)

#### Defined in

main.ts:100677
