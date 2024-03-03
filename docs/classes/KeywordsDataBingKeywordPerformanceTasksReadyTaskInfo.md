[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo

# Class: KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#data)
- [id](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#id)
- [path](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#path)
- [result](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo`](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo`](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:127161

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:22744

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:22750

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#result)

#### Defined in

main.ts:127157

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:22746

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:22737

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:22742

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

main.ts:127165

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

main.ts:127187

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo`](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo`](KeywordsDataBingKeywordPerformanceTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:127180
