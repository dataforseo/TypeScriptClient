[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo

# Class: DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`**

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#cost)
- [status\_code](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#status_message)
- [tasks](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tasks_error)
- [time](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#time)
- [version](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#init)
- [toJSON](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo**(`data?`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md) |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:75009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75009)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[cost](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#cost)

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

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#status_code)

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

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:75005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75005)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[time](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md).[version](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md#version)

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

[main.ts:75013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75013)

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

[main.ts:75035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75035)

___


### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:75028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L75028)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")