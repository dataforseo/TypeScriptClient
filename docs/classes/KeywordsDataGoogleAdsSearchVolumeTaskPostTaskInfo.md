[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo**(`data?`): [`KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:113471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113471)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:113467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113467)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md#time)

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

[main.ts:113475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113475)

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

[main.ts:113493](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113493)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:113486](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113486)
