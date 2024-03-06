[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo

# Class: DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#cost)
- [status\_code](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#status_message)
- [tasks](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tasks_error)
- [time](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#time)
- [version](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:73441](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73441)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#cost)

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

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:73437](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73437)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md).[version](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md#version)

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

[main.ts:73445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73445)

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

[main.ts:73467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73467)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:73460](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73460)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")