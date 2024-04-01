[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo

# Class: DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:83447

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#result)

#### Defined in

main.ts:83443

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md#time)

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

main.ts:83451

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

main.ts:83473

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:83466
