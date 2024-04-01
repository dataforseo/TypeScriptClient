[Documentation](../README.md) / [Exports](../modules.md) / OnPageNonIndexableResponseInfo

# Class: OnPageNonIndexableResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageNonIndexableResponseInfo`**

## Implements

- [`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageNonIndexableResponseInfo.md#constructor)

### Properties

- [cost](OnPageNonIndexableResponseInfo.md#cost)
- [status\_code](OnPageNonIndexableResponseInfo.md#status_code)
- [status\_message](OnPageNonIndexableResponseInfo.md#status_message)
- [tasks](OnPageNonIndexableResponseInfo.md#tasks)
- [tasks\_count](OnPageNonIndexableResponseInfo.md#tasks_count)
- [tasks\_error](OnPageNonIndexableResponseInfo.md#tasks_error)
- [time](OnPageNonIndexableResponseInfo.md#time)
- [version](OnPageNonIndexableResponseInfo.md#version)

### Methods

- [init](OnPageNonIndexableResponseInfo.md#init)
- [toJSON](OnPageNonIndexableResponseInfo.md#tojson)
- [fromJS](OnPageNonIndexableResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageNonIndexableResponseInfo**(`data?`): [`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageNonIndexableResponseInfo`](../interfaces/IOnPageNonIndexableResponseInfo.md) |

#### Returns

[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:155007

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageNonIndexableResponseInfo](../interfaces/IOnPageNonIndexableResponseInfo.md).[cost](../interfaces/IOnPageNonIndexableResponseInfo.md#cost)

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

[IOnPageNonIndexableResponseInfo](../interfaces/IOnPageNonIndexableResponseInfo.md).[status_code](../interfaces/IOnPageNonIndexableResponseInfo.md#status_code)

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

[IOnPageNonIndexableResponseInfo](../interfaces/IOnPageNonIndexableResponseInfo.md).[status_message](../interfaces/IOnPageNonIndexableResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`OnPageNonIndexableTaskInfo`](OnPageNonIndexableTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageNonIndexableResponseInfo](../interfaces/IOnPageNonIndexableResponseInfo.md).[tasks](../interfaces/IOnPageNonIndexableResponseInfo.md#tasks)

#### Defined in

main.ts:155003

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageNonIndexableResponseInfo](../interfaces/IOnPageNonIndexableResponseInfo.md).[tasks_count](../interfaces/IOnPageNonIndexableResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageNonIndexableResponseInfo](../interfaces/IOnPageNonIndexableResponseInfo.md).[tasks_error](../interfaces/IOnPageNonIndexableResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageNonIndexableResponseInfo](../interfaces/IOnPageNonIndexableResponseInfo.md).[time](../interfaces/IOnPageNonIndexableResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageNonIndexableResponseInfo](../interfaces/IOnPageNonIndexableResponseInfo.md).[version](../interfaces/IOnPageNonIndexableResponseInfo.md#version)

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

main.ts:155011

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

main.ts:155033

___

### fromJS

▸ **fromJS**(`data`): [`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:155026
