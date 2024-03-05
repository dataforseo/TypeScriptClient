[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:115766](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115766)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#result)

#### Defined in

[main.ts:115762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115762)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md#time)

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

[main.ts:115770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115770)

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

[main.ts:115792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115792)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:115785](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115785)
