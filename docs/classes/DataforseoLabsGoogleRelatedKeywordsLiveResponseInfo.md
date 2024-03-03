[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo

# Class: DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:80699

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo`](DataforseoLabsGoogleRelatedKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tasks)

#### Defined in

main.ts:80695

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md#version)

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

main.ts:80703

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

main.ts:80725

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo`](DataforseoLabsGoogleRelatedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:80718
