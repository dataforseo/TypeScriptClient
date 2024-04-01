[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsDemographyLiveResponseInfo

# Class: KeywordsDataDataforseoTrendsDemographyLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`**

## Implements

- [`IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#time)
- [version](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsDemographyLiveResponseInfo**(`data?`): [`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:126759

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#cost)

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

[IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#status_code)

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

[IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataDataforseoTrendsDemographyLiveTaskInfo`](KeywordsDataDataforseoTrendsDemographyLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#tasks)

#### Defined in

main.ts:126755

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md).[time](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md).[version](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md#version)

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

main.ts:126763

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

main.ts:126785

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveResponseInfo`](KeywordsDataDataforseoTrendsDemographyLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:126778
