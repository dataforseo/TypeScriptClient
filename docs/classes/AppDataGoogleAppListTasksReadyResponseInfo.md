[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTasksReadyResponseInfo

# Class: AppDataGoogleAppListTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleAppListTasksReadyResponseInfo`**

## Implements

- [`IAppDataGoogleAppListTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListTasksReadyResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppListTasksReadyResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppListTasksReadyResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppListTasksReadyResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppListTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppListTasksReadyResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppListTasksReadyResponseInfo.md#time)
- [version](AppDataGoogleAppListTasksReadyResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppListTasksReadyResponseInfo.md#init)
- [toJSON](AppDataGoogleAppListTasksReadyResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTasksReadyResponseInfo**(`data?`): [`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTasksReadyResponseInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md) |

#### Returns

[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:184206

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23029

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IAppDataGoogleAppListTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23022

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IAppDataGoogleAppListTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleAppListTasksReadyTaskInfo`](AppDataGoogleAppListTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppListTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:184202

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppListTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppListTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppListTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md).[time](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppListTasksReadyResponseInfo](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md).[version](../interfaces/IAppDataGoogleAppListTasksReadyResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:23019

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

main.ts:184210

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

main.ts:184232

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:184225
