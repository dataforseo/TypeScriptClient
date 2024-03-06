[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceTaskPostTaskInfo

# Class: KeywordsDataBingKeywordPerformanceTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingKeywordPerformanceTaskPostTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#data)
- [id](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#id)
- [path](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#path)
- [result](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceTaskPostTaskInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceTaskPostTaskInfo`](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostTaskInfo`](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:126832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126832)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#data)

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

[IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#path)

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

[IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:126828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126828)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md#time)

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

[main.ts:126836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126836)

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

[main.ts:126854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126854)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskPostTaskInfo`](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskPostTaskInfo`](KeywordsDataBingKeywordPerformanceTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:126847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126847)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")