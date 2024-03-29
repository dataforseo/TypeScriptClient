[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo

# Class: KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo**(`data?`): [`KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:113932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113932)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:113928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113928)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md#time)

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

[main.ts:113936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113936)

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

[main.ts:113958](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113958)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:113951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113951)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")