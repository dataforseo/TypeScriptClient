[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorLanguagesResponseInfo

# Class: BusinessDataTripadvisorLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataTripadvisorLanguagesResponseInfo`**

## Implements

- [`IBusinessDataTripadvisorLanguagesResponseInfo`](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorLanguagesResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorLanguagesResponseInfo.md#cost)
- [status\_code](BusinessDataTripadvisorLanguagesResponseInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorLanguagesResponseInfo.md#status_message)
- [tasks](BusinessDataTripadvisorLanguagesResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTripadvisorLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTripadvisorLanguagesResponseInfo.md#tasks_error)
- [time](BusinessDataTripadvisorLanguagesResponseInfo.md#time)
- [version](BusinessDataTripadvisorLanguagesResponseInfo.md#version)

### Methods

- [init](BusinessDataTripadvisorLanguagesResponseInfo.md#init)
- [toJSON](BusinessDataTripadvisorLanguagesResponseInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorLanguagesResponseInfo**(`data?`): [`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorLanguagesResponseInfo`](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md) |

#### Returns

[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:206306

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorLanguagesResponseInfo](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md).[cost](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md#cost)

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

[IBusinessDataTripadvisorLanguagesResponseInfo](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md#status_code)

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

[IBusinessDataTripadvisorLanguagesResponseInfo](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataTripadvisorLanguagesTaskInfo`](BusinessDataTripadvisorLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTripadvisorLanguagesResponseInfo](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md).[tasks](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:206302

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTripadvisorLanguagesResponseInfo](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTripadvisorLanguagesResponseInfo](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorLanguagesResponseInfo](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md).[time](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTripadvisorLanguagesResponseInfo](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md).[version](../interfaces/IBusinessDataTripadvisorLanguagesResponseInfo.md#version)

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

main.ts:206310

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

main.ts:206332

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:206325
