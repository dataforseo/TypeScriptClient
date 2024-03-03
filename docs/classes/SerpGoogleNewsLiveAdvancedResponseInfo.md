[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleNewsLiveAdvancedResponseInfo

# Class: SerpGoogleNewsLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleNewsLiveAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleNewsLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleNewsLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleNewsLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleNewsLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleNewsLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleNewsLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleNewsLiveAdvancedResponseInfo.md#time)
- [version](SerpGoogleNewsLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleNewsLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleNewsLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleNewsLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsLiveAdvancedResponseInfo**(`data?`): [`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:43447

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#cost)

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

[ISerpGoogleNewsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleNewsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleNewsLiveAdvancedTaskInfo`](SerpGoogleNewsLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:43443

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResponseInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleNewsLiveAdvancedResponseInfo.md#version)

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

main.ts:43451

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

main.ts:43473

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:43466
