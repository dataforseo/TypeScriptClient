[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppIntersectionLiveResponseInfo

# Class: DataforseoLabsGoogleAppIntersectionLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAppIntersectionLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAppIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:110115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110115)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleAppIntersectionLiveTaskInfo`](DataforseoLabsGoogleAppIntersectionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:110111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110111)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleAppIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleAppIntersectionLiveResponseInfo.md#version)

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

[main.ts:110119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110119)

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

[main.ts:110141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110141)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAppIntersectionLiveResponseInfo`](DataforseoLabsGoogleAppIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:110134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110134)
