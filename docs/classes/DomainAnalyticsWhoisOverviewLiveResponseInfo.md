[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsWhoisOverviewLiveResponseInfo

# Class: DomainAnalyticsWhoisOverviewLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DomainAnalyticsWhoisOverviewLiveResponseInfo`**

## Implements

- [`IDomainAnalyticsWhoisOverviewLiveResponseInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#cost)
- [status\_code](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#status_message)
- [tasks](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#tasks_error)
- [time](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#time)
- [version](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#init)
- [toJSON](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsWhoisOverviewLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsWhoisOverviewLiveResponseInfo**(`data?`): [`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsWhoisOverviewLiveResponseInfo`](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md) |

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:76373](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76373)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveResponseInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md).[cost](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md#cost)

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

[IDomainAnalyticsWhoisOverviewLiveResponseInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md#status_code)

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

[IDomainAnalyticsWhoisOverviewLiveResponseInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DomainAnalyticsWhoisOverviewLiveTaskInfo`](DomainAnalyticsWhoisOverviewLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveResponseInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:76369](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76369)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveResponseInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveResponseInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveResponseInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md).[time](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsWhoisOverviewLiveResponseInfo](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md).[version](../interfaces/IDomainAnalyticsWhoisOverviewLiveResponseInfo.md#version)

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

[main.ts:76377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76377)

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

[main.ts:76399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76399)

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:76392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L76392)
