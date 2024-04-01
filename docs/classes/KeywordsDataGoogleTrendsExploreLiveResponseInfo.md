[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreLiveResponseInfo

# Class: KeywordsDataGoogleTrendsExploreLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleTrendsExploreLiveResponseInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#time)
- [version](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreLiveResponseInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreLiveResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:124251

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#cost)

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

[IKeywordsDataGoogleTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleTrendsExploreLiveTaskInfo`](KeywordsDataGoogleTrendsExploreLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tasks)

#### Defined in

main.ts:124247

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleTrendsExploreLiveResponseInfo.md#version)

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

main.ts:124255

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

main.ts:124277

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:124270
