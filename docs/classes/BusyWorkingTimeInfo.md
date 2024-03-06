[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusyWorkingTimeInfo

# Class: BusyWorkingTimeInfo

## Implements

- [`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusyWorkingTimeInfo.md#constructor)

### Properties

- [popular\_index](BusyWorkingTimeInfo.md#popular_index)
- [time](BusyWorkingTimeInfo.md#time)

### Methods

- [init](BusyWorkingTimeInfo.md#init)
- [toJSON](BusyWorkingTimeInfo.md#tojson)
- [fromJS](BusyWorkingTimeInfo.md#fromjs)

## Constructors

### constructor

• **new BusyWorkingTimeInfo**(`data?`): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusyWorkingTimeInfo`](../interfaces/IBusyWorkingTimeInfo.md) |

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Defined in

[main.ts:188818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188818)

## Properties

### popular\_index

• `Optional` **popular\_index**: `number`

popularity index
relative time-bound popularity index measured from 0 to 100;
higher value corresponds to a busier time of a day

#### Implementation of

[IBusyWorkingTimeInfo](../interfaces/IBusyWorkingTimeInfo.md).[popular_index](../interfaces/IBusyWorkingTimeInfo.md#popular_index)

#### Defined in

[main.ts:188814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188814)

___


### time

• `Optional` **time**: [`WorkTimeInfo`](WorkTimeInfo.md)

busy hours

#### Implementation of

[IBusyWorkingTimeInfo](../interfaces/IBusyWorkingTimeInfo.md).[time](../interfaces/IBusyWorkingTimeInfo.md#time)

#### Defined in

[main.ts:188810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188810)

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

[main.ts:188827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188827)

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

[main.ts:188845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188845)

___


### fromJS

▸ **fromJS**(`data`): [`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusyWorkingTimeInfo`](BusyWorkingTimeInfo.md)

#### Defined in

[main.ts:188838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188838)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")