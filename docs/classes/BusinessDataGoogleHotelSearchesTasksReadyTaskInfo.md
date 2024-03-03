[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesTasksReadyTaskInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#data)
- [id](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#id)
- [path](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#path)
- [result](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesTasksReadyTaskInfo**(`data?`): [`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:193404

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#data)

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

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#result)

#### Defined in

main.ts:193400

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#time)

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

main.ts:193408

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

main.ts:193430

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:193423
