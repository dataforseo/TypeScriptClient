[Documentation](../README.md) / [Exports](../modules.md) / AppDataAppleAppInfoTaskPostResponseInfo

# Class: AppDataAppleAppInfoTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataAppleAppInfoTaskPostResponseInfo`**

## Implements

- [`IAppDataAppleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppInfoTaskPostResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppInfoTaskPostResponseInfo.md#cost)
- [status\_code](AppDataAppleAppInfoTaskPostResponseInfo.md#status_code)
- [status\_message](AppDataAppleAppInfoTaskPostResponseInfo.md#status_message)
- [tasks](AppDataAppleAppInfoTaskPostResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleAppInfoTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleAppInfoTaskPostResponseInfo.md#tasks_error)
- [time](AppDataAppleAppInfoTaskPostResponseInfo.md#time)
- [version](AppDataAppleAppInfoTaskPostResponseInfo.md#version)

### Methods

- [init](AppDataAppleAppInfoTaskPostResponseInfo.md#init)
- [toJSON](AppDataAppleAppInfoTaskPostResponseInfo.md#tojson)
- [fromJS](AppDataAppleAppInfoTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppInfoTaskPostResponseInfo**(`data?`): [`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppInfoTaskPostResponseInfo`](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md) |

#### Returns

[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:184245

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppInfoTaskPostResponseInfo](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md).[cost](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md#cost)

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

[IAppDataAppleAppInfoTaskPostResponseInfo](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md).[status_code](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md#status_code)

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

[IAppDataAppleAppInfoTaskPostResponseInfo](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md).[status_message](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataAppleAppInfoTaskPostTaskInfo`](AppDataAppleAppInfoTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleAppInfoTaskPostResponseInfo](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md).[tasks](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:184241

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleAppInfoTaskPostResponseInfo](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleAppInfoTaskPostResponseInfo](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleAppInfoTaskPostResponseInfo](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md).[time](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleAppInfoTaskPostResponseInfo](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md).[version](../interfaces/IAppDataAppleAppInfoTaskPostResponseInfo.md#version)

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

main.ts:184249

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

main.ts:184271

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:184264
