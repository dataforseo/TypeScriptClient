[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo

# Class: KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#data)
- [id](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#id)
- [path](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#path)
- [result](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:125595

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#data)

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

[IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#result)

#### Defined in

main.ts:125591

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md#time)

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

main.ts:125599

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

main.ts:125621

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:125614
