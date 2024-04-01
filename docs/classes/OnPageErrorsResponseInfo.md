[Documentation](../README.md) / [Exports](../modules.md) / OnPageErrorsResponseInfo

# Class: OnPageErrorsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageErrorsResponseInfo`**

## Implements

- [`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageErrorsResponseInfo.md#constructor)

### Properties

- [cost](OnPageErrorsResponseInfo.md#cost)
- [status\_code](OnPageErrorsResponseInfo.md#status_code)
- [status\_message](OnPageErrorsResponseInfo.md#status_message)
- [tasks](OnPageErrorsResponseInfo.md#tasks)
- [tasks\_count](OnPageErrorsResponseInfo.md#tasks_count)
- [tasks\_error](OnPageErrorsResponseInfo.md#tasks_error)
- [time](OnPageErrorsResponseInfo.md#time)
- [version](OnPageErrorsResponseInfo.md#version)

### Methods

- [init](OnPageErrorsResponseInfo.md#init)
- [toJSON](OnPageErrorsResponseInfo.md#tojson)
- [fromJS](OnPageErrorsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageErrorsResponseInfo**(`data?`): [`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageErrorsResponseInfo`](../interfaces/IOnPageErrorsResponseInfo.md) |

#### Returns

[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:147503

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageErrorsResponseInfo](../interfaces/IOnPageErrorsResponseInfo.md).[cost](../interfaces/IOnPageErrorsResponseInfo.md#cost)

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

[IOnPageErrorsResponseInfo](../interfaces/IOnPageErrorsResponseInfo.md).[status_code](../interfaces/IOnPageErrorsResponseInfo.md#status_code)

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

[IOnPageErrorsResponseInfo](../interfaces/IOnPageErrorsResponseInfo.md).[status_message](../interfaces/IOnPageErrorsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`OnPageErrorsTaskInfo`](OnPageErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageErrorsResponseInfo](../interfaces/IOnPageErrorsResponseInfo.md).[tasks](../interfaces/IOnPageErrorsResponseInfo.md#tasks)

#### Defined in

main.ts:147499

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageErrorsResponseInfo](../interfaces/IOnPageErrorsResponseInfo.md).[tasks_count](../interfaces/IOnPageErrorsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageErrorsResponseInfo](../interfaces/IOnPageErrorsResponseInfo.md).[tasks_error](../interfaces/IOnPageErrorsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageErrorsResponseInfo](../interfaces/IOnPageErrorsResponseInfo.md).[time](../interfaces/IOnPageErrorsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageErrorsResponseInfo](../interfaces/IOnPageErrorsResponseInfo.md).[version](../interfaces/IOnPageErrorsResponseInfo.md#version)

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

main.ts:147507

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

main.ts:147529

___

### fromJS

▸ **fromJS**(`data`): [`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:147522
