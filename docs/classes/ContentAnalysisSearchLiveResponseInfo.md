[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisSearchLiveResponseInfo

# Class: ContentAnalysisSearchLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentAnalysisSearchLiveResponseInfo`**

## Implements

- [`IContentAnalysisSearchLiveResponseInfo`](../interfaces/IContentAnalysisSearchLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisSearchLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentAnalysisSearchLiveResponseInfo.md#cost)
- [status\_code](ContentAnalysisSearchLiveResponseInfo.md#status_code)
- [status\_message](ContentAnalysisSearchLiveResponseInfo.md#status_message)
- [tasks](ContentAnalysisSearchLiveResponseInfo.md#tasks)
- [tasks\_count](ContentAnalysisSearchLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentAnalysisSearchLiveResponseInfo.md#tasks_error)
- [time](ContentAnalysisSearchLiveResponseInfo.md#time)
- [version](ContentAnalysisSearchLiveResponseInfo.md#version)

### Methods

- [init](ContentAnalysisSearchLiveResponseInfo.md#init)
- [toJSON](ContentAnalysisSearchLiveResponseInfo.md#tojson)
- [fromJS](ContentAnalysisSearchLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisSearchLiveResponseInfo**(`data?`): [`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisSearchLiveResponseInfo`](../interfaces/IContentAnalysisSearchLiveResponseInfo.md) |

#### Returns

[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:156986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156986)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisSearchLiveResponseInfo](../interfaces/IContentAnalysisSearchLiveResponseInfo.md).[cost](../interfaces/IContentAnalysisSearchLiveResponseInfo.md#cost)

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

[IContentAnalysisSearchLiveResponseInfo](../interfaces/IContentAnalysisSearchLiveResponseInfo.md).[status_code](../interfaces/IContentAnalysisSearchLiveResponseInfo.md#status_code)

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

[IContentAnalysisSearchLiveResponseInfo](../interfaces/IContentAnalysisSearchLiveResponseInfo.md).[status_message](../interfaces/IContentAnalysisSearchLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`ContentAnalysisSearchLiveTaskInfo`](ContentAnalysisSearchLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentAnalysisSearchLiveResponseInfo](../interfaces/IContentAnalysisSearchLiveResponseInfo.md).[tasks](../interfaces/IContentAnalysisSearchLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:156982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156982)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentAnalysisSearchLiveResponseInfo](../interfaces/IContentAnalysisSearchLiveResponseInfo.md).[tasks_count](../interfaces/IContentAnalysisSearchLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentAnalysisSearchLiveResponseInfo](../interfaces/IContentAnalysisSearchLiveResponseInfo.md).[tasks_error](../interfaces/IContentAnalysisSearchLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentAnalysisSearchLiveResponseInfo](../interfaces/IContentAnalysisSearchLiveResponseInfo.md).[time](../interfaces/IContentAnalysisSearchLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentAnalysisSearchLiveResponseInfo](../interfaces/IContentAnalysisSearchLiveResponseInfo.md).[version](../interfaces/IContentAnalysisSearchLiveResponseInfo.md#version)

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

[main.ts:156990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L156990)

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

[main.ts:157012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157012)

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisSearchLiveResponseInfo`](ContentAnalysisSearchLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:157005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L157005)
