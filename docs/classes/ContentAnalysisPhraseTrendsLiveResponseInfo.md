[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisPhraseTrendsLiveResponseInfo

# Class: ContentAnalysisPhraseTrendsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentAnalysisPhraseTrendsLiveResponseInfo`**

## Implements

- [`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisPhraseTrendsLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentAnalysisPhraseTrendsLiveResponseInfo.md#cost)
- [status\_code](ContentAnalysisPhraseTrendsLiveResponseInfo.md#status_code)
- [status\_message](ContentAnalysisPhraseTrendsLiveResponseInfo.md#status_message)
- [tasks](ContentAnalysisPhraseTrendsLiveResponseInfo.md#tasks)
- [tasks\_count](ContentAnalysisPhraseTrendsLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentAnalysisPhraseTrendsLiveResponseInfo.md#tasks_error)
- [time](ContentAnalysisPhraseTrendsLiveResponseInfo.md#time)
- [version](ContentAnalysisPhraseTrendsLiveResponseInfo.md#version)

### Methods

- [init](ContentAnalysisPhraseTrendsLiveResponseInfo.md#init)
- [toJSON](ContentAnalysisPhraseTrendsLiveResponseInfo.md#tojson)
- [fromJS](ContentAnalysisPhraseTrendsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisPhraseTrendsLiveResponseInfo**(`data?`): [`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisPhraseTrendsLiveResponseInfo`](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md) |

#### Returns

[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:159138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159138)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResponseInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[cost](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#cost)

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

[IContentAnalysisPhraseTrendsLiveResponseInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[status_code](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#status_code)

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

[IContentAnalysisPhraseTrendsLiveResponseInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[status_message](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`ContentAnalysisPhraseTrendsLiveTaskInfo`](ContentAnalysisPhraseTrendsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResponseInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[tasks](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:159134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159134)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResponseInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[tasks_count](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResponseInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[tasks_error](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResponseInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[time](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentAnalysisPhraseTrendsLiveResponseInfo](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md).[version](../interfaces/IContentAnalysisPhraseTrendsLiveResponseInfo.md#version)

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

[main.ts:159142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159142)

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

[main.ts:159164](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159164)

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisPhraseTrendsLiveResponseInfo`](ContentAnalysisPhraseTrendsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:159157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L159157)
