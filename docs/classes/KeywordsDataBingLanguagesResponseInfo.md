[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingLanguagesResponseInfo

# Class: KeywordsDataBingLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingLanguagesResponseInfo`**

## Implements

- [`IKeywordsDataBingLanguagesResponseInfo`](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingLanguagesResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingLanguagesResponseInfo.md#cost)
- [status\_code](KeywordsDataBingLanguagesResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingLanguagesResponseInfo.md#status_message)
- [tasks](KeywordsDataBingLanguagesResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingLanguagesResponseInfo.md#tasks_error)
- [time](KeywordsDataBingLanguagesResponseInfo.md#time)
- [version](KeywordsDataBingLanguagesResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingLanguagesResponseInfo.md#init)
- [toJSON](KeywordsDataBingLanguagesResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingLanguagesResponseInfo**(`data?`): [`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingLanguagesResponseInfo`](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md) |

#### Returns

[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:122380

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingLanguagesResponseInfo](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md).[cost](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md#cost)

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

[IKeywordsDataBingLanguagesResponseInfo](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md#status_code)

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

[IKeywordsDataBingLanguagesResponseInfo](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingLanguagesTaskInfo`](KeywordsDataBingLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingLanguagesResponseInfo](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md#tasks)

#### Defined in

main.ts:122376

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingLanguagesResponseInfo](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingLanguagesResponseInfo](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingLanguagesResponseInfo](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md).[time](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingLanguagesResponseInfo](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md).[version](../interfaces/IKeywordsDataBingLanguagesResponseInfo.md#version)

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

main.ts:122384

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

main.ts:122406

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:122399
