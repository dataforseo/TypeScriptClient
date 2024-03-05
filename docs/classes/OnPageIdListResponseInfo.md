[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageIdListResponseInfo

# Class: OnPageIdListResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageIdListResponseInfo`**

## Implements

- [`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageIdListResponseInfo.md#constructor)

### Properties

- [cost](OnPageIdListResponseInfo.md#cost)
- [status\_code](OnPageIdListResponseInfo.md#status_code)
- [status\_message](OnPageIdListResponseInfo.md#status_message)
- [tasks](OnPageIdListResponseInfo.md#tasks)
- [tasks\_count](OnPageIdListResponseInfo.md#tasks_count)
- [tasks\_error](OnPageIdListResponseInfo.md#tasks_error)
- [time](OnPageIdListResponseInfo.md#time)
- [version](OnPageIdListResponseInfo.md#version)

### Methods

- [init](OnPageIdListResponseInfo.md#init)
- [toJSON](OnPageIdListResponseInfo.md#tojson)
- [fromJS](OnPageIdListResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageIdListResponseInfo**(`data?`): [`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageIdListResponseInfo`](../interfaces/IOnPageIdListResponseInfo.md) |

#### Returns

[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:141734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141734)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageIdListResponseInfo](../interfaces/IOnPageIdListResponseInfo.md).[cost](../interfaces/IOnPageIdListResponseInfo.md#cost)

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

[IOnPageIdListResponseInfo](../interfaces/IOnPageIdListResponseInfo.md).[status_code](../interfaces/IOnPageIdListResponseInfo.md#status_code)

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

[IOnPageIdListResponseInfo](../interfaces/IOnPageIdListResponseInfo.md).[status_message](../interfaces/IOnPageIdListResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`OnPageIdListTaskInfo`](OnPageIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageIdListResponseInfo](../interfaces/IOnPageIdListResponseInfo.md).[tasks](../interfaces/IOnPageIdListResponseInfo.md#tasks)

#### Defined in

[main.ts:141730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141730)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageIdListResponseInfo](../interfaces/IOnPageIdListResponseInfo.md).[tasks_count](../interfaces/IOnPageIdListResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageIdListResponseInfo](../interfaces/IOnPageIdListResponseInfo.md).[tasks_error](../interfaces/IOnPageIdListResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageIdListResponseInfo](../interfaces/IOnPageIdListResponseInfo.md).[time](../interfaces/IOnPageIdListResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageIdListResponseInfo](../interfaces/IOnPageIdListResponseInfo.md).[version](../interfaces/IOnPageIdListResponseInfo.md#version)

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

[main.ts:141738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141738)

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

[main.ts:141760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141760)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:141753](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L141753)
