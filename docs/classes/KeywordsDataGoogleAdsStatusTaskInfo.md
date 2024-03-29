[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsStatusTaskInfo

# Class: KeywordsDataGoogleAdsStatusTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsStatusTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsStatusTaskInfo`](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsStatusTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsStatusTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsStatusTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsStatusTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsStatusTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsStatusTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsStatusTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsStatusTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsStatusTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsStatusTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsStatusTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsStatusTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsStatusTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsStatusTaskInfo**(`data?`): [`KeywordsDataGoogleAdsStatusTaskInfo`](KeywordsDataGoogleAdsStatusTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsStatusTaskInfo`](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsStatusTaskInfo`](KeywordsDataGoogleAdsStatusTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:112994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112994)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsStatusTaskInfo](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsStatusTaskInfo](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsStatusTaskInfo](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsStatusTaskInfo](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataGoogleAdsStatusResultInfo`](KeywordsDataGoogleAdsStatusResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsStatusTaskInfo](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md#result)

#### Defined in

[main.ts:112990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112990)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsStatusTaskInfo](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsStatusTaskInfo](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsStatusTaskInfo](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsStatusTaskInfo](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsStatusTaskInfo.md#time)

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

[main.ts:112998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112998)

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

[main.ts:113020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113020)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsStatusTaskInfo`](KeywordsDataGoogleAdsStatusTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsStatusTaskInfo`](KeywordsDataGoogleAdsStatusTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:113013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L113013)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")