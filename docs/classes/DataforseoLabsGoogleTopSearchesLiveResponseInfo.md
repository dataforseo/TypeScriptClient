[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleTopSearchesLiveResponseInfo

# Class: DataforseoLabsGoogleTopSearchesLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleTopSearchesLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleTopSearchesLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleTopSearchesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:85429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85429)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleTopSearchesLiveTaskInfo`](DataforseoLabsGoogleTopSearchesLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:85425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85425)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleTopSearchesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleTopSearchesLiveResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[init](BaseResponseInfo.md#init)

#### Defined in

[main.ts:85433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85433)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[toJSON](BaseResponseInfo.md#tojson)

#### Defined in

[main.ts:85455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85455)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleTopSearchesLiveResponseInfo`](DataforseoLabsGoogleTopSearchesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:85448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L85448)
