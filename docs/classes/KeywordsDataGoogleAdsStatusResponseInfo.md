[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsStatusResponseInfo

# Class: KeywordsDataGoogleAdsStatusResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsStatusResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsStatusResponseInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsStatusResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsStatusResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsStatusResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsStatusResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsStatusResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsStatusResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsStatusResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsStatusResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsStatusResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsStatusResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsStatusResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsStatusResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsStatusResponseInfo**(`data?`): [`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsStatusResponseInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:113049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113049)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsStatusResponseInfo](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsStatusResponseInfo](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsStatusResponseInfo](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsStatusTaskInfo`](KeywordsDataGoogleAdsStatusTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsStatusResponseInfo](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md#tasks)

#### Defined in

[main.ts:113045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113045)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsStatusResponseInfo](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsStatusResponseInfo](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsStatusResponseInfo](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsStatusResponseInfo](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsStatusResponseInfo.md#version)

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

[main.ts:113053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113053)

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

[main.ts:113075](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113075)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:113068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113068)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")