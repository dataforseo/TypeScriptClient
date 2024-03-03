[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTaskGetAdvancedResponseInfo

# Class: SerpGoogleImagesTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleImagesTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleImagesTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#time)
- [version](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleImagesTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTaskGetAdvancedResponseInfo**(`data?`): [`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:46549

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpGoogleImagesTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleImagesTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleImagesTaskGetAdvancedTaskInfo`](SerpGoogleImagesTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

main.ts:46545

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleImagesTaskGetAdvancedResponseInfo.md#version)

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

main.ts:46553

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

main.ts:46575

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:46568
