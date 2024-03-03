[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:116074

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#result)

#### Defined in

main.ts:116070

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md#time)

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

main.ts:116078

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

main.ts:116096

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:116089
