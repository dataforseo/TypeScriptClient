[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataYelpLanguagesResponseInfo

# Class: BusinessDataYelpLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataYelpLanguagesResponseInfo`**

## Implements

- [`IBusinessDataYelpLanguagesResponseInfo`](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpLanguagesResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpLanguagesResponseInfo.md#cost)
- [status\_code](BusinessDataYelpLanguagesResponseInfo.md#status_code)
- [status\_message](BusinessDataYelpLanguagesResponseInfo.md#status_message)
- [tasks](BusinessDataYelpLanguagesResponseInfo.md#tasks)
- [tasks\_count](BusinessDataYelpLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataYelpLanguagesResponseInfo.md#tasks_error)
- [time](BusinessDataYelpLanguagesResponseInfo.md#time)
- [version](BusinessDataYelpLanguagesResponseInfo.md#version)

### Methods

- [init](BusinessDataYelpLanguagesResponseInfo.md#init)
- [toJSON](BusinessDataYelpLanguagesResponseInfo.md#tojson)
- [fromJS](BusinessDataYelpLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpLanguagesResponseInfo**(`data?`): [`BusinessDataYelpLanguagesResponseInfo`](BusinessDataYelpLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpLanguagesResponseInfo`](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md) |

#### Returns

[`BusinessDataYelpLanguagesResponseInfo`](BusinessDataYelpLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:203405

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpLanguagesResponseInfo](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md).[cost](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IBusinessDataYelpLanguagesResponseInfo](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md).[status_code](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IBusinessDataYelpLanguagesResponseInfo](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md).[status_message](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`BusinessDataYelpLanguagesTaskInfo`](BusinessDataYelpLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataYelpLanguagesResponseInfo](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md).[tasks](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:203401

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataYelpLanguagesResponseInfo](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md).[tasks_count](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataYelpLanguagesResponseInfo](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md).[tasks_error](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataYelpLanguagesResponseInfo](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md).[time](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataYelpLanguagesResponseInfo](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md).[version](../interfaces/IBusinessDataYelpLanguagesResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

[BaseResponseInfo](BaseResponseInfo.md).[init](BaseResponseInfo.md#init)

#### Defined in

main.ts:203409

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

[BaseResponseInfo](BaseResponseInfo.md).[toJSON](BaseResponseInfo.md#tojson)

#### Defined in

main.ts:203431

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpLanguagesResponseInfo`](BusinessDataYelpLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpLanguagesResponseInfo`](BusinessDataYelpLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:203424
