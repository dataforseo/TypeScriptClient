[Documentation](../README.md) / [Exports](../modules.md) / SerpBaiduLocationsCountryResponseInfo

# Class: SerpBaiduLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBaiduLocationsCountryResponseInfo`**

## Implements

- [`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](SerpBaiduLocationsCountryResponseInfo.md#cost)
- [status\_code](SerpBaiduLocationsCountryResponseInfo.md#status_code)
- [status\_message](SerpBaiduLocationsCountryResponseInfo.md#status_message)
- [tasks](SerpBaiduLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](SerpBaiduLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](SerpBaiduLocationsCountryResponseInfo.md#tasks_error)
- [time](SerpBaiduLocationsCountryResponseInfo.md#time)
- [version](SerpBaiduLocationsCountryResponseInfo.md#version)

### Methods

- [init](SerpBaiduLocationsCountryResponseInfo.md#init)
- [toJSON](SerpBaiduLocationsCountryResponseInfo.md#tojson)
- [fromJS](SerpBaiduLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduLocationsCountryResponseInfo**(`data?`): [`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduLocationsCountryResponseInfo`](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md) |

#### Returns

[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:65675

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduLocationsCountryResponseInfo](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[cost](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#cost)

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

[ISerpBaiduLocationsCountryResponseInfo](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[status_code](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#status_code)

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

[ISerpBaiduLocationsCountryResponseInfo](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[status_message](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`SerpBaiduLocationsCountryTaskInfo`](SerpBaiduLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBaiduLocationsCountryResponseInfo](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[tasks](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#tasks)

#### Defined in

main.ts:65671

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBaiduLocationsCountryResponseInfo](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[tasks_count](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBaiduLocationsCountryResponseInfo](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[tasks_error](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBaiduLocationsCountryResponseInfo](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[time](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBaiduLocationsCountryResponseInfo](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md).[version](../interfaces/ISerpBaiduLocationsCountryResponseInfo.md#version)

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

main.ts:65679

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

main.ts:65701

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:65694
