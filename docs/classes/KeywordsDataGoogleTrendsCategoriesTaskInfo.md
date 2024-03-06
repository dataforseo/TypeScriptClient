[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsCategoriesTaskInfo

# Class: KeywordsDataGoogleTrendsCategoriesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleTrendsCategoriesTaskInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsCategoriesTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#cost)
- [data](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#data)
- [id](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#id)
- [path](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#path)
- [result](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#status_message)
- [time](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsCategoriesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsCategoriesTaskInfo**(`data?`): [`KeywordsDataGoogleTrendsCategoriesTaskInfo`](KeywordsDataGoogleTrendsCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsCategoriesTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsCategoriesTaskInfo`](KeywordsDataGoogleTrendsCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:119681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119681)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsCategoriesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md#cost)

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

[IKeywordsDataGoogleTrendsCategoriesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md#data)

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

[IKeywordsDataGoogleTrendsCategoriesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleTrendsCategoriesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataGoogleTrendsCategoriesResultInfo`](KeywordsDataGoogleTrendsCategoriesResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleTrendsCategoriesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md#result)

#### Defined in

[main.ts:119677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119677)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleTrendsCategoriesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md#result_count)

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

[IKeywordsDataGoogleTrendsCategoriesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsCategoriesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsCategoriesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsCategoriesTaskInfo.md#time)

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

[main.ts:119685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119685)

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

[main.ts:119707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119707)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsCategoriesTaskInfo`](KeywordsDataGoogleTrendsCategoriesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsCategoriesTaskInfo`](KeywordsDataGoogleTrendsCategoriesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:119700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119700)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")