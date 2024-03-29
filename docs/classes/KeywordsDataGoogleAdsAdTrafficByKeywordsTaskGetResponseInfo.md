[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo**(`data?`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:118406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118406)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tasks)

#### Defined in

[main.ts:118402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118402)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md#version)

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

[main.ts:118410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118410)

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

[main.ts:118432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118432)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:118425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118425)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")