[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceTaskGetTaskInfo

# Class: KeywordsDataBingKeywordPerformanceTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataBingKeywordPerformanceTaskGetTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#data)
- [id](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#id)
- [path](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#path)
- [result](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceTaskGetTaskInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceTaskGetTaskInfo`](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetTaskInfo`](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:127439](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127439)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#data)

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

[IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataBingKeywordPerformanceTaskGetResultInfo`](KeywordsDataBingKeywordPerformanceTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:127435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127435)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md#time)

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

[main.ts:127443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127443)

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

[main.ts:127465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127465)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTaskGetTaskInfo`](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceTaskGetTaskInfo`](KeywordsDataBingKeywordPerformanceTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:127458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127458)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")