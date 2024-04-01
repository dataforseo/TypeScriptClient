[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo

# Class: DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#cost)
- [status\_code](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#status_message)
- [tasks](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#tasks_error)
- [time](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#time)
- [version](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo**(`data?`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:75330

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#cost)

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

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#tasks)

#### Defined in

main.ts:75326

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md).[version](../interfaces/IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md#version)

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

main.ts:75334

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

main.ts:75356

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:75349
