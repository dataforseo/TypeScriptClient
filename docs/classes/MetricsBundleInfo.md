[Documentation](../README.md) / [Exports](../modules.md) / MetricsBundleInfo

# Class: MetricsBundleInfo

## Implements

- [`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MetricsBundleInfo.md#constructor)

### Properties

- [organic](MetricsBundleInfo.md#organic)
- [paid](MetricsBundleInfo.md#paid)

### Methods

- [init](MetricsBundleInfo.md#init)
- [toJSON](MetricsBundleInfo.md#tojson)
- [fromJS](MetricsBundleInfo.md#fromjs)

## Constructors

### constructor

• **new MetricsBundleInfo**(`data?`): [`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMetricsBundleInfo`](../interfaces/IMetricsBundleInfo.md) |

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Defined in

main.ts:76080

## Properties

### organic

• `Optional` **organic**: [`MetricsInfo`](MetricsInfo.md)

ranking and traffic data from organic search

#### Implementation of

[IMetricsBundleInfo](../interfaces/IMetricsBundleInfo.md).[organic](../interfaces/IMetricsBundleInfo.md#organic)

#### Defined in

main.ts:76074

___

### paid

• `Optional` **paid**: [`MetricsInfo`](MetricsInfo.md)

ranking and traffic data from paid search

#### Implementation of

[IMetricsBundleInfo](../interfaces/IMetricsBundleInfo.md).[paid](../interfaces/IMetricsBundleInfo.md#paid)

#### Defined in

main.ts:76076

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

main.ts:76089

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

main.ts:76107

___

### fromJS

▸ **fromJS**(`data`): [`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MetricsBundleInfo`](MetricsBundleInfo.md)

#### Defined in

main.ts:76100
