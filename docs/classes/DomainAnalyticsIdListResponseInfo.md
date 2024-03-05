[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsIdListResponseInfo

# Class: DomainAnalyticsIdListResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DomainAnalyticsIdListResponseInfo`**

## Implements

- [`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DomainAnalyticsIdListResponseInfo.md#constructor)

### Properties

- [cost](DomainAnalyticsIdListResponseInfo.md#cost)
- [status\_code](DomainAnalyticsIdListResponseInfo.md#status_code)
- [status\_message](DomainAnalyticsIdListResponseInfo.md#status_message)
- [tasks](DomainAnalyticsIdListResponseInfo.md#tasks)
- [tasks\_count](DomainAnalyticsIdListResponseInfo.md#tasks_count)
- [tasks\_error](DomainAnalyticsIdListResponseInfo.md#tasks_error)
- [time](DomainAnalyticsIdListResponseInfo.md#time)
- [version](DomainAnalyticsIdListResponseInfo.md#version)

### Methods

- [init](DomainAnalyticsIdListResponseInfo.md#init)
- [toJSON](DomainAnalyticsIdListResponseInfo.md#tojson)
- [fromJS](DomainAnalyticsIdListResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DomainAnalyticsIdListResponseInfo**(`data?`): [`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDomainAnalyticsIdListResponseInfo`](../interfaces/IDomainAnalyticsIdListResponseInfo.md) |

#### Returns

[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:71161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71161)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDomainAnalyticsIdListResponseInfo](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[cost](../interfaces/IDomainAnalyticsIdListResponseInfo.md#cost)

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

[IDomainAnalyticsIdListResponseInfo](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[status_code](../interfaces/IDomainAnalyticsIdListResponseInfo.md#status_code)

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

[IDomainAnalyticsIdListResponseInfo](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[status_message](../interfaces/IDomainAnalyticsIdListResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DomainAnalyticsIdListTaskInfo`](DomainAnalyticsIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[IDomainAnalyticsIdListResponseInfo](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[tasks](../interfaces/IDomainAnalyticsIdListResponseInfo.md#tasks)

#### Defined in

[main.ts:71157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71157)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDomainAnalyticsIdListResponseInfo](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[tasks_count](../interfaces/IDomainAnalyticsIdListResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDomainAnalyticsIdListResponseInfo](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[tasks_error](../interfaces/IDomainAnalyticsIdListResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDomainAnalyticsIdListResponseInfo](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[time](../interfaces/IDomainAnalyticsIdListResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDomainAnalyticsIdListResponseInfo](../interfaces/IDomainAnalyticsIdListResponseInfo.md).[version](../interfaces/IDomainAnalyticsIdListResponseInfo.md#version)

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

[main.ts:71165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71165)

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

[main.ts:71187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71187)

___

### fromJS

▸ **fromJS**(`data`): [`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:71180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L71180)
