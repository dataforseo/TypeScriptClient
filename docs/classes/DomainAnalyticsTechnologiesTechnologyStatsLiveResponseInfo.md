[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo

# Class: DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#cost)
- [status\_code](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#status_message)
- [tasks](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tasks_error)
- [time](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#time)
- [version](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo**(`data?`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:73865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73865)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#cost)

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

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:73861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73861)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md).[version](../interfaces/IDomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md#version)

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

[main.ts:73869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73869)

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

[main.ts:73891](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73891)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:73884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L73884)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")