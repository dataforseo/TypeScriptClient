[Documentation](../README.md) / [Exports](../modules.md) / AppendixRatesData

# Class: AppendixRatesData

## Implements

- [`IAppendixRatesData`](../interfaces/IAppendixRatesData.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixRatesData.md#constructor)

### Properties

- [limits](AppendixRatesData.md#limits)
- [statistics](AppendixRatesData.md#statistics)

### Methods

- [init](AppendixRatesData.md#init)
- [toJSON](AppendixRatesData.md#tojson)
- [fromJS](AppendixRatesData.md#fromjs)

## Constructors

### constructor

• **new AppendixRatesData**(`data?`): [`AppendixRatesData`](AppendixRatesData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixRatesData`](../interfaces/IAppendixRatesData.md) |

#### Returns

[`AppendixRatesData`](AppendixRatesData.md)

#### Defined in

main.ts:209460

## Properties

### limits

• `Optional` **limits**: [`AppendixLimitsRatesData`](AppendixLimitsRatesData.md)

rate limits for API calls per a certain period of time

#### Implementation of

[IAppendixRatesData](../interfaces/IAppendixRatesData.md).[limits](../interfaces/IAppendixRatesData.md#limits)

#### Defined in

main.ts:209454

___

### statistics

• `Optional` **statistics**: [`AppendixStatisticsDataInfo`](AppendixStatisticsDataInfo.md)

statisctics for API calls

#### Implementation of

[IAppendixRatesData](../interfaces/IAppendixRatesData.md).[statistics](../interfaces/IAppendixRatesData.md#statistics)

#### Defined in

main.ts:209456

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

main.ts:209469

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

main.ts:209487

___

### fromJS

▸ **fromJS**(`data`): [`AppendixRatesData`](AppendixRatesData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixRatesData`](AppendixRatesData.md)

#### Defined in

main.ts:209480
