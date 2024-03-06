[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo

# Class: DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#cost)
- [status\_code](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#status_message)
- [tasks](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tasks_error)
- [time](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#time)
- [version](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo**(`data?`): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:74567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74567)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#cost)

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

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveTaskInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:74563](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74563)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md).[version](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md#version)

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

[main.ts:74571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74571)

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

[main.ts:74593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74593)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:74586](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L74586)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")