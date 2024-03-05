[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteTaskGetResponseInfo

# Class: KeywordsDataBingKeywordsForSiteTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#time)
- [version](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteTaskGetResponseInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:124414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124414)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordsForSiteTaskGetTaskInfo`](KeywordsDataBingKeywordsForSiteTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tasks)

#### Defined in

[main.ts:124410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124410)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md#version)

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

[main.ts:124418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124418)

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

[main.ts:124440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124440)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:124433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L124433)
