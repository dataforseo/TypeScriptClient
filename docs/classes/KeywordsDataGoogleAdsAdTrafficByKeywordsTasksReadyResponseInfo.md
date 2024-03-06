[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo**(`data?`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:118136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118136)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:118132](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118132)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md#version)

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

[main.ts:118140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118140)

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

[main.ts:118162](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118162)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:118155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118155)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")