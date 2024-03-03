[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo

# Class: DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:86109

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tasks)

#### Defined in

main.ts:86105

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md#version)

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

main.ts:86113

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

main.ts:86135

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainWhoisOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:86128
