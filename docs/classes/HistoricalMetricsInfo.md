[Documentation](../README.md) / [Exports](../modules.md) / HistoricalMetricsInfo

# Class: HistoricalMetricsInfo

## Implements

- [`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HistoricalMetricsInfo.md#constructor)

### Properties

- [count](HistoricalMetricsInfo.md#count)
- [etv](HistoricalMetricsInfo.md#etv)
- [month](HistoricalMetricsInfo.md#month)
- [year](HistoricalMetricsInfo.md#year)

### Methods

- [init](HistoricalMetricsInfo.md#init)
- [toJSON](HistoricalMetricsInfo.md#tojson)
- [fromJS](HistoricalMetricsInfo.md#fromjs)

## Constructors

### constructor

• **new HistoricalMetricsInfo**(`data?`): [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHistoricalMetricsInfo`](../interfaces/IHistoricalMetricsInfo.md) |

#### Returns

[`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Defined in

main.ts:100568

## Properties

### count

• `Optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Implementation of

[IHistoricalMetricsInfo](../interfaces/IHistoricalMetricsInfo.md).[count](../interfaces/IHistoricalMetricsInfo.md#count)

#### Defined in

main.ts:100564

___

### etv

• `Optional` **etv**: `number`

estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article

#### Implementation of

[IHistoricalMetricsInfo](../interfaces/IHistoricalMetricsInfo.md).[etv](../interfaces/IHistoricalMetricsInfo.md#etv)

#### Defined in

main.ts:100562

___

### month

• `Optional` **month**: `number`

month for which the data is provided

#### Implementation of

[IHistoricalMetricsInfo](../interfaces/IHistoricalMetricsInfo.md).[month](../interfaces/IHistoricalMetricsInfo.md#month)

#### Defined in

main.ts:100557

___

### year

• `Optional` **year**: `number`

year for which the data is provided

#### Implementation of

[IHistoricalMetricsInfo](../interfaces/IHistoricalMetricsInfo.md).[year](../interfaces/IHistoricalMetricsInfo.md#year)

#### Defined in

main.ts:100555

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

main.ts:100577

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

main.ts:100597

___

### fromJS

▸ **fromJS**(`data`): [`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HistoricalMetricsInfo`](HistoricalMetricsInfo.md)

#### Defined in

main.ts:100590
