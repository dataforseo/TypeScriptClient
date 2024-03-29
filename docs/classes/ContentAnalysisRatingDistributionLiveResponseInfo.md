[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisRatingDistributionLiveResponseInfo

# Class: ContentAnalysisRatingDistributionLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`ContentAnalysisRatingDistributionLiveResponseInfo`**

## Implements

- [`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisRatingDistributionLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentAnalysisRatingDistributionLiveResponseInfo.md#cost)
- [status\_code](ContentAnalysisRatingDistributionLiveResponseInfo.md#status_code)
- [status\_message](ContentAnalysisRatingDistributionLiveResponseInfo.md#status_message)
- [tasks](ContentAnalysisRatingDistributionLiveResponseInfo.md#tasks)
- [tasks\_count](ContentAnalysisRatingDistributionLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentAnalysisRatingDistributionLiveResponseInfo.md#tasks_error)
- [time](ContentAnalysisRatingDistributionLiveResponseInfo.md#time)
- [version](ContentAnalysisRatingDistributionLiveResponseInfo.md#version)

### Methods

- [init](ContentAnalysisRatingDistributionLiveResponseInfo.md#init)
- [toJSON](ContentAnalysisRatingDistributionLiveResponseInfo.md#tojson)
- [fromJS](ContentAnalysisRatingDistributionLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisRatingDistributionLiveResponseInfo**(`data?`): [`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisRatingDistributionLiveResponseInfo`](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md) |

#### Returns

[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:158534](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158534)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisRatingDistributionLiveResponseInfo](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[cost](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#cost)

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

[IContentAnalysisRatingDistributionLiveResponseInfo](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[status_code](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#status_code)

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

[IContentAnalysisRatingDistributionLiveResponseInfo](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[status_message](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`ContentAnalysisRatingDistributionLiveTaskInfo`](ContentAnalysisRatingDistributionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentAnalysisRatingDistributionLiveResponseInfo](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[tasks](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:158530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158530)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentAnalysisRatingDistributionLiveResponseInfo](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[tasks_count](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentAnalysisRatingDistributionLiveResponseInfo](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[tasks_error](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentAnalysisRatingDistributionLiveResponseInfo](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[time](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentAnalysisRatingDistributionLiveResponseInfo](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md).[version](../interfaces/IContentAnalysisRatingDistributionLiveResponseInfo.md#version)

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

[main.ts:158538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158538)

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

[main.ts:158560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158560)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisRatingDistributionLiveResponseInfo`](ContentAnalysisRatingDistributionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:158553](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158553)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")