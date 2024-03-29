[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo

# Class: KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:116395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116395)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:116391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116391)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md#time)

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

[main.ts:116399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116399)

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

[main.ts:116421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116421)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:116414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L116414)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")