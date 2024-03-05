[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsLocationsTaskInfo

# Class: KeywordsDataGoogleAdsLocationsTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsLocationsTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsLocationsTaskInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsLocationsTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsLocationsTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsLocationsTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsLocationsTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsLocationsTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsLocationsTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsLocationsTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsLocationsTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsLocationsTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsLocationsTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsLocationsTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsLocationsTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsLocationsTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsLocationsTaskInfo**(`data?`): [`KeywordsDataGoogleAdsLocationsTaskInfo`](KeywordsDataGoogleAdsLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsLocationsTaskInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsLocationsTaskInfo`](KeywordsDataGoogleAdsLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:113194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113194)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsLocationsTaskInfo](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsLocationsTaskInfo](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsLocationsTaskInfo](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsLocationsTaskInfo](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`KeywordsDataGoogleAdsLocationsResultInfo`](KeywordsDataGoogleAdsLocationsResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsLocationsTaskInfo](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md#result)

#### Defined in

[main.ts:113190](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113190)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsLocationsTaskInfo](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsLocationsTaskInfo](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsLocationsTaskInfo](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsLocationsTaskInfo](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsLocationsTaskInfo.md#time)

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

[main.ts:113198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113198)

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

[main.ts:113220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113220)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsTaskInfo`](KeywordsDataGoogleAdsLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsLocationsTaskInfo`](KeywordsDataGoogleAdsLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:113213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113213)
