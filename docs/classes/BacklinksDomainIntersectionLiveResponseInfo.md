[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksDomainIntersectionLiveResponseInfo

# Class: BacklinksDomainIntersectionLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BacklinksDomainIntersectionLiveResponseInfo`**

## Implements

- [`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainIntersectionLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksDomainIntersectionLiveResponseInfo.md#cost)
- [status\_code](BacklinksDomainIntersectionLiveResponseInfo.md#status_code)
- [status\_message](BacklinksDomainIntersectionLiveResponseInfo.md#status_message)
- [tasks](BacklinksDomainIntersectionLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksDomainIntersectionLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksDomainIntersectionLiveResponseInfo.md#tasks_error)
- [time](BacklinksDomainIntersectionLiveResponseInfo.md#time)
- [version](BacklinksDomainIntersectionLiveResponseInfo.md#version)

### Methods

- [init](BacklinksDomainIntersectionLiveResponseInfo.md#init)
- [toJSON](BacklinksDomainIntersectionLiveResponseInfo.md#tojson)
- [fromJS](BacklinksDomainIntersectionLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainIntersectionLiveResponseInfo**(`data?`): [`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainIntersectionLiveResponseInfo`](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md) |

#### Returns

[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:137284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137284)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksDomainIntersectionLiveResponseInfo](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[cost](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#cost)

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

[IBacklinksDomainIntersectionLiveResponseInfo](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[status_code](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#status_code)

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

[IBacklinksDomainIntersectionLiveResponseInfo](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[status_message](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BacklinksDomainIntersectionLiveTaskInfo`](BacklinksDomainIntersectionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksDomainIntersectionLiveResponseInfo](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[tasks](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:137280](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137280)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksDomainIntersectionLiveResponseInfo](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksDomainIntersectionLiveResponseInfo](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksDomainIntersectionLiveResponseInfo](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[time](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksDomainIntersectionLiveResponseInfo](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md).[version](../interfaces/IBacklinksDomainIntersectionLiveResponseInfo.md#version)

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

[main.ts:137288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137288)

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

[main.ts:137310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137310)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:137303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L137303)
