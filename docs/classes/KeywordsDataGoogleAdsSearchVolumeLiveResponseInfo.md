[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo

# Class: KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo**(`data?`): [`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:114263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114263)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#cost)

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

[IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#status_code)

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

[IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo`](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:114259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114259)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md#version)

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

[main.ts:114267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114267)

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

[main.ts:114289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114289)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:114282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114282)
