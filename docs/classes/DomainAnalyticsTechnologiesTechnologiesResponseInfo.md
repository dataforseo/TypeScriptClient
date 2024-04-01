[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologiesResponseInfo

# Class: DomainAnalyticsTechnologiesTechnologiesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DomainAnalyticsTechnologiesTechnologiesResponseInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#cost)
- [status\_code](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#status_message)
- [tasks](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#tasks_error)
- [time](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#time)
- [version](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologiesResponseInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologiesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:74756

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md#cost)

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

[IDomainAnalyticsTechnologiesTechnologiesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesTechnologiesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DomainAnalyticsTechnologiesTechnologiesTaskInfo`](DomainAnalyticsTechnologiesTechnologiesTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md#tasks)

#### Defined in

main.ts:74752

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md).[version](../interfaces/IDomainAnalyticsTechnologiesTechnologiesResponseInfo.md#version)

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

main.ts:74760

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

main.ts:74782

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:74775
