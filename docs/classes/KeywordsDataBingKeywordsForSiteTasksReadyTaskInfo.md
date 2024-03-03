[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo

# Class: KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#data)
- [id](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#id)
- [path](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#path)
- [result](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo**(`data?`): [`KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:124239

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#data)

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

[IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#result)

#### Defined in

main.ts:124235

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md#time)

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

main.ts:124243

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

main.ts:124265

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo`](KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:124258
