[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:82526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82526)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#result)

#### Defined in

[main.ts:82522](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82522)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md#time)

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

[main.ts:82530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82530)

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

[main.ts:82552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82552)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:82545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82545)
