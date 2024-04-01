[Documentation](../README.md) / [Exports](../modules.md) / AmazonMetricsBundleInfo

# Class: AmazonMetricsBundleInfo

## Implements

- [`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonMetricsBundleInfo.md#constructor)

### Properties

- [amazon\_paid](AmazonMetricsBundleInfo.md#amazon_paid)
- [amazon\_serp](AmazonMetricsBundleInfo.md#amazon_serp)

### Methods

- [init](AmazonMetricsBundleInfo.md#init)
- [toJSON](AmazonMetricsBundleInfo.md#tojson)
- [fromJS](AmazonMetricsBundleInfo.md#fromjs)

## Constructors

### constructor

• **new AmazonMetricsBundleInfo**(`data?`): [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonMetricsBundleInfo`](../interfaces/IAmazonMetricsBundleInfo.md) |

#### Returns

[`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Defined in

main.ts:103033

## Properties

### amazon\_paid

• `Optional` **amazon\_paid**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from Amazon paid SERP

#### Implementation of

[IAmazonMetricsBundleInfo](../interfaces/IAmazonMetricsBundleInfo.md).[amazon_paid](../interfaces/IAmazonMetricsBundleInfo.md#amazon_paid)

#### Defined in

main.ts:103029

___

### amazon\_serp

• `Optional` **amazon\_serp**: [`AppMetricsInfo`](AppMetricsInfo.md)

ranking data from Amazon organic SERP

#### Implementation of

[IAmazonMetricsBundleInfo](../interfaces/IAmazonMetricsBundleInfo.md).[amazon_serp](../interfaces/IAmazonMetricsBundleInfo.md#amazon_serp)

#### Defined in

main.ts:103027

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

main.ts:103042

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

main.ts:103060

___

### fromJS

▸ **fromJS**(`data`): [`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonMetricsBundleInfo`](AmazonMetricsBundleInfo.md)

#### Defined in

main.ts:103053
