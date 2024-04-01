[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataYelpSearchTaskPostResponseInfo

# Class: BusinessDataYelpSearchTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataYelpSearchTaskPostResponseInfo`**

## Implements

- [`IBusinessDataYelpSearchTaskPostResponseInfo`](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpSearchTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpSearchTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataYelpSearchTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataYelpSearchTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataYelpSearchTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataYelpSearchTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataYelpSearchTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataYelpSearchTaskPostResponseInfo.md#time)
- [version](BusinessDataYelpSearchTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataYelpSearchTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataYelpSearchTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataYelpSearchTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpSearchTaskPostResponseInfo**(`data?`): [`BusinessDataYelpSearchTaskPostResponseInfo`](BusinessDataYelpSearchTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpSearchTaskPostResponseInfo`](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataYelpSearchTaskPostResponseInfo`](BusinessDataYelpSearchTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:209086

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpSearchTaskPostResponseInfo](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md#cost)

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

[IBusinessDataYelpSearchTaskPostResponseInfo](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md#status_code)

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

[IBusinessDataYelpSearchTaskPostResponseInfo](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataYelpSearchTaskPostTaskInfo`](BusinessDataYelpSearchTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataYelpSearchTaskPostResponseInfo](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:209082

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataYelpSearchTaskPostResponseInfo](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataYelpSearchTaskPostResponseInfo](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataYelpSearchTaskPostResponseInfo](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataYelpSearchTaskPostResponseInfo](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataYelpSearchTaskPostResponseInfo.md#version)

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

main.ts:209090

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

main.ts:209112

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpSearchTaskPostResponseInfo`](BusinessDataYelpSearchTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpSearchTaskPostResponseInfo`](BusinessDataYelpSearchTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:209105
