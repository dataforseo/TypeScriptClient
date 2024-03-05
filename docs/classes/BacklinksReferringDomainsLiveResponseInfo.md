[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksReferringDomainsLiveResponseInfo

# Class: BacklinksReferringDomainsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BacklinksReferringDomainsLiveResponseInfo`**

## Implements

- [`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksReferringDomainsLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksReferringDomainsLiveResponseInfo.md#cost)
- [status\_code](BacklinksReferringDomainsLiveResponseInfo.md#status_code)
- [status\_message](BacklinksReferringDomainsLiveResponseInfo.md#status_message)
- [tasks](BacklinksReferringDomainsLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksReferringDomainsLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksReferringDomainsLiveResponseInfo.md#tasks_error)
- [time](BacklinksReferringDomainsLiveResponseInfo.md#time)
- [version](BacklinksReferringDomainsLiveResponseInfo.md#version)

### Methods

- [init](BacklinksReferringDomainsLiveResponseInfo.md#init)
- [toJSON](BacklinksReferringDomainsLiveResponseInfo.md#tojson)
- [fromJS](BacklinksReferringDomainsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksReferringDomainsLiveResponseInfo**(`data?`): [`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksReferringDomainsLiveResponseInfo`](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md) |

#### Returns

[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:135102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135102)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksReferringDomainsLiveResponseInfo](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[cost](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#cost)

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

[IBacklinksReferringDomainsLiveResponseInfo](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[status_code](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#status_code)

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

[IBacklinksReferringDomainsLiveResponseInfo](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[status_message](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BacklinksReferringDomainsLiveTaskInfo`](BacklinksReferringDomainsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksReferringDomainsLiveResponseInfo](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[tasks](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:135098](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135098)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksReferringDomainsLiveResponseInfo](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksReferringDomainsLiveResponseInfo](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksReferringDomainsLiveResponseInfo](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[time](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksReferringDomainsLiveResponseInfo](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md).[version](../interfaces/IBacklinksReferringDomainsLiveResponseInfo.md#version)

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

[main.ts:135106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135106)

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

[main.ts:135128](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135128)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:135121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135121)
