[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo

# Class: DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:90903](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90903)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

[main.ts:22510](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22510)

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22503)

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo`](DataforseoLabsGoogleDomainRankOverviewLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:90899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90899)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

[main.ts:22500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22500)

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

[main.ts:90907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90907)

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

[main.ts:90929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90929)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo`](DataforseoLabsGoogleDomainRankOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:90922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L90922)
