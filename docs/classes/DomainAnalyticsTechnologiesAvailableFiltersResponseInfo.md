[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesAvailableFiltersResponseInfo

# Class: DomainAnalyticsTechnologiesAvailableFiltersResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#cost)
- [status\_code](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#status_message)
- [tasks](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tasks_error)
- [time](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#time)
- [version](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesAvailableFiltersResponseInfo**(`data?`): [`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:71718](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71718)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DomainAnalyticsTechnologiesAvailableFiltersTaskInfo`](DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.md)[]

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tasks)

#### Defined in

[main.ts:71714](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71714)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md).[version](../interfaces/IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

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

[main.ts:71722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71722)

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

[main.ts:71744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71744)

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:71737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71737)
