[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo

# Class: KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo**(`data?`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:118351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118351)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:118347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118347)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

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

[main.ts:118355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118355)

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

[main.ts:118377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118377)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:118370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L118370)
