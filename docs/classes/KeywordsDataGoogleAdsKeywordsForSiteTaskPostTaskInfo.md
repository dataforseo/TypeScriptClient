[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo

# Class: KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo`**

## Implements

- [`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#cost)
- [data](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#data)
- [id](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#id)
- [path](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#path)
- [result](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#status_message)
- [time](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo**(`data?`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo`](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:114607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114607)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#cost)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#data)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#path)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:114603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114603)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#result_count)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#status_code)

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

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md#time)

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

[main.ts:114611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114611)

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

[main.ts:114629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114629)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:114622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L114622)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")