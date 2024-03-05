[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo**(`data?`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:118952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118952)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:118948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118948)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#version)

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

[main.ts:118956](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118956)

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

[main.ts:118978](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118978)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:118971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118971)
