[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataIdListResponseInfo

# Class: BusinessDataIdListResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataIdListResponseInfo`**

## Implements

- [`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataIdListResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataIdListResponseInfo.md#cost)
- [status\_code](BusinessDataIdListResponseInfo.md#status_code)
- [status\_message](BusinessDataIdListResponseInfo.md#status_message)
- [tasks](BusinessDataIdListResponseInfo.md#tasks)
- [tasks\_count](BusinessDataIdListResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataIdListResponseInfo.md#tasks_error)
- [time](BusinessDataIdListResponseInfo.md#time)
- [version](BusinessDataIdListResponseInfo.md#version)

### Methods

- [init](BusinessDataIdListResponseInfo.md#init)
- [toJSON](BusinessDataIdListResponseInfo.md#tojson)
- [fromJS](BusinessDataIdListResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataIdListResponseInfo**(`data?`): [`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataIdListResponseInfo`](../interfaces/IBusinessDataIdListResponseInfo.md) |

#### Returns

[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:192894

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataIdListResponseInfo](../interfaces/IBusinessDataIdListResponseInfo.md).[cost](../interfaces/IBusinessDataIdListResponseInfo.md#cost)

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

[IBusinessDataIdListResponseInfo](../interfaces/IBusinessDataIdListResponseInfo.md).[status_code](../interfaces/IBusinessDataIdListResponseInfo.md#status_code)

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

[IBusinessDataIdListResponseInfo](../interfaces/IBusinessDataIdListResponseInfo.md).[status_message](../interfaces/IBusinessDataIdListResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataIdListTaskInfo`](BusinessDataIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataIdListResponseInfo](../interfaces/IBusinessDataIdListResponseInfo.md).[tasks](../interfaces/IBusinessDataIdListResponseInfo.md#tasks)

#### Defined in

main.ts:192890

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataIdListResponseInfo](../interfaces/IBusinessDataIdListResponseInfo.md).[tasks_count](../interfaces/IBusinessDataIdListResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataIdListResponseInfo](../interfaces/IBusinessDataIdListResponseInfo.md).[tasks_error](../interfaces/IBusinessDataIdListResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataIdListResponseInfo](../interfaces/IBusinessDataIdListResponseInfo.md).[time](../interfaces/IBusinessDataIdListResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataIdListResponseInfo](../interfaces/IBusinessDataIdListResponseInfo.md).[version](../interfaces/IBusinessDataIdListResponseInfo.md#version)

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

main.ts:192898

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

main.ts:192920

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:192913
