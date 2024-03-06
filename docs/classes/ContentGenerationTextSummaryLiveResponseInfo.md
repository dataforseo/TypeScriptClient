[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationTextSummaryLiveResponseInfo

# Class: ContentGenerationTextSummaryLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`ContentGenerationTextSummaryLiveResponseInfo`**

## Implements

- [`IContentGenerationTextSummaryLiveResponseInfo`](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationTextSummaryLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentGenerationTextSummaryLiveResponseInfo.md#cost)
- [status\_code](ContentGenerationTextSummaryLiveResponseInfo.md#status_code)
- [status\_message](ContentGenerationTextSummaryLiveResponseInfo.md#status_message)
- [tasks](ContentGenerationTextSummaryLiveResponseInfo.md#tasks)
- [tasks\_count](ContentGenerationTextSummaryLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentGenerationTextSummaryLiveResponseInfo.md#tasks_error)
- [time](ContentGenerationTextSummaryLiveResponseInfo.md#time)
- [version](ContentGenerationTextSummaryLiveResponseInfo.md#version)

### Methods

- [init](ContentGenerationTextSummaryLiveResponseInfo.md#init)
- [toJSON](ContentGenerationTextSummaryLiveResponseInfo.md#tojson)
- [fromJS](ContentGenerationTextSummaryLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationTextSummaryLiveResponseInfo**(`data?`): [`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationTextSummaryLiveResponseInfo`](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md) |

#### Returns

[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:162436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162436)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationTextSummaryLiveResponseInfo](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md).[cost](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md#cost)

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

[IContentGenerationTextSummaryLiveResponseInfo](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md).[status_code](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md#status_code)

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

[IContentGenerationTextSummaryLiveResponseInfo](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md).[status_message](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`ContentGenerationTextSummaryLiveTaskInfo`](ContentGenerationTextSummaryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentGenerationTextSummaryLiveResponseInfo](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md).[tasks](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:162432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162432)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentGenerationTextSummaryLiveResponseInfo](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md).[tasks_count](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentGenerationTextSummaryLiveResponseInfo](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md).[tasks_error](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentGenerationTextSummaryLiveResponseInfo](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md).[time](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentGenerationTextSummaryLiveResponseInfo](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md).[version](../interfaces/IContentGenerationTextSummaryLiveResponseInfo.md#version)

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

[main.ts:162440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162440)

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

[main.ts:162462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162462)

___


### fromJS

▸ **fromJS**(`data`): [`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationTextSummaryLiveResponseInfo`](ContentGenerationTextSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:162455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162455)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")