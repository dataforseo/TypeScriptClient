[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppSearchesTasksReadyResponseInfo

# Class: AppDataGoogleAppSearchesTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`AppDataGoogleAppSearchesTasksReadyResponseInfo`**

## Implements

- [`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#time)
- [version](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#init)
- [toJSON](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppSearchesTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppSearchesTasksReadyResponseInfo**(`data?`): [`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md) |

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:177745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177745)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#cost)

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

[IAppDataGoogleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#status_code)

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

[IAppDataGoogleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`AppDataGoogleAppSearchesTasksReadyTaskInfo`](AppDataGoogleAppSearchesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:177741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177741)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[time](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md).[version](../interfaces/IAppDataGoogleAppSearchesTasksReadyResponseInfo.md#version)

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

[main.ts:177749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177749)

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

[main.ts:177771](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177771)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:177764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177764)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")