[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo

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

main.ts:121329

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23029

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

main.ts:23022

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

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:121325

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:23019

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

main.ts:121333

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

main.ts:121355

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

main.ts:121348
