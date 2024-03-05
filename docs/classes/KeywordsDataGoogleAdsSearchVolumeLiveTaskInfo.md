[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo

# Class: KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo**(`data?`): [`KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo`](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo`](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:114208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114208)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`KeywordsDataGoogleAdsSearchVolumeLiveResultInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#result)

#### Defined in

[main.ts:114204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114204)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md#time)

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

[main.ts:114212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114212)

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

[main.ts:114234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114234)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo`](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo`](KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:114227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114227)
