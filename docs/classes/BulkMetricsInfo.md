[Documentation](../README.md) / [Exports](../modules.md) / BulkMetricsInfo

# Class: BulkMetricsInfo

## Implements

- [`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BulkMetricsInfo.md#constructor)

### Properties

- [count](BulkMetricsInfo.md#count)
- [etv](BulkMetricsInfo.md#etv)

### Methods

- [init](BulkMetricsInfo.md#init)
- [toJSON](BulkMetricsInfo.md#tojson)
- [fromJS](BulkMetricsInfo.md#fromjs)

## Constructors

### constructor

• **new BulkMetricsInfo**(`data?`): [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBulkMetricsInfo`](../interfaces/IBulkMetricsInfo.md) |

#### Returns

[`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Defined in

main.ts:100016

## Properties

### count

• `Optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Implementation of

[IBulkMetricsInfo](../interfaces/IBulkMetricsInfo.md).[count](../interfaces/IBulkMetricsInfo.md#count)

#### Defined in

main.ts:100012

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[IBulkMetricsInfo](../interfaces/IBulkMetricsInfo.md).[etv](../interfaces/IBulkMetricsInfo.md#etv)

#### Defined in

main.ts:100010

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

main.ts:100025

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

main.ts:100043

___

### fromJS

▸ **fromJS**(`data`): [`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BulkMetricsInfo`](BulkMetricsInfo.md)

#### Defined in

main.ts:100036
