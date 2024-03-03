[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo

# Class: DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo`**

## Implements

- [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#cost)
- [data](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#data)
- [id](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#id)
- [path](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#path)
- [result](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#result)
- [result\_count](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#result_count)
- [status\_code](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#status_message)
- [time](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#time)

### Methods

- [init](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo**(`data?`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:85016

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md).[cost](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#cost)

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

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md).[data](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#data)

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

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md).[id](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md).[path](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveResultInfo.md)[]

array of results

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md).[result](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#result)

#### Defined in

main.ts:85012

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md).[result_count](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#result_count)

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

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#status_code)

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

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md).[time](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md#time)

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

main.ts:85020

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

main.ts:85042

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo`](DataforseoLabsGoogleDomainMetricsByCategoriesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:85035
