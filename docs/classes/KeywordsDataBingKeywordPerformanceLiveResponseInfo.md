[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceLiveResponseInfo

# Class: KeywordsDataBingKeywordPerformanceLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataBingKeywordPerformanceLiveResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#time)
- [version](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceLiveResponseInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceLiveResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:127890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127890)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordPerformanceLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordPerformanceLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordPerformanceLiveTaskInfo`](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:127886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127886)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordPerformanceLiveResponseInfo.md#version)

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

[main.ts:127894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127894)

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

[main.ts:127916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127916)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:127909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127909)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")