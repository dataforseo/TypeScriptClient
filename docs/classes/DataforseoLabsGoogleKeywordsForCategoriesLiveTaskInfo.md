[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo

# Class: DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:84274

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#result)

#### Defined in

main.ts:84270

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md#time)

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

main.ts:84278

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

main.ts:84300

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:84293
