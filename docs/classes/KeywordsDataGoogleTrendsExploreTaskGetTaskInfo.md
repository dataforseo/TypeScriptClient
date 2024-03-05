[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreTaskGetTaskInfo

# Class: KeywordsDataGoogleTrendsExploreTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleTrendsExploreTaskGetTaskInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#cost)
- [data](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#data)
- [id](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#id)
- [path](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#path)
- [result](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#status_message)
- [time](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreTaskGetTaskInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreTaskGetTaskInfo`](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetTaskInfo`](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:121327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121327)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#cost)

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

[IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#data)

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

[IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`KeywordsDataGoogleTrendsExploreTaskGetResultInfo`](KeywordsDataGoogleTrendsExploreTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:121323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121323)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#result_count)

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

[IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md#time)

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

[main.ts:121331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121331)

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

[main.ts:121353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121353)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTaskGetTaskInfo`](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreTaskGetTaskInfo`](KeywordsDataGoogleTrendsExploreTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:121346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121346)
