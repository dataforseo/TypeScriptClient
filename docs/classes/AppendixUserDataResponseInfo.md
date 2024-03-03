[Documentation](../README.md) / [Exports](../modules.md) / AppendixUserDataResponseInfo

# Class: AppendixUserDataResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppendixUserDataResponseInfo`**

## Implements

- [`IAppendixUserDataResponseInfo`](../interfaces/IAppendixUserDataResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixUserDataResponseInfo.md#constructor)

### Properties

- [cost](AppendixUserDataResponseInfo.md#cost)
- [status\_code](AppendixUserDataResponseInfo.md#status_code)
- [status\_message](AppendixUserDataResponseInfo.md#status_message)
- [tasks](AppendixUserDataResponseInfo.md#tasks)
- [tasks\_count](AppendixUserDataResponseInfo.md#tasks_count)
- [tasks\_error](AppendixUserDataResponseInfo.md#tasks_error)
- [time](AppendixUserDataResponseInfo.md#time)
- [version](AppendixUserDataResponseInfo.md#version)

### Methods

- [init](AppendixUserDataResponseInfo.md#init)
- [toJSON](AppendixUserDataResponseInfo.md#tojson)
- [fromJS](AppendixUserDataResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppendixUserDataResponseInfo**(`data?`): [`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixUserDataResponseInfo`](../interfaces/IAppendixUserDataResponseInfo.md) |

#### Returns

[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:212419

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppendixUserDataResponseInfo](../interfaces/IAppendixUserDataResponseInfo.md).[cost](../interfaces/IAppendixUserDataResponseInfo.md#cost)

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

[IAppendixUserDataResponseInfo](../interfaces/IAppendixUserDataResponseInfo.md).[status_code](../interfaces/IAppendixUserDataResponseInfo.md#status_code)

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

[IAppendixUserDataResponseInfo](../interfaces/IAppendixUserDataResponseInfo.md).[status_message](../interfaces/IAppendixUserDataResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppendixUserDataTaskInfo`](AppendixUserDataTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppendixUserDataResponseInfo](../interfaces/IAppendixUserDataResponseInfo.md).[tasks](../interfaces/IAppendixUserDataResponseInfo.md#tasks)

#### Defined in

main.ts:212415

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppendixUserDataResponseInfo](../interfaces/IAppendixUserDataResponseInfo.md).[tasks_count](../interfaces/IAppendixUserDataResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppendixUserDataResponseInfo](../interfaces/IAppendixUserDataResponseInfo.md).[tasks_error](../interfaces/IAppendixUserDataResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppendixUserDataResponseInfo](../interfaces/IAppendixUserDataResponseInfo.md).[time](../interfaces/IAppendixUserDataResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppendixUserDataResponseInfo](../interfaces/IAppendixUserDataResponseInfo.md).[version](../interfaces/IAppendixUserDataResponseInfo.md#version)

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

main.ts:212423

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

main.ts:212445

___

### fromJS

▸ **fromJS**(`data`): [`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:212438
