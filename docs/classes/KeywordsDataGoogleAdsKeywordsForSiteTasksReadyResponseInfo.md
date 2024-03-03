[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#time)
- [version](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:114991

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:114987

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:114995

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

main.ts:115017

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:115010
