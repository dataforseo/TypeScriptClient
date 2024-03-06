[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppendixMoneyData

# Class: AppendixMoneyData

## Implements

- [`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixMoneyData.md#constructor)

### Properties

- [balance](AppendixMoneyData.md#balance)
- [limits](AppendixMoneyData.md#limits)
- [statistics](AppendixMoneyData.md#statistics)
- [total](AppendixMoneyData.md#total)

### Methods

- [init](AppendixMoneyData.md#init)
- [toJSON](AppendixMoneyData.md#tojson)
- [fromJS](AppendixMoneyData.md#fromjs)

## Constructors

### constructor

• **new AppendixMoneyData**(`data?`): [`AppendixMoneyData`](AppendixMoneyData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixMoneyData`](../interfaces/IAppendixMoneyData.md) |

#### Returns

[`AppendixMoneyData`](AppendixMoneyData.md)

#### Defined in

[main.ts:209452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209452)

## Properties

### balance

• `Optional` **balance**: `number`

amount of money left in your account

#### Implementation of

[IAppendixMoneyData](../interfaces/IAppendixMoneyData.md).[balance](../interfaces/IAppendixMoneyData.md#balance)

#### Defined in

[main.ts:209444](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209444)

___


### limits

• `Optional` **limits**: [`AppendixLimitsMoneyData`](AppendixLimitsMoneyData.md)

cost limits

#### Implementation of

[IAppendixMoneyData](../interfaces/IAppendixMoneyData.md).[limits](../interfaces/IAppendixMoneyData.md#limits)

#### Defined in

[main.ts:209446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209446)

___


### statistics

• `Optional` **statistics**: [`AppendixStatisticsDataInfo`](AppendixStatisticsDataInfo.md)

statistics of your spending

#### Implementation of

[IAppendixMoneyData](../interfaces/IAppendixMoneyData.md).[statistics](../interfaces/IAppendixMoneyData.md#statistics)

#### Defined in

[main.ts:209448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209448)

___


### total

• `Optional` **total**: `number`

total amount of money deposited to your account

#### Implementation of

[IAppendixMoneyData](../interfaces/IAppendixMoneyData.md).[total](../interfaces/IAppendixMoneyData.md#total)

#### Defined in

[main.ts:209442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209442)

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

[main.ts:209461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209461)

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

[main.ts:209481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209481)

___


### fromJS

▸ **fromJS**(`data`): [`AppendixMoneyData`](AppendixMoneyData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixMoneyData`](AppendixMoneyData.md)

#### Defined in

[main.ts:209474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209474)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")