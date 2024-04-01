[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo

# Class: KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`**

## Implements

- [`IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#cost)
- [data](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#data)
- [id](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#id)
- [path](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#path)
- [result](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#result)
- [result\_count](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#status_message)
- [time](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo**(`data?`): [`KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:127186

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#cost)

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

[IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md).[data](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#data)

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

[IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md).[id](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md).[path](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`KeywordsDataDataforseoTrendsMergedDataLiveResultInfo`](KeywordsDataDataforseoTrendsMergedDataLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md).[result](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#result)

#### Defined in

main.ts:127182

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#result_count)

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

[IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#status_code)

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

[IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md).[time](../interfaces/IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md#time)

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

main.ts:127190

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

main.ts:127212

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo`](KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:127205
