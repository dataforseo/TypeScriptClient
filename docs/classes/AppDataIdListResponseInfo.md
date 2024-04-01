[Documentation](../README.md) / [Exports](../modules.md) / AppDataIdListResponseInfo

# Class: AppDataIdListResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataIdListResponseInfo`**

## Implements

- [`IAppDataIdListResponseInfo`](../interfaces/IAppDataIdListResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataIdListResponseInfo.md#constructor)

### Properties

- [cost](AppDataIdListResponseInfo.md#cost)
- [status\_code](AppDataIdListResponseInfo.md#status_code)
- [status\_message](AppDataIdListResponseInfo.md#status_message)
- [tasks](AppDataIdListResponseInfo.md#tasks)
- [tasks\_count](AppDataIdListResponseInfo.md#tasks_count)
- [tasks\_error](AppDataIdListResponseInfo.md#tasks_error)
- [time](AppDataIdListResponseInfo.md#time)
- [version](AppDataIdListResponseInfo.md#version)

### Methods

- [init](AppDataIdListResponseInfo.md#init)
- [toJSON](AppDataIdListResponseInfo.md#tojson)
- [fromJS](AppDataIdListResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataIdListResponseInfo**(`data?`): [`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataIdListResponseInfo`](../interfaces/IAppDataIdListResponseInfo.md) |

#### Returns

[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:182028

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataIdListResponseInfo](../interfaces/IAppDataIdListResponseInfo.md).[cost](../interfaces/IAppDataIdListResponseInfo.md#cost)

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

[IAppDataIdListResponseInfo](../interfaces/IAppDataIdListResponseInfo.md).[status_code](../interfaces/IAppDataIdListResponseInfo.md#status_code)

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

[IAppDataIdListResponseInfo](../interfaces/IAppDataIdListResponseInfo.md).[status_message](../interfaces/IAppDataIdListResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`AppDataIdListTaskInfo`](AppDataIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataIdListResponseInfo](../interfaces/IAppDataIdListResponseInfo.md).[tasks](../interfaces/IAppDataIdListResponseInfo.md#tasks)

#### Defined in

main.ts:182024

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataIdListResponseInfo](../interfaces/IAppDataIdListResponseInfo.md).[tasks_count](../interfaces/IAppDataIdListResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataIdListResponseInfo](../interfaces/IAppDataIdListResponseInfo.md).[tasks_error](../interfaces/IAppDataIdListResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataIdListResponseInfo](../interfaces/IAppDataIdListResponseInfo.md).[time](../interfaces/IAppDataIdListResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataIdListResponseInfo](../interfaces/IAppDataIdListResponseInfo.md).[version](../interfaces/IAppDataIdListResponseInfo.md#version)

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

main.ts:182032

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

main.ts:182054

___

### fromJS

▸ **fromJS**(`data`): [`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:182047
