[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsLanguagesTaskInfo

# Class: KeywordsDataGoogleTrendsLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleTrendsLanguagesTaskInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsLanguagesTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#cost)
- [data](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#data)
- [id](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#id)
- [path](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#path)
- [result](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#status_message)
- [time](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsLanguagesTaskInfo**(`data?`): [`KeywordsDataGoogleTrendsLanguagesTaskInfo`](KeywordsDataGoogleTrendsLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsLanguagesTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsLanguagesTaskInfo`](KeywordsDataGoogleTrendsLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:119495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119495)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md#cost)

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

[IKeywordsDataGoogleTrendsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md#data)

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

[IKeywordsDataGoogleTrendsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataGoogleTrendsLanguagesResultInfo`](KeywordsDataGoogleTrendsLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:119491](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119491)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md#result_count)

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

[IKeywordsDataGoogleTrendsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsLanguagesTaskInfo.md#time)

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

[main.ts:119499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119499)

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

[main.ts:119521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119521)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsLanguagesTaskInfo`](KeywordsDataGoogleTrendsLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsLanguagesTaskInfo`](KeywordsDataGoogleTrendsLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:119514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119514)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")