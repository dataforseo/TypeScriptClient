[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingDomainRankOverviewLiveResponseInfo

# Class: DataforseoLabsBingDomainRankOverviewLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#time)
- [version](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingDomainRankOverviewLiveResponseInfo**(`data?`): [`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingDomainRankOverviewLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:104255](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104255)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsBingDomainRankOverviewLiveTaskInfo`](DataforseoLabsBingDomainRankOverviewLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:104251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104251)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingDomainRankOverviewLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingDomainRankOverviewLiveResponseInfo.md#version)

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

[main.ts:104259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104259)

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

[main.ts:104281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104281)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingDomainRankOverviewLiveResponseInfo`](DataforseoLabsBingDomainRankOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:104274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104274)
