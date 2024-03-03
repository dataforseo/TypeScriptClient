[Documentation](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskGetHtmlResponseInfo

# Class: SerpBingOrganicTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingOrganicTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpBingOrganicTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpBingOrganicTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpBingOrganicTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpBingOrganicTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingOrganicTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpBingOrganicTaskGetHtmlResponseInfo.md#time)
- [version](SerpBingOrganicTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpBingOrganicTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpBingOrganicTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskGetHtmlResponseInfo**(`data?`): [`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:55041

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#cost)

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

[ISerpBingOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#status_code)

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

[ISerpBingOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpBingOrganicTaskGetHtmlTaskInfo`](SerpBingOrganicTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:55037

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpBingOrganicTaskGetHtmlResponseInfo.md#version)

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

main.ts:55045

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

main.ts:55067

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:55060
