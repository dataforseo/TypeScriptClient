[Documentation](../README.md) / [Exports](../modules.md) / AppDataAppleAppSearchesTaskPostResponseInfo

# Class: AppDataAppleAppSearchesTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataAppleAppSearchesTaskPostResponseInfo`**

## Implements

- [`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppSearchesTaskPostResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppSearchesTaskPostResponseInfo.md#cost)
- [status\_code](AppDataAppleAppSearchesTaskPostResponseInfo.md#status_code)
- [status\_message](AppDataAppleAppSearchesTaskPostResponseInfo.md#status_message)
- [tasks](AppDataAppleAppSearchesTaskPostResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleAppSearchesTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleAppSearchesTaskPostResponseInfo.md#tasks_error)
- [time](AppDataAppleAppSearchesTaskPostResponseInfo.md#time)
- [version](AppDataAppleAppSearchesTaskPostResponseInfo.md#version)

### Methods

- [init](AppDataAppleAppSearchesTaskPostResponseInfo.md#init)
- [toJSON](AppDataAppleAppSearchesTaskPostResponseInfo.md#tojson)
- [fromJS](AppDataAppleAppSearchesTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppSearchesTaskPostResponseInfo**(`data?`): [`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppSearchesTaskPostResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md) |

#### Returns

[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:183507

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppSearchesTaskPostResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[cost](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#cost)

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

[IAppDataAppleAppSearchesTaskPostResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[status_code](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#status_code)

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

[IAppDataAppleAppSearchesTaskPostResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[status_message](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataAppleAppSearchesTaskPostTaskInfo`](AppDataAppleAppSearchesTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleAppSearchesTaskPostResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[tasks](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:183503

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleAppSearchesTaskPostResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleAppSearchesTaskPostResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleAppSearchesTaskPostResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[time](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleAppSearchesTaskPostResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md).[version](../interfaces/IAppDataAppleAppSearchesTaskPostResponseInfo.md#version)

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

main.ts:183511

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

main.ts:183533

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:183526
