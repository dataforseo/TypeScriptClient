[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisCategoryTrendsLiveResponseInfo

# Class: ContentAnalysisCategoryTrendsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`ContentAnalysisCategoryTrendsLiveResponseInfo`**

## Implements

- [`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisCategoryTrendsLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentAnalysisCategoryTrendsLiveResponseInfo.md#cost)
- [status\_code](ContentAnalysisCategoryTrendsLiveResponseInfo.md#status_code)
- [status\_message](ContentAnalysisCategoryTrendsLiveResponseInfo.md#status_message)
- [tasks](ContentAnalysisCategoryTrendsLiveResponseInfo.md#tasks)
- [tasks\_count](ContentAnalysisCategoryTrendsLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentAnalysisCategoryTrendsLiveResponseInfo.md#tasks_error)
- [time](ContentAnalysisCategoryTrendsLiveResponseInfo.md#time)
- [version](ContentAnalysisCategoryTrendsLiveResponseInfo.md#version)

### Methods

- [init](ContentAnalysisCategoryTrendsLiveResponseInfo.md#init)
- [toJSON](ContentAnalysisCategoryTrendsLiveResponseInfo.md#tojson)
- [fromJS](ContentAnalysisCategoryTrendsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisCategoryTrendsLiveResponseInfo**(`data?`): [`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisCategoryTrendsLiveResponseInfo`](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md) |

#### Returns

[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:159694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159694)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResponseInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[cost](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#cost)

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

[IContentAnalysisCategoryTrendsLiveResponseInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[status_code](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#status_code)

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

[IContentAnalysisCategoryTrendsLiveResponseInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[status_message](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`ContentAnalysisCategoryTrendsLiveTaskInfo`](ContentAnalysisCategoryTrendsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResponseInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[tasks](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:159690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159690)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResponseInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[tasks_count](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResponseInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[tasks_error](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResponseInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[time](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentAnalysisCategoryTrendsLiveResponseInfo](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md).[version](../interfaces/IContentAnalysisCategoryTrendsLiveResponseInfo.md#version)

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

[main.ts:159698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159698)

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

[main.ts:159720](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159720)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisCategoryTrendsLiveResponseInfo`](ContentAnalysisCategoryTrendsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:159713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159713)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")