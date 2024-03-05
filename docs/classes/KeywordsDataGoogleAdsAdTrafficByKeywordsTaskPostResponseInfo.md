[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo**(`data?`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:117944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117944)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:117940](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117940)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md#version)

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

[main.ts:117948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117948)

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

[main.ts:117970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117970)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:117963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L117963)
