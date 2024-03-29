[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo

# Class: KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#time)
- [version](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:124150](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124150)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:124146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124146)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md#version)

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

[main.ts:124154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124154)

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

[main.ts:124176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124176)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:124169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124169)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")