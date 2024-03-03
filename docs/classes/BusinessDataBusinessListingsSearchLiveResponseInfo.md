[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsSearchLiveResponseInfo

# Class: BusinessDataBusinessListingsSearchLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataBusinessListingsSearchLiveResponseInfo`**

## Implements

- [`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsSearchLiveResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataBusinessListingsSearchLiveResponseInfo.md#cost)
- [status\_code](BusinessDataBusinessListingsSearchLiveResponseInfo.md#status_code)
- [status\_message](BusinessDataBusinessListingsSearchLiveResponseInfo.md#status_message)
- [tasks](BusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks)
- [tasks\_count](BusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks_error)
- [time](BusinessDataBusinessListingsSearchLiveResponseInfo.md#time)
- [version](BusinessDataBusinessListingsSearchLiveResponseInfo.md#version)

### Methods

- [init](BusinessDataBusinessListingsSearchLiveResponseInfo.md#init)
- [toJSON](BusinessDataBusinessListingsSearchLiveResponseInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsSearchLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsSearchLiveResponseInfo**(`data?`): [`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsSearchLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md) |

#### Returns

[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:189633

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[cost](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#cost)

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

[IBusinessDataBusinessListingsSearchLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[status_code](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#status_code)

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

[IBusinessDataBusinessListingsSearchLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[status_message](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataBusinessListingsSearchLiveTaskInfo`](BusinessDataBusinessListingsSearchLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[tasks](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks)

#### Defined in

main.ts:189629

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[tasks_count](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[tasks_error](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[time](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md).[version](../interfaces/IBusinessDataBusinessListingsSearchLiveResponseInfo.md#version)

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

main.ts:189637

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

main.ts:189659

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:189652
