[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingSearchVolumeTasksReadyResponseInfo

# Class: KeywordsDataBingSearchVolumeTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`**

## Implements

- [`IKeywordsDataBingSearchVolumeTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#cost)
- [status\_code](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#status_message)
- [tasks](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#tasks_error)
- [time](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#time)
- [version](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#init)
- [toJSON](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingSearchVolumeTasksReadyResponseInfo**(`data?`): [`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingSearchVolumeTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md) |

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:122810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122810)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md).[cost](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#cost)

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

[IKeywordsDataBingSearchVolumeTasksReadyResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#status_code)

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

[IKeywordsDataBingSearchVolumeTasksReadyResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataBingSearchVolumeTasksReadyTaskInfo`](KeywordsDataBingSearchVolumeTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:122806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122806)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md).[time](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingSearchVolumeTasksReadyResponseInfo](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md).[version](../interfaces/IKeywordsDataBingSearchVolumeTasksReadyResponseInfo.md#version)

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

[main.ts:122814](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122814)

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

[main.ts:122836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122836)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:122829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L122829)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")