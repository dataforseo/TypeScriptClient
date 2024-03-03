[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataYelpSearchTaskGetResponseInfo

# Class: BusinessDataYelpSearchTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataYelpSearchTaskGetResponseInfo`**

## Implements

- [`IBusinessDataYelpSearchTaskGetResponseInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpSearchTaskGetResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpSearchTaskGetResponseInfo.md#cost)
- [status\_code](BusinessDataYelpSearchTaskGetResponseInfo.md#status_code)
- [status\_message](BusinessDataYelpSearchTaskGetResponseInfo.md#status_message)
- [tasks](BusinessDataYelpSearchTaskGetResponseInfo.md#tasks)
- [tasks\_count](BusinessDataYelpSearchTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataYelpSearchTaskGetResponseInfo.md#tasks_error)
- [time](BusinessDataYelpSearchTaskGetResponseInfo.md#time)
- [version](BusinessDataYelpSearchTaskGetResponseInfo.md#version)

### Methods

- [init](BusinessDataYelpSearchTaskGetResponseInfo.md#init)
- [toJSON](BusinessDataYelpSearchTaskGetResponseInfo.md#tojson)
- [fromJS](BusinessDataYelpSearchTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpSearchTaskGetResponseInfo**(`data?`): [`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpSearchTaskGetResponseInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md) |

#### Returns

[`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:204743

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[cost](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#cost)

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

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[status_code](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#status_code)

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

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[status_message](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataYelpSearchTaskGetTaskInfo`](BusinessDataYelpSearchTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[tasks](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:204739

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[tasks_count](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[tasks_error](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[time](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[version](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#version)

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

main.ts:204747

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

main.ts:204769

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:204762
