[Documentation](../README.md) / [Exports](../modules.md) / AppendixUserDataResultInfo

# Class: AppendixUserDataResultInfo

## Implements

- [`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixUserDataResultInfo.md#constructor)

### Properties

- [login](AppendixUserDataResultInfo.md#login)
- [money](AppendixUserDataResultInfo.md#money)
- [price](AppendixUserDataResultInfo.md#price)
- [rates](AppendixUserDataResultInfo.md#rates)
- [timezone](AppendixUserDataResultInfo.md#timezone)

### Methods

- [init](AppendixUserDataResultInfo.md#init)
- [toJSON](AppendixUserDataResultInfo.md#tojson)
- [fromJS](AppendixUserDataResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppendixUserDataResultInfo**(`data?`): [`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixUserDataResultInfo`](../interfaces/IAppendixUserDataResultInfo.md) |

#### Returns

[`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Defined in

main.ts:212297

## Properties

### login

• `Optional` **login**: `string`

your login

#### Implementation of

[IAppendixUserDataResultInfo](../interfaces/IAppendixUserDataResultInfo.md).[login](../interfaces/IAppendixUserDataResultInfo.md#login)

#### Defined in

main.ts:212284

___

### money

• `Optional` **money**: [`AppendixMoneyData`](AppendixMoneyData.md)

section of your spending, USD

#### Implementation of

[IAppendixUserDataResultInfo](../interfaces/IAppendixUserDataResultInfo.md).[money](../interfaces/IAppendixUserDataResultInfo.md#money)

#### Defined in

main.ts:212291

___

### price

• `Optional` **price**: [`AppendixPriceData`](AppendixPriceData.md)

pricing

#### Implementation of

[IAppendixUserDataResultInfo](../interfaces/IAppendixUserDataResultInfo.md).[price](../interfaces/IAppendixUserDataResultInfo.md#price)

#### Defined in

main.ts:212293

___

### rates

• `Optional` **rates**: [`AppendixRatesData`](AppendixRatesData.md)

your API rates

#### Implementation of

[IAppendixUserDataResultInfo](../interfaces/IAppendixUserDataResultInfo.md).[rates](../interfaces/IAppendixUserDataResultInfo.md#rates)

#### Defined in

main.ts:212289

___

### timezone

• `Optional` **timezone**: `string`

your time zone
can be set in your profile settings

#### Implementation of

[IAppendixUserDataResultInfo](../interfaces/IAppendixUserDataResultInfo.md).[timezone](../interfaces/IAppendixUserDataResultInfo.md#timezone)

#### Defined in

main.ts:212287

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

main.ts:212306

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

main.ts:212327

___

### fromJS

▸ **fromJS**(`data`): [`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixUserDataResultInfo`](AppendixUserDataResultInfo.md)

#### Defined in

main.ts:212320
