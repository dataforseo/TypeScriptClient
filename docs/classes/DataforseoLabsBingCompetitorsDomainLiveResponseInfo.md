[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsBingCompetitorsDomainLiveResponseInfo

# Class: DataforseoLabsBingCompetitorsDomainLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#time)
- [version](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingCompetitorsDomainLiveResponseInfo**(`data?`): [`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingCompetitorsDomainLiveResponseInfo`](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:105712

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResponseInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingCompetitorsDomainLiveResponseInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingCompetitorsDomainLiveResponseInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:23025

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsBingCompetitorsDomainLiveTaskInfo`](DataforseoLabsBingCompetitorsDomainLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResponseInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#tasks)

#### Defined in

main.ts:105708

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResponseInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:23031

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResponseInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:23033

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResponseInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:23027

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingCompetitorsDomainLiveResponseInfo](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingCompetitorsDomainLiveResponseInfo.md#version)

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

main.ts:105716

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

main.ts:105738

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingCompetitorsDomainLiveResponseInfo`](DataforseoLabsBingCompetitorsDomainLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:105731
