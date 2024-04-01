[Documentation](../README.md) / [Exports](../modules.md) / DomainAnalyticsWhoisAvailableFiltersResponseInfo

# Class: DomainAnalyticsWhoisAvailableFiltersResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DomainAnalyticsWhoisAvailableFiltersResponseInfo`**

## Implements

- [`IDomainAnalyticsWhoisAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#cost)
- [status\_code](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#status_message)
- [tasks](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#tasks_error)
- [time](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#time)
- [version](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#init)
- [toJSON](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsWhoisAvailableFiltersResponseInfo**(`data?`): [`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsWhoisAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md) |

#### Returns

[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:77903

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsWhoisAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md).[cost](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md#cost)

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

[IDomainAnalyticsWhoisAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md#status_code)

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

[IDomainAnalyticsWhoisAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DomainAnalyticsWhoisAvailableFiltersTaskInfo`](DomainAnalyticsWhoisAvailableFiltersTaskInfo.md)[]

#### Implementation of

[IDomainAnalyticsWhoisAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md#tasks)

#### Defined in

main.ts:77899

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsWhoisAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsWhoisAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsWhoisAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md).[time](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsWhoisAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md).[version](../interfaces/IDomainAnalyticsWhoisAvailableFiltersResponseInfo.md#version)

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

main.ts:77907

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

main.ts:77929

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:77922
