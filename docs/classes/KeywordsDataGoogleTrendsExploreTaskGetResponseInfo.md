[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreTaskGetResponseInfo

# Class: KeywordsDataGoogleTrendsExploreTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#time)
- [version](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreTaskGetResponseInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:121382](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121382)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#cost)

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

[IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleTrendsExploreTaskGetTaskInfo`](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tasks)

#### Defined in

[main.ts:121378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121378)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md#version)

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

[main.ts:121386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121386)

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

[main.ts:121408](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121408)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:121401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121401)
