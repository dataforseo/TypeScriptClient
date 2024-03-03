[Documentation](../README.md) / [Exports](../modules.md) / SerpBaiduLanguagesResponseInfo

# Class: SerpBaiduLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBaiduLanguagesResponseInfo`**

## Implements

- [`ISerpBaiduLanguagesResponseInfo`](../interfaces/ISerpBaiduLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduLanguagesResponseInfo.md#constructor)

### Properties

- [cost](SerpBaiduLanguagesResponseInfo.md#cost)
- [status\_code](SerpBaiduLanguagesResponseInfo.md#status_code)
- [status\_message](SerpBaiduLanguagesResponseInfo.md#status_message)
- [tasks](SerpBaiduLanguagesResponseInfo.md#tasks)
- [tasks\_count](SerpBaiduLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](SerpBaiduLanguagesResponseInfo.md#tasks_error)
- [time](SerpBaiduLanguagesResponseInfo.md#time)
- [version](SerpBaiduLanguagesResponseInfo.md#version)

### Methods

- [init](SerpBaiduLanguagesResponseInfo.md#init)
- [toJSON](SerpBaiduLanguagesResponseInfo.md#tojson)
- [fromJS](SerpBaiduLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduLanguagesResponseInfo**(`data?`): [`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduLanguagesResponseInfo`](../interfaces/ISerpBaiduLanguagesResponseInfo.md) |

#### Returns

[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:65841

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduLanguagesResponseInfo](../interfaces/ISerpBaiduLanguagesResponseInfo.md).[cost](../interfaces/ISerpBaiduLanguagesResponseInfo.md#cost)

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

[ISerpBaiduLanguagesResponseInfo](../interfaces/ISerpBaiduLanguagesResponseInfo.md).[status_code](../interfaces/ISerpBaiduLanguagesResponseInfo.md#status_code)

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

[ISerpBaiduLanguagesResponseInfo](../interfaces/ISerpBaiduLanguagesResponseInfo.md).[status_message](../interfaces/ISerpBaiduLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpBaiduLanguagesTaskInfo`](SerpBaiduLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBaiduLanguagesResponseInfo](../interfaces/ISerpBaiduLanguagesResponseInfo.md).[tasks](../interfaces/ISerpBaiduLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:65837

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBaiduLanguagesResponseInfo](../interfaces/ISerpBaiduLanguagesResponseInfo.md).[tasks_count](../interfaces/ISerpBaiduLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBaiduLanguagesResponseInfo](../interfaces/ISerpBaiduLanguagesResponseInfo.md).[tasks_error](../interfaces/ISerpBaiduLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBaiduLanguagesResponseInfo](../interfaces/ISerpBaiduLanguagesResponseInfo.md).[time](../interfaces/ISerpBaiduLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBaiduLanguagesResponseInfo](../interfaces/ISerpBaiduLanguagesResponseInfo.md).[version](../interfaces/ISerpBaiduLanguagesResponseInfo.md#version)

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

main.ts:65845

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

main.ts:65867

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:65860
