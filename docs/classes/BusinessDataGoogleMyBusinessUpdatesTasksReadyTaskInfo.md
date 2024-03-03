[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#cost)
- [data](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#data)
- [id](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#id)
- [path](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#path)
- [result](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo**(`data?`): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:192363

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#data)

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

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:22733

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:22748

___

### result

• `Optional` **result**: [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#result)

#### Defined in

main.ts:192359

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:22740

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md#time)

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

main.ts:192367

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

main.ts:192389

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:192382
