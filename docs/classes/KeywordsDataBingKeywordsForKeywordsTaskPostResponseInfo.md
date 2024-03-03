[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#time)
- [version](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:125458

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks)

#### Defined in

main.ts:125454

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md#version)

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

main.ts:125462

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

main.ts:125484

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:125477
