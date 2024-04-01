[Documentation](../README.md) / [Exports](../modules.md) / OnPageInstantPagesResponseInfo

# Class: OnPageInstantPagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageInstantPagesResponseInfo`**

## Implements

- [`IOnPageInstantPagesResponseInfo`](../interfaces/IOnPageInstantPagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageInstantPagesResponseInfo.md#constructor)

### Properties

- [cost](OnPageInstantPagesResponseInfo.md#cost)
- [status\_code](OnPageInstantPagesResponseInfo.md#status_code)
- [status\_message](OnPageInstantPagesResponseInfo.md#status_message)
- [tasks](OnPageInstantPagesResponseInfo.md#tasks)
- [tasks\_count](OnPageInstantPagesResponseInfo.md#tasks_count)
- [tasks\_error](OnPageInstantPagesResponseInfo.md#tasks_error)
- [time](OnPageInstantPagesResponseInfo.md#time)
- [version](OnPageInstantPagesResponseInfo.md#version)

### Methods

- [init](OnPageInstantPagesResponseInfo.md#init)
- [toJSON](OnPageInstantPagesResponseInfo.md#tojson)
- [fromJS](OnPageInstantPagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageInstantPagesResponseInfo**(`data?`): [`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageInstantPagesResponseInfo`](../interfaces/IOnPageInstantPagesResponseInfo.md) |

#### Returns

[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:158887

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageInstantPagesResponseInfo](../interfaces/IOnPageInstantPagesResponseInfo.md).[cost](../interfaces/IOnPageInstantPagesResponseInfo.md#cost)

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

[IOnPageInstantPagesResponseInfo](../interfaces/IOnPageInstantPagesResponseInfo.md).[status_code](../interfaces/IOnPageInstantPagesResponseInfo.md#status_code)

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

[IOnPageInstantPagesResponseInfo](../interfaces/IOnPageInstantPagesResponseInfo.md).[status_message](../interfaces/IOnPageInstantPagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`OnPageInstantPagesTaskInfo`](OnPageInstantPagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageInstantPagesResponseInfo](../interfaces/IOnPageInstantPagesResponseInfo.md).[tasks](../interfaces/IOnPageInstantPagesResponseInfo.md#tasks)

#### Defined in

main.ts:158883

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageInstantPagesResponseInfo](../interfaces/IOnPageInstantPagesResponseInfo.md).[tasks_count](../interfaces/IOnPageInstantPagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageInstantPagesResponseInfo](../interfaces/IOnPageInstantPagesResponseInfo.md).[tasks_error](../interfaces/IOnPageInstantPagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageInstantPagesResponseInfo](../interfaces/IOnPageInstantPagesResponseInfo.md).[time](../interfaces/IOnPageInstantPagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageInstantPagesResponseInfo](../interfaces/IOnPageInstantPagesResponseInfo.md).[version](../interfaces/IOnPageInstantPagesResponseInfo.md#version)

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

main.ts:158891

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

main.ts:158913

___

### fromJS

▸ **fromJS**(`data`): [`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:158906
