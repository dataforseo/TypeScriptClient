[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTaskGetHtmlResponseInfo

# Class: SerpGoogleImagesTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleImagesTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpGoogleImagesTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpGoogleImagesTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpGoogleImagesTaskGetHtmlResponseInfo.md#time)
- [version](SerpGoogleImagesTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpGoogleImagesTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpGoogleImagesTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpGoogleImagesTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTaskGetHtmlResponseInfo**(`data?`): [`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:46767

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#cost)

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

[ISerpGoogleImagesTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#status_code)

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

[ISerpGoogleImagesTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpGoogleImagesTaskGetHtmlTaskInfo`](SerpGoogleImagesTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:46763

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpGoogleImagesTaskGetHtmlResponseInfo.md#version)

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

main.ts:46771

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

main.ts:46793

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:46786
