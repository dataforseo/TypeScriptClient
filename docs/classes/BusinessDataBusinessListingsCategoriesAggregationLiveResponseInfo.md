[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`**

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#cost)
- [status\_code](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#status_code)
- [status\_message](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#status_message)
- [tasks](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tasks)
- [tasks\_count](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tasks_error)
- [time](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#time)
- [version](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#version)

### Methods

- [init](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#init)
- [toJSON](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo**(`data?`): [`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md) |

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:195572

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[cost](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#cost)

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

[IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[status_code](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#status_code)

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

[IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[status_message](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[tasks](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tasks)

#### Defined in

main.ts:195568

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[tasks_count](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[tasks_error](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[time](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md).[version](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md#version)

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

main.ts:195576

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

main.ts:195598

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:195591
