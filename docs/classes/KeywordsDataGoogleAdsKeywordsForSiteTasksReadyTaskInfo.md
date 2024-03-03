[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:114936

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:22744

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:22750

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#result)

#### Defined in

main.ts:114932

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:22746

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:22737

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:22742

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

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

main.ts:114940

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

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

main.ts:114962

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:114955
