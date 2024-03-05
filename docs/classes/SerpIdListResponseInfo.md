[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpIdListResponseInfo

# Class: SerpIdListResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpIdListResponseInfo`**

## Implements

- [`ISerpIdListResponseInfo`](../interfaces/ISerpIdListResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpIdListResponseInfo.md#constructor)

### Properties

- [cost](SerpIdListResponseInfo.md#cost)
- [status\_code](SerpIdListResponseInfo.md#status_code)
- [status\_message](SerpIdListResponseInfo.md#status_message)
- [tasks](SerpIdListResponseInfo.md#tasks)
- [tasks\_count](SerpIdListResponseInfo.md#tasks_count)
- [tasks\_error](SerpIdListResponseInfo.md#tasks_error)
- [time](SerpIdListResponseInfo.md#time)
- [version](SerpIdListResponseInfo.md#version)

### Methods

- [init](SerpIdListResponseInfo.md#init)
- [toJSON](SerpIdListResponseInfo.md#tojson)
- [fromJS](SerpIdListResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpIdListResponseInfo**(`data?`): [`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpIdListResponseInfo`](../interfaces/ISerpIdListResponseInfo.md) |

#### Returns

[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:23007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23007)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpIdListResponseInfo](../interfaces/ISerpIdListResponseInfo.md).[cost](../interfaces/ISerpIdListResponseInfo.md#cost)

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

[ISerpIdListResponseInfo](../interfaces/ISerpIdListResponseInfo.md).[status_code](../interfaces/ISerpIdListResponseInfo.md#status_code)

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

[ISerpIdListResponseInfo](../interfaces/ISerpIdListResponseInfo.md).[status_message](../interfaces/ISerpIdListResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpIdListTaskInfo`](SerpIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpIdListResponseInfo](../interfaces/ISerpIdListResponseInfo.md).[tasks](../interfaces/ISerpIdListResponseInfo.md#tasks)

#### Defined in

[main.ts:23003](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23003)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpIdListResponseInfo](../interfaces/ISerpIdListResponseInfo.md).[tasks_count](../interfaces/ISerpIdListResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpIdListResponseInfo](../interfaces/ISerpIdListResponseInfo.md).[tasks_error](../interfaces/ISerpIdListResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpIdListResponseInfo](../interfaces/ISerpIdListResponseInfo.md).[time](../interfaces/ISerpIdListResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpIdListResponseInfo](../interfaces/ISerpIdListResponseInfo.md).[version](../interfaces/ISerpIdListResponseInfo.md#version)

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

[main.ts:23011](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23011)

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

[main.ts:23033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23033)

___

### fromJS

▸ **fromJS**(`data`): [`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:23026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23026)
