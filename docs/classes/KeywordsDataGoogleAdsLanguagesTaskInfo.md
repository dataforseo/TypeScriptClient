[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsLanguagesTaskInfo

# Class: KeywordsDataGoogleAdsLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsLanguagesTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsLanguagesTaskInfo`](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsLanguagesTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsLanguagesTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsLanguagesTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsLanguagesTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsLanguagesTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsLanguagesTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsLanguagesTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsLanguagesTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsLanguagesTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsLanguagesTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsLanguagesTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsLanguagesTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsLanguagesTaskInfo**(`data?`): [`KeywordsDataGoogleAdsLanguagesTaskInfo`](KeywordsDataGoogleAdsLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsLanguagesTaskInfo`](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsLanguagesTaskInfo`](KeywordsDataGoogleAdsLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:113360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113360)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`KeywordsDataGoogleAdsLanguagesResultInfo`](KeywordsDataGoogleAdsLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:113356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113356)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsLanguagesTaskInfo.md#time)

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

[main.ts:113364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113364)

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

[main.ts:113386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113386)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsLanguagesTaskInfo`](KeywordsDataGoogleAdsLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsLanguagesTaskInfo`](KeywordsDataGoogleAdsLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:113379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113379)
