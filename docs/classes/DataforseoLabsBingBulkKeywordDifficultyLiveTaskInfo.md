[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo

# Class: DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo`**

## Implements

- [`IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#cost)
- [data](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#data)
- [id](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#id)
- [path](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#path)
- [result](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#status_message)
- [time](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo**(`data?`): [`DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo`](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:104713

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#cost)

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

[IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#data)

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

[IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#result)

#### Defined in

main.ts:104709

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#result_count)

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

[IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#status_code)

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

[IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md#time)

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

main.ts:104717

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

main.ts:104739

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:104732
