[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:116450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116450)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks)

#### Defined in

[main.ts:116446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116446)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md#version)

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

[main.ts:116454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116454)

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

[main.ts:116476](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116476)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:116469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116469)
