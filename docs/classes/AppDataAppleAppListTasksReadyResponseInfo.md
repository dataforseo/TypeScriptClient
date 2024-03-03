[Documentation](../README.md) / [Exports](../modules.md) / AppDataAppleAppListTasksReadyResponseInfo

# Class: AppDataAppleAppListTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataAppleAppListTasksReadyResponseInfo`**

## Implements

- [`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppListTasksReadyResponseInfo.md#cost)
- [status\_code](AppDataAppleAppListTasksReadyResponseInfo.md#status_code)
- [status\_message](AppDataAppleAppListTasksReadyResponseInfo.md#status_message)
- [tasks](AppDataAppleAppListTasksReadyResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleAppListTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleAppListTasksReadyResponseInfo.md#tasks_error)
- [time](AppDataAppleAppListTasksReadyResponseInfo.md#time)
- [version](AppDataAppleAppListTasksReadyResponseInfo.md#version)

### Methods

- [init](AppDataAppleAppListTasksReadyResponseInfo.md#init)
- [toJSON](AppDataAppleAppListTasksReadyResponseInfo.md#tojson)
- [fromJS](AppDataAppleAppListTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListTasksReadyResponseInfo**(`data?`): [`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListTasksReadyResponseInfo`](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md) |

#### Returns

[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:185495

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppListTasksReadyResponseInfo](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[cost](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IAppDataAppleAppListTasksReadyResponseInfo](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[status_code](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IAppDataAppleAppListTasksReadyResponseInfo](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[status_message](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataAppleAppListTasksReadyTaskInfo`](AppDataAppleAppListTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleAppListTasksReadyResponseInfo](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[tasks](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:185491

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleAppListTasksReadyResponseInfo](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleAppListTasksReadyResponseInfo](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleAppListTasksReadyResponseInfo](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[time](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleAppListTasksReadyResponseInfo](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md).[version](../interfaces/IAppDataAppleAppListTasksReadyResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:185499

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

main.ts:185521

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:185514
