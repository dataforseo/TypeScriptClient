[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataErrorsResponseInfo

# Class: KeywordsDataErrorsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataErrorsResponseInfo`**

## Implements

- [`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataErrorsResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataErrorsResponseInfo.md#cost)
- [status\_code](KeywordsDataErrorsResponseInfo.md#status_code)
- [status\_message](KeywordsDataErrorsResponseInfo.md#status_message)
- [tasks](KeywordsDataErrorsResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataErrorsResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataErrorsResponseInfo.md#tasks_error)
- [time](KeywordsDataErrorsResponseInfo.md#time)
- [version](KeywordsDataErrorsResponseInfo.md#version)

### Methods

- [init](KeywordsDataErrorsResponseInfo.md#init)
- [toJSON](KeywordsDataErrorsResponseInfo.md#tojson)
- [fromJS](KeywordsDataErrorsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataErrorsResponseInfo**(`data?`): [`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataErrorsResponseInfo`](../interfaces/IKeywordsDataErrorsResponseInfo.md) |

#### Returns

[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:113003

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataErrorsResponseInfo](../interfaces/IKeywordsDataErrorsResponseInfo.md).[cost](../interfaces/IKeywordsDataErrorsResponseInfo.md#cost)

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

[IKeywordsDataErrorsResponseInfo](../interfaces/IKeywordsDataErrorsResponseInfo.md).[status_code](../interfaces/IKeywordsDataErrorsResponseInfo.md#status_code)

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

[IKeywordsDataErrorsResponseInfo](../interfaces/IKeywordsDataErrorsResponseInfo.md).[status_message](../interfaces/IKeywordsDataErrorsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`KeywordsDataErrorsTaskInfo`](KeywordsDataErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataErrorsResponseInfo](../interfaces/IKeywordsDataErrorsResponseInfo.md).[tasks](../interfaces/IKeywordsDataErrorsResponseInfo.md#tasks)

#### Defined in

main.ts:112999

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataErrorsResponseInfo](../interfaces/IKeywordsDataErrorsResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataErrorsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataErrorsResponseInfo](../interfaces/IKeywordsDataErrorsResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataErrorsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataErrorsResponseInfo](../interfaces/IKeywordsDataErrorsResponseInfo.md).[time](../interfaces/IKeywordsDataErrorsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataErrorsResponseInfo](../interfaces/IKeywordsDataErrorsResponseInfo.md).[version](../interfaces/IKeywordsDataErrorsResponseInfo.md#version)

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

main.ts:113007

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

main.ts:113029

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:113022
