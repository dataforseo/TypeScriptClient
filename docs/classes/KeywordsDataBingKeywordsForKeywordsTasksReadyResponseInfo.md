[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo

# Class: KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#time)
- [version](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:125506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125506)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:125502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125502)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md#version)

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

[main.ts:125510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125510)

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

[main.ts:125532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125532)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:125525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125525)
