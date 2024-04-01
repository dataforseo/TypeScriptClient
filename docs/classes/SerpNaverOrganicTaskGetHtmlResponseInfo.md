[Documentation](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskGetHtmlResponseInfo

# Class: SerpNaverOrganicTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpNaverOrganicTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpNaverOrganicTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpNaverOrganicTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpNaverOrganicTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpNaverOrganicTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpNaverOrganicTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpNaverOrganicTaskGetHtmlResponseInfo.md#time)
- [version](SerpNaverOrganicTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpNaverOrganicTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpNaverOrganicTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskGetHtmlResponseInfo**(`data?`): [`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:71080

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:23029

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:23022

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpNaverOrganicTaskGetHtmlTaskInfo`](SerpNaverOrganicTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:71076

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpNaverOrganicTaskGetHtmlResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:23019

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

main.ts:71084

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

main.ts:71106

___

### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:71099
