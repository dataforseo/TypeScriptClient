[dataforseo-client](../README.md) / [Exports](../modules.md) / PopularTimes

# Class: PopularTimes

## Implements

- [`IPopularTimes`](../interfaces/IPopularTimes.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](PopularTimes.md#constructor)

### Properties

- [popular\_times\_by\_days](PopularTimes.md#popular_times_by_days)

### Methods

- [init](PopularTimes.md#init)
- [toJSON](PopularTimes.md#tojson)
- [fromJS](PopularTimes.md#fromjs)

## Constructors

### constructor

• **new PopularTimes**(`data?`): [`PopularTimes`](PopularTimes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IPopularTimes`](../interfaces/IPopularTimes.md) |

#### Returns

[`PopularTimes`](PopularTimes.md)

#### Defined in

[main.ts:188875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188875)

## Properties

### popular\_times\_by\_days

• `Optional` **popular\_times\_by\_days**: `Object`

popular hours
information about busy hours of the local establishment on each day of the week

#### Index signature

▪ [key: `string`]: ([`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md) \| `undefined`)[]

#### Implementation of

[IPopularTimes](../interfaces/IPopularTimes.md).[popular_times_by_days](../interfaces/IPopularTimes.md#popular_times_by_days)

#### Defined in

[main.ts:188871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188871)

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

[main.ts:188884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188884)

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

[main.ts:188907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188907)

___

### fromJS

▸ **fromJS**(`data`): [`PopularTimes`](PopularTimes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`PopularTimes`](PopularTimes.md)

#### Defined in

[main.ts:188900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188900)
