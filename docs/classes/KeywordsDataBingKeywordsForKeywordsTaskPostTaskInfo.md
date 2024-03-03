[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#data)
- [id](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#id)
- [path](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#path)
- [result](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:125410

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#data)

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

[IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#result)

#### Defined in

main.ts:125406

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md#time)

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

main.ts:125414

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

main.ts:125432

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:125425
