[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTaskPostResponseInfo

# Class: AppDataGoogleAppListTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleAppListTaskPostResponseInfo`**

## Implements

- [`IAppDataGoogleAppListTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTaskPostResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListTaskPostResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppListTaskPostResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppListTaskPostResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppListTaskPostResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppListTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppListTaskPostResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppListTaskPostResponseInfo.md#time)
- [version](AppDataGoogleAppListTaskPostResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppListTaskPostResponseInfo.md#init)
- [toJSON](AppDataGoogleAppListTaskPostResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTaskPostResponseInfo**(`data?`): [`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTaskPostResponseInfo`](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md) |

#### Returns

[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:178679

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListTaskPostResponseInfo](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md#cost)

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

[IAppDataGoogleAppListTaskPostResponseInfo](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md#status_code)

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

[IAppDataGoogleAppListTaskPostResponseInfo](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleAppListTaskPostTaskInfo`](AppDataGoogleAppListTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppListTaskPostResponseInfo](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:178675

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppListTaskPostResponseInfo](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppListTaskPostResponseInfo](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppListTaskPostResponseInfo](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md).[time](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppListTaskPostResponseInfo](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md).[version](../interfaces/IAppDataGoogleAppListTaskPostResponseInfo.md#version)

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

main.ts:178683

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

main.ts:178705

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:178698
