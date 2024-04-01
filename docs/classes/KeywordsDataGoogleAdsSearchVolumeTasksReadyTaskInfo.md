[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo**(`data?`): [`KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:116033

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:23121

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:23127

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#result)

#### Defined in

main.ts:116029

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:23123

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:23114

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:23119

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

main.ts:116037

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

main.ts:116059

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:116052
