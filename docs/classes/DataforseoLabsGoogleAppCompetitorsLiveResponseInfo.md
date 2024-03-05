[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleAppCompetitorsLiveResponseInfo

# Class: DataforseoLabsGoogleAppCompetitorsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleAppCompetitorsLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:109539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109539)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleAppCompetitorsLiveTaskInfo`](DataforseoLabsGoogleAppCompetitorsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:109535](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109535)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md#version)

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

[main.ts:109543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109543)

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

[main.ts:109565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109565)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleAppCompetitorsLiveResponseInfo`](DataforseoLabsGoogleAppCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:109558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109558)
