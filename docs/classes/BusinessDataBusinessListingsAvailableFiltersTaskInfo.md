[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsAvailableFiltersTaskInfo

# Class: BusinessDataBusinessListingsAvailableFiltersTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataBusinessListingsAvailableFiltersTaskInfo`**

## Implements

- [`IBusinessDataBusinessListingsAvailableFiltersTaskInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#cost)
- [data](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#data)
- [id](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#id)
- [path](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#path)
- [result](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#result)
- [result\_count](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#result_count)
- [status\_code](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#status_code)
- [status\_message](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#status_message)
- [time](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#time)

### Methods

- [init](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#init)
- [toJSON](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsAvailableFiltersTaskInfo**(`data?`): [`BusinessDataBusinessListingsAvailableFiltersTaskInfo`](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsAvailableFiltersTaskInfo`](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md) |

#### Returns

[`BusinessDataBusinessListingsAvailableFiltersTaskInfo`](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:193704

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataBusinessListingsAvailableFiltersTaskInfo](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md).[cost](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md#cost)

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

[IBusinessDataBusinessListingsAvailableFiltersTaskInfo](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md).[data](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md#data)

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

[IBusinessDataBusinessListingsAvailableFiltersTaskInfo](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md).[id](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataBusinessListingsAvailableFiltersTaskInfo](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md).[path](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`BusinessDataBusinessListingsAvailableFiltersResultInfo`](BusinessDataBusinessListingsAvailableFiltersResultInfo.md)[]

#### Implementation of

[IBusinessDataBusinessListingsAvailableFiltersTaskInfo](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md).[result](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md#result)

#### Defined in

main.ts:193700

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataBusinessListingsAvailableFiltersTaskInfo](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md).[result_count](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md#result_count)

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

[IBusinessDataBusinessListingsAvailableFiltersTaskInfo](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md).[status_code](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md#status_code)

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

[IBusinessDataBusinessListingsAvailableFiltersTaskInfo](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md).[status_message](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataBusinessListingsAvailableFiltersTaskInfo](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md).[time](../interfaces/IBusinessDataBusinessListingsAvailableFiltersTaskInfo.md#time)

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

main.ts:193708

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

main.ts:193730

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsAvailableFiltersTaskInfo`](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsAvailableFiltersTaskInfo`](BusinessDataBusinessListingsAvailableFiltersTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:193723
