[Documentation](../README.md) / [Exports](../modules.md) / AppendixStatusResponseInfo

# Class: AppendixStatusResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppendixStatusResponseInfo`**

## Implements

- [`IAppendixStatusResponseInfo`](../interfaces/IAppendixStatusResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixStatusResponseInfo.md#constructor)

### Properties

- [cost](AppendixStatusResponseInfo.md#cost)
- [status\_code](AppendixStatusResponseInfo.md#status_code)
- [status\_message](AppendixStatusResponseInfo.md#status_message)
- [tasks](AppendixStatusResponseInfo.md#tasks)
- [tasks\_count](AppendixStatusResponseInfo.md#tasks_count)
- [tasks\_error](AppendixStatusResponseInfo.md#tasks_error)
- [time](AppendixStatusResponseInfo.md#time)
- [version](AppendixStatusResponseInfo.md#version)

### Methods

- [init](AppendixStatusResponseInfo.md#init)
- [toJSON](AppendixStatusResponseInfo.md#tojson)
- [fromJS](AppendixStatusResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppendixStatusResponseInfo**(`data?`): [`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixStatusResponseInfo`](../interfaces/IAppendixStatusResponseInfo.md) |

#### Returns

[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:213047

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppendixStatusResponseInfo](../interfaces/IAppendixStatusResponseInfo.md).[cost](../interfaces/IAppendixStatusResponseInfo.md#cost)

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

[IAppendixStatusResponseInfo](../interfaces/IAppendixStatusResponseInfo.md).[status_code](../interfaces/IAppendixStatusResponseInfo.md#status_code)

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

[IAppendixStatusResponseInfo](../interfaces/IAppendixStatusResponseInfo.md).[status_message](../interfaces/IAppendixStatusResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppendixStatusTaskInfo`](AppendixStatusTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppendixStatusResponseInfo](../interfaces/IAppendixStatusResponseInfo.md).[tasks](../interfaces/IAppendixStatusResponseInfo.md#tasks)

#### Defined in

main.ts:213043

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppendixStatusResponseInfo](../interfaces/IAppendixStatusResponseInfo.md).[tasks_count](../interfaces/IAppendixStatusResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppendixStatusResponseInfo](../interfaces/IAppendixStatusResponseInfo.md).[tasks_error](../interfaces/IAppendixStatusResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppendixStatusResponseInfo](../interfaces/IAppendixStatusResponseInfo.md).[time](../interfaces/IAppendixStatusResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppendixStatusResponseInfo](../interfaces/IAppendixStatusResponseInfo.md).[version](../interfaces/IAppendixStatusResponseInfo.md#version)

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

main.ts:213051

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

main.ts:213073

___

### fromJS

▸ **fromJS**(`data`): [`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:213066
