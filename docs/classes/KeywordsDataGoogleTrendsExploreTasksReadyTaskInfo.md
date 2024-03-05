[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo

# Class: KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#cost)
- [data](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#data)
- [id](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#id)
- [path](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#path)
- [result](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#status_message)
- [time](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo`](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo`](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:120281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120281)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#cost)

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

[IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#data)

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

[IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:120277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120277)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#result_count)

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

[IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md#time)

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

[main.ts:120285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120285)

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

[main.ts:120307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120307)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo`](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo`](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:120300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L120300)
