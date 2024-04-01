[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsExploreLiveTaskInfo

# Class: KeywordsDataDataforseoTrendsExploreLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataDataforseoTrendsExploreLiveTaskInfo`**

## Implements

- [`IKeywordsDataDataforseoTrendsExploreLiveTaskInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#cost)
- [data](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#data)
- [id](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#id)
- [path](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#path)
- [result](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#result)
- [result\_count](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#status_message)
- [time](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsExploreLiveTaskInfo**(`data?`): [`KeywordsDataDataforseoTrendsExploreLiveTaskInfo`](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsExploreLiveTaskInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveTaskInfo`](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:125116

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:23121

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md).[data](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:23127

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md).[id](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md).[path](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`KeywordsDataDataforseoTrendsExploreLiveResultInfo`](KeywordsDataDataforseoTrendsExploreLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md).[result](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#result)

#### Defined in

main.ts:125112

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:23123

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:23114

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md).[time](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:23119

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

main.ts:125120

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

main.ts:125142

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsExploreLiveTaskInfo`](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveTaskInfo`](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:125135
