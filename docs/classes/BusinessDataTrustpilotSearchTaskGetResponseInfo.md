[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotSearchTaskGetResponseInfo

# Class: BusinessDataTrustpilotSearchTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataTrustpilotSearchTaskGetResponseInfo`**

## Implements

- [`IBusinessDataTrustpilotSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#cost)
- [status\_code](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#status_message)
- [tasks](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#tasks_error)
- [time](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#time)
- [version](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#version)

### Methods

- [init](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#init)
- [toJSON](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotSearchTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotSearchTaskGetResponseInfo**(`data?`): [`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotSearchTaskGetResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md) |

#### Returns

[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:199479

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md).[cost](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md#cost)

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

[IBusinessDataTrustpilotSearchTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md#status_code)

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

[IBusinessDataTrustpilotSearchTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataTrustpilotSearchTaskGetTaskInfo`](BusinessDataTrustpilotSearchTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md).[tasks](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md#tasks)

#### Defined in

main.ts:199475

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md).[time](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTrustpilotSearchTaskGetResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md).[version](../interfaces/IBusinessDataTrustpilotSearchTaskGetResponseInfo.md#version)

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

main.ts:199483

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

main.ts:199505

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:199498
