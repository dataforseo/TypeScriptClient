[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppSearchesTasksReadyResponseInfo

# Class: AppDataAppleAppSearchesTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataAppleAppSearchesTasksReadyResponseInfo`**

## Implements

- [`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppSearchesTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppSearchesTasksReadyResponseInfo.md#cost)
- [status\_code](AppDataAppleAppSearchesTasksReadyResponseInfo.md#status_code)
- [status\_message](AppDataAppleAppSearchesTasksReadyResponseInfo.md#status_message)
- [tasks](AppDataAppleAppSearchesTasksReadyResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleAppSearchesTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleAppSearchesTasksReadyResponseInfo.md#tasks_error)
- [time](AppDataAppleAppSearchesTasksReadyResponseInfo.md#time)
- [version](AppDataAppleAppSearchesTasksReadyResponseInfo.md#version)

### Methods

- [init](AppDataAppleAppSearchesTasksReadyResponseInfo.md#init)
- [toJSON](AppDataAppleAppSearchesTasksReadyResponseInfo.md#tojson)
- [fromJS](AppDataAppleAppSearchesTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppSearchesTasksReadyResponseInfo**(`data?`): [`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppSearchesTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md) |

#### Returns

[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:183581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183581)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[cost](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#cost)

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

[IAppDataAppleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[status_code](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#status_code)

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

[IAppDataAppleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[status_message](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`AppDataAppleAppSearchesTasksReadyTaskInfo`](AppDataAppleAppSearchesTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[tasks](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:183577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183577)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[time](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleAppSearchesTasksReadyResponseInfo](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md).[version](../interfaces/IAppDataAppleAppSearchesTasksReadyResponseInfo.md#version)

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

[main.ts:183585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183585)

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

[main.ts:183607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183607)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:183600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183600)
