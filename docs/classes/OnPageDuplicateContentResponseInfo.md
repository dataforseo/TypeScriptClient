[Documentation](../README.md) / [Exports](../modules.md) / OnPageDuplicateContentResponseInfo

# Class: OnPageDuplicateContentResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageDuplicateContentResponseInfo`**

## Implements

- [`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageDuplicateContentResponseInfo.md#constructor)

### Properties

- [cost](OnPageDuplicateContentResponseInfo.md#cost)
- [status\_code](OnPageDuplicateContentResponseInfo.md#status_code)
- [status\_message](OnPageDuplicateContentResponseInfo.md#status_message)
- [tasks](OnPageDuplicateContentResponseInfo.md#tasks)
- [tasks\_count](OnPageDuplicateContentResponseInfo.md#tasks_count)
- [tasks\_error](OnPageDuplicateContentResponseInfo.md#tasks_error)
- [time](OnPageDuplicateContentResponseInfo.md#time)
- [version](OnPageDuplicateContentResponseInfo.md#version)

### Methods

- [init](OnPageDuplicateContentResponseInfo.md#init)
- [toJSON](OnPageDuplicateContentResponseInfo.md#tojson)
- [fromJS](OnPageDuplicateContentResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageDuplicateContentResponseInfo**(`data?`): [`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageDuplicateContentResponseInfo`](../interfaces/IOnPageDuplicateContentResponseInfo.md) |

#### Returns

[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:153249

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageDuplicateContentResponseInfo](../interfaces/IOnPageDuplicateContentResponseInfo.md).[cost](../interfaces/IOnPageDuplicateContentResponseInfo.md#cost)

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

[IOnPageDuplicateContentResponseInfo](../interfaces/IOnPageDuplicateContentResponseInfo.md).[status_code](../interfaces/IOnPageDuplicateContentResponseInfo.md#status_code)

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

[IOnPageDuplicateContentResponseInfo](../interfaces/IOnPageDuplicateContentResponseInfo.md).[status_message](../interfaces/IOnPageDuplicateContentResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`OnPageDuplicateContentTaskInfo`](OnPageDuplicateContentTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageDuplicateContentResponseInfo](../interfaces/IOnPageDuplicateContentResponseInfo.md).[tasks](../interfaces/IOnPageDuplicateContentResponseInfo.md#tasks)

#### Defined in

main.ts:153245

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageDuplicateContentResponseInfo](../interfaces/IOnPageDuplicateContentResponseInfo.md).[tasks_count](../interfaces/IOnPageDuplicateContentResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageDuplicateContentResponseInfo](../interfaces/IOnPageDuplicateContentResponseInfo.md).[tasks_error](../interfaces/IOnPageDuplicateContentResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageDuplicateContentResponseInfo](../interfaces/IOnPageDuplicateContentResponseInfo.md).[time](../interfaces/IOnPageDuplicateContentResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageDuplicateContentResponseInfo](../interfaces/IOnPageDuplicateContentResponseInfo.md).[version](../interfaces/IOnPageDuplicateContentResponseInfo.md#version)

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

main.ts:153253

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

main.ts:153275

___

### fromJS

▸ **fromJS**(`data`): [`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:153268
