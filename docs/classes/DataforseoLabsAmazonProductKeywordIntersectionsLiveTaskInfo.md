[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo

# Class: DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#cost)
- [data](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#data)
- [id](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#id)
- [path](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#path)
- [result](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo**(`data?`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:104361

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#cost)

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

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#data)

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

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#result)

#### Defined in

main.ts:104357

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md#time)

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

main.ts:104365

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

main.ts:104387

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:104380
