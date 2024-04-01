[Documentation](../README.md) / [Exports](../modules.md) / BacklinksHistoryLiveResponseInfo

# Class: BacklinksHistoryLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BacklinksHistoryLiveResponseInfo`**

## Implements

- [`IBacklinksHistoryLiveResponseInfo`](../interfaces/IBacklinksHistoryLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksHistoryLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksHistoryLiveResponseInfo.md#cost)
- [status\_code](BacklinksHistoryLiveResponseInfo.md#status_code)
- [status\_message](BacklinksHistoryLiveResponseInfo.md#status_message)
- [tasks](BacklinksHistoryLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksHistoryLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksHistoryLiveResponseInfo.md#tasks_error)
- [time](BacklinksHistoryLiveResponseInfo.md#time)
- [version](BacklinksHistoryLiveResponseInfo.md#version)

### Methods

- [init](BacklinksHistoryLiveResponseInfo.md#init)
- [toJSON](BacklinksHistoryLiveResponseInfo.md#tojson)
- [fromJS](BacklinksHistoryLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksHistoryLiveResponseInfo**(`data?`): [`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksHistoryLiveResponseInfo`](../interfaces/IBacklinksHistoryLiveResponseInfo.md) |

#### Returns

[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:135893

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksHistoryLiveResponseInfo](../interfaces/IBacklinksHistoryLiveResponseInfo.md).[cost](../interfaces/IBacklinksHistoryLiveResponseInfo.md#cost)

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

[IBacklinksHistoryLiveResponseInfo](../interfaces/IBacklinksHistoryLiveResponseInfo.md).[status_code](../interfaces/IBacklinksHistoryLiveResponseInfo.md#status_code)

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

[IBacklinksHistoryLiveResponseInfo](../interfaces/IBacklinksHistoryLiveResponseInfo.md).[status_message](../interfaces/IBacklinksHistoryLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BacklinksHistoryLiveTaskInfo`](BacklinksHistoryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksHistoryLiveResponseInfo](../interfaces/IBacklinksHistoryLiveResponseInfo.md).[tasks](../interfaces/IBacklinksHistoryLiveResponseInfo.md#tasks)

#### Defined in

main.ts:135889

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksHistoryLiveResponseInfo](../interfaces/IBacklinksHistoryLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksHistoryLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksHistoryLiveResponseInfo](../interfaces/IBacklinksHistoryLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksHistoryLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksHistoryLiveResponseInfo](../interfaces/IBacklinksHistoryLiveResponseInfo.md).[time](../interfaces/IBacklinksHistoryLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksHistoryLiveResponseInfo](../interfaces/IBacklinksHistoryLiveResponseInfo.md).[version](../interfaces/IBacklinksHistoryLiveResponseInfo.md#version)

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

main.ts:135897

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

main.ts:135919

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:135912
