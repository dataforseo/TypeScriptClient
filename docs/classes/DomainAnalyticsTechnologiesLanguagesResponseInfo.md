[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesLanguagesResponseInfo

# Class: DomainAnalyticsTechnologiesLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DomainAnalyticsTechnologiesLanguagesResponseInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#cost)
- [status\_code](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#status_message)
- [tasks](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#tasks_error)
- [time](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#time)
- [version](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesLanguagesResponseInfo**(`data?`): [`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesLanguagesResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:74426

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesLanguagesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#cost)

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

[IDomainAnalyticsTechnologiesLanguagesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesLanguagesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DomainAnalyticsTechnologiesLanguagesTaskInfo`](DomainAnalyticsTechnologiesLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsTechnologiesLanguagesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:74422

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsTechnologiesLanguagesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsTechnologiesLanguagesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesLanguagesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsTechnologiesLanguagesResponseInfo](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md).[version](../interfaces/IDomainAnalyticsTechnologiesLanguagesResponseInfo.md#version)

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

main.ts:74430

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

main.ts:74452

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:74445
