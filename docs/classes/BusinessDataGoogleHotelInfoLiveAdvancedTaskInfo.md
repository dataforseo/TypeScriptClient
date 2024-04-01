[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo

# Class: BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#data)
- [id](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#id)
- [path](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#path)
- [result](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo**(`data?`): [`BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo`](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo`](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:202638

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#data)

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

[IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`BusinessDataGoogleHotelInfoLiveAdvancedResultInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#result)

#### Defined in

main.ts:202634

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md#time)

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

main.ts:202642

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

main.ts:202664

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo`](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo`](BusinessDataGoogleHotelInfoLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:202657
