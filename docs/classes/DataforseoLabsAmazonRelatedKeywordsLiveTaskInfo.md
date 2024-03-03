[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo

# Class: DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo`**

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#cost)
- [data](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#data)
- [id](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#id)
- [path](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#path)
- [result](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#status_message)
- [time](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo**(`data?`): [`DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:99612

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#cost)

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

[IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#data)

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

[IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#result)

#### Defined in

main.ts:99608

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#result_count)

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

[IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#status_code)

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

[IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md#time)

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

main.ts:99616

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

main.ts:99638

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:99631
