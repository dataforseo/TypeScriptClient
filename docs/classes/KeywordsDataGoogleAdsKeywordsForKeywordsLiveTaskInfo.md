[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:119838

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#result)

#### Defined in

main.ts:119834

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md#time)

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

main.ts:119842

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

main.ts:119864

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:119857
