[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:115242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115242)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:115238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115238)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md#time)

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

[main.ts:115246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115246)

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

[main.ts:115268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115268)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:115261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L115261)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")