[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsExploreLiveResponseInfo

# Class: KeywordsDataDataforseoTrendsExploreLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`**

## Implements

- [`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#time)
- [version](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsExploreLiveResponseInfo**(`data?`): [`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:125171

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#cost)

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

[IKeywordsDataDataforseoTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#status_code)

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

[IKeywordsDataDataforseoTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataDataforseoTrendsExploreLiveTaskInfo`](KeywordsDataDataforseoTrendsExploreLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tasks)

#### Defined in

main.ts:125167

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[time](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataDataforseoTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md).[version](../interfaces/IKeywordsDataDataforseoTrendsExploreLiveResponseInfo.md#version)

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

main.ts:125175

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

main.ts:125197

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsExploreLiveResponseInfo`](KeywordsDataDataforseoTrendsExploreLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:125190
