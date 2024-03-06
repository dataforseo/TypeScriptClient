[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:114655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114655)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:114651](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114651)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md#version)

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

[main.ts:114659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114659)

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

[main.ts:114681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114681)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:114674](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114674)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")