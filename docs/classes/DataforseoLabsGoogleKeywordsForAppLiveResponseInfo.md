[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordsForAppLiveResponseInfo

# Class: DataforseoLabsGoogleKeywordsForAppLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordsForAppLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:111300

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleKeywordsForAppLiveTaskInfo`](DataforseoLabsGoogleKeywordsForAppLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tasks)

#### Defined in

main.ts:111296

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md#version)

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

main.ts:111304

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

main.ts:111326

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResponseInfo`](DataforseoLabsGoogleKeywordsForAppLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:111319
