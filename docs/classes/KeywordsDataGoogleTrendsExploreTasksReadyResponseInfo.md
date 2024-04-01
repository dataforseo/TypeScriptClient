[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo

# Class: KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#time)
- [version](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:122713

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#cost)

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

[IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo`](KeywordsDataGoogleTrendsExploreTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tasks)

#### Defined in

main.ts:122709

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md#version)

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

main.ts:122717

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

main.ts:122739

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:122732
