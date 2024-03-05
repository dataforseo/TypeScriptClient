[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:115821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115821)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:115817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115817)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md#version)

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

[main.ts:115825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115825)

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

[main.ts:115847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115847)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:115840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115840)
