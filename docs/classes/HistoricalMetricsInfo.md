[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / HistoricalMetricsInfo

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

[main.ts:98191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98191)

## Properties

### count

• `Optional` **count**: `number`

total count of organic SERPs that contain the domain

#### Implementation of

[IHistoricalMetricsInfo](../interfaces/IHistoricalMetricsInfo.md).[count](../interfaces/IHistoricalMetricsInfo.md#count)

#### Defined in

[main.ts:98187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98187)

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

[main.ts:98185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98185)

___


### month

• `Optional` **month**: `number`

month for which the data is provided

#### Implementation of

[IHistoricalMetricsInfo](../interfaces/IHistoricalMetricsInfo.md).[month](../interfaces/IHistoricalMetricsInfo.md#month)

#### Defined in

[main.ts:98180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98180)

___


### year

• `Optional` **year**: `number`

year for which the data is provided

#### Implementation of

[IHistoricalMetricsInfo](../interfaces/IHistoricalMetricsInfo.md).[year](../interfaces/IHistoricalMetricsInfo.md#year)

#### Defined in

[main.ts:98178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98178)

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

[main.ts:98200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98200)

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

[main.ts:98220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98220)

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

[main.ts:98213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98213)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")