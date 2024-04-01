[Documentation](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTaskGetRegularResponseInfo

# Class: SerpBaiduOrganicTaskGetRegularResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBaiduOrganicTaskGetRegularResponseInfo`**

## Implements

- [`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTaskGetRegularResponseInfo.md#constructor)

### Properties

- [cost](SerpBaiduOrganicTaskGetRegularResponseInfo.md#cost)
- [status\_code](SerpBaiduOrganicTaskGetRegularResponseInfo.md#status_code)
- [status\_message](SerpBaiduOrganicTaskGetRegularResponseInfo.md#status_message)
- [tasks](SerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks)
- [tasks\_count](SerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks_count)
- [tasks\_error](SerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks_error)
- [time](SerpBaiduOrganicTaskGetRegularResponseInfo.md#time)
- [version](SerpBaiduOrganicTaskGetRegularResponseInfo.md#version)

### Methods

- [init](SerpBaiduOrganicTaskGetRegularResponseInfo.md#init)
- [toJSON](SerpBaiduOrganicTaskGetRegularResponseInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTaskGetRegularResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTaskGetRegularResponseInfo**(`data?`): [`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md) |

#### Returns

[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:69180

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[cost](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#cost)

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

[ISerpBaiduOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[status_code](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#status_code)

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

[ISerpBaiduOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[status_message](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`SerpBaiduOrganicTaskGetRegularTaskInfo`](SerpBaiduOrganicTaskGetRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[tasks](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks)

#### Defined in

main.ts:69176

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[tasks_count](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[tasks_error](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[time](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBaiduOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md).[version](../interfaces/ISerpBaiduOrganicTaskGetRegularResponseInfo.md#version)

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

main.ts:69184

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

main.ts:69206

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:69199
