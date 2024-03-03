[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo

# Class: BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#data)
- [id](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#id)
- [path](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#path)
- [result](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo**(`data?`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:196329

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#data)

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

[IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#result)

#### Defined in

main.ts:196325

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md#time)

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

main.ts:196333

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

main.ts:196355

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:196348
