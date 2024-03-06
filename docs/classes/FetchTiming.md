[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / FetchTiming

# Class: FetchTiming

## Implements

- [`IFetchTiming`](../interfaces/IFetchTiming.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FetchTiming.md#constructor)

### Properties

- [duration\_time](FetchTiming.md#duration_time)
- [fetch\_end](FetchTiming.md#fetch_end)
- [fetch\_start](FetchTiming.md#fetch_start)

### Methods

- [init](FetchTiming.md#init)
- [toJSON](FetchTiming.md#tojson)
- [fromJS](FetchTiming.md#fromjs)

## Constructors

### constructor

• **new FetchTiming**(`data?`): [`FetchTiming`](FetchTiming.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFetchTiming`](../interfaces/IFetchTiming.md) |

#### Returns

[`FetchTiming`](FetchTiming.md)

#### Defined in

[main.ts:146023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146023)

## Properties

### duration\_time

• `Optional` **duration\_time**: `number`

indicates how many milliseconds it took to fetch a resource

#### Implementation of

[IFetchTiming](../interfaces/IFetchTiming.md).[duration_time](../interfaces/IFetchTiming.md#duration_time)

#### Defined in

[main.ts:146013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146013)

___


### fetch\_end

• `Optional` **fetch\_end**: `number`

time to complete downloading the resource
the amount of time a browser needs to complete downloading a resource

#### Implementation of

[IFetchTiming](../interfaces/IFetchTiming.md).[fetch_end](../interfaces/IFetchTiming.md#fetch_end)

#### Defined in

[main.ts:146019](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146019)

___


### fetch\_start

• `Optional` **fetch\_start**: `number`

time to start downloading the resource
the amount of time a browser needs to start downloading a resource

#### Implementation of

[IFetchTiming](../interfaces/IFetchTiming.md).[fetch_start](../interfaces/IFetchTiming.md#fetch_start)

#### Defined in

[main.ts:146016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146016)

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

[main.ts:146032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146032)

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

[main.ts:146051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146051)

___


### fromJS

▸ **fromJS**(`data`): [`FetchTiming`](FetchTiming.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FetchTiming`](FetchTiming.md)

#### Defined in

[main.ts:146044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L146044)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")