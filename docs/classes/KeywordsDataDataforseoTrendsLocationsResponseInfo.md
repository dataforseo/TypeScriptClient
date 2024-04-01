[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsLocationsResponseInfo

# Class: KeywordsDataDataforseoTrendsLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataDataforseoTrendsLocationsResponseInfo`**

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#cost)
- [status\_code](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#status_code)
- [status\_message](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#status_message)
- [tasks](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#tasks_error)
- [time](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#time)
- [version](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#version)

### Methods

- [init](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsLocationsResponseInfo**(`data?`): [`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:124467

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[cost](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#cost)

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

[IKeywordsDataDataforseoTrendsLocationsResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[status_code](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#status_code)

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

[IKeywordsDataDataforseoTrendsLocationsResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[status_message](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataDataforseoTrendsLocationsTaskInfo`](KeywordsDataDataforseoTrendsLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[tasks](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#tasks)

#### Defined in

main.ts:124463

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[time](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md).[version](../interfaces/IKeywordsDataDataforseoTrendsLocationsResponseInfo.md#version)

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

main.ts:124471

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

main.ts:124493

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsLocationsResponseInfo`](KeywordsDataDataforseoTrendsLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:124486
