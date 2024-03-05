[dataforseo-client](../README.md) / [Exports](../modules.md) / AppendixRatesData

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

[main.ts:209340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209340)

## Properties

### limits

• `Optional` **limits**: [`AppendixLimitsRatesData`](AppendixLimitsRatesData.md)

rate limits for API calls per a certain period of time

#### Implementation of

[IAppendixRatesData](../interfaces/IAppendixRatesData.md).[limits](../interfaces/IAppendixRatesData.md#limits)

#### Defined in

[main.ts:209334](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209334)

___

### statistics

• `Optional` **statistics**: [`AppendixStatisticsDataInfo`](AppendixStatisticsDataInfo.md)

statisctics for API calls

#### Implementation of

[IAppendixRatesData](../interfaces/IAppendixRatesData.md).[statistics](../interfaces/IAppendixRatesData.md#statistics)

#### Defined in

[main.ts:209336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209336)

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

[main.ts:209349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209349)

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

[main.ts:209367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209367)

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

[main.ts:209360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L209360)
