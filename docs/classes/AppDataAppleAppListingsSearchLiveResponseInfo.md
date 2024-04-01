[Documentation](../README.md) / [Exports](../modules.md) / AppDataAppleAppListingsSearchLiveResponseInfo

# Class: AppDataAppleAppListingsSearchLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataAppleAppListingsSearchLiveResponseInfo`**

## Implements

- [`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListingsSearchLiveResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppListingsSearchLiveResponseInfo.md#cost)
- [status\_code](AppDataAppleAppListingsSearchLiveResponseInfo.md#status_code)
- [status\_message](AppDataAppleAppListingsSearchLiveResponseInfo.md#status_message)
- [tasks](AppDataAppleAppListingsSearchLiveResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleAppListingsSearchLiveResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleAppListingsSearchLiveResponseInfo.md#tasks_error)
- [time](AppDataAppleAppListingsSearchLiveResponseInfo.md#time)
- [version](AppDataAppleAppListingsSearchLiveResponseInfo.md#version)

### Methods

- [init](AppDataAppleAppListingsSearchLiveResponseInfo.md#init)
- [toJSON](AppDataAppleAppListingsSearchLiveResponseInfo.md#tojson)
- [fromJS](AppDataAppleAppListingsSearchLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListingsSearchLiveResponseInfo**(`data?`): [`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListingsSearchLiveResponseInfo`](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md) |

#### Returns

[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:192546

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResponseInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[cost](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#cost)

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

[IAppDataAppleAppListingsSearchLiveResponseInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[status_code](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#status_code)

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

[IAppDataAppleAppListingsSearchLiveResponseInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[status_message](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`AppDataAppleAppListingsSearchLiveTaskInfo`](AppDataAppleAppListingsSearchLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResponseInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[tasks](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#tasks)

#### Defined in

main.ts:192542

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResponseInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResponseInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResponseInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[time](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleAppListingsSearchLiveResponseInfo](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md).[version](../interfaces/IAppDataAppleAppListingsSearchLiveResponseInfo.md#version)

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

main.ts:192550

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

main.ts:192572

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:192565
