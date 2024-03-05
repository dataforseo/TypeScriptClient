[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceLiveTaskInfo

# Class: KeywordsDataBingKeywordPerformanceLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataBingKeywordPerformanceLiveTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceLiveTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#data)
- [id](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#id)
- [path](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#path)
- [result](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceLiveTaskInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceLiveTaskInfo`](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceLiveTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveTaskInfo`](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:127835](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127835)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordPerformanceLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md#data)

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

[IKeywordsDataBingKeywordPerformanceLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`KeywordsDataBingKeywordPerformanceLiveResultInfo`](KeywordsDataBingKeywordPerformanceLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md#result)

#### Defined in

[main.ts:127831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127831)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordPerformanceLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordPerformanceLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLiveTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceLiveTaskInfo.md#time)

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

[main.ts:127839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127839)

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

[main.ts:127861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127861)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceLiveTaskInfo`](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceLiveTaskInfo`](KeywordsDataBingKeywordPerformanceLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:127854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L127854)
