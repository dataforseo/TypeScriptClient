[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaRedditLiveResponseInfo

# Class: BusinessDataSocialMediaRedditLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataSocialMediaRedditLiveResponseInfo`**

## Implements

- [`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaRedditLiveResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataSocialMediaRedditLiveResponseInfo.md#cost)
- [status\_code](BusinessDataSocialMediaRedditLiveResponseInfo.md#status_code)
- [status\_message](BusinessDataSocialMediaRedditLiveResponseInfo.md#status_message)
- [tasks](BusinessDataSocialMediaRedditLiveResponseInfo.md#tasks)
- [tasks\_count](BusinessDataSocialMediaRedditLiveResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataSocialMediaRedditLiveResponseInfo.md#tasks_error)
- [time](BusinessDataSocialMediaRedditLiveResponseInfo.md#time)
- [version](BusinessDataSocialMediaRedditLiveResponseInfo.md#version)

### Methods

- [init](BusinessDataSocialMediaRedditLiveResponseInfo.md#init)
- [toJSON](BusinessDataSocialMediaRedditLiveResponseInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaRedditLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaRedditLiveResponseInfo**(`data?`): [`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaRedditLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md) |

#### Returns

[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:206431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206431)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataSocialMediaRedditLiveResponseInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[cost](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#cost)

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

[IBusinessDataSocialMediaRedditLiveResponseInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[status_code](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#status_code)

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

[IBusinessDataSocialMediaRedditLiveResponseInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[status_message](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BusinessDataSocialMediaRedditLiveTaskInfo`](BusinessDataSocialMediaRedditLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataSocialMediaRedditLiveResponseInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[tasks](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:206427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206427)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataSocialMediaRedditLiveResponseInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[tasks_count](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataSocialMediaRedditLiveResponseInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[tasks_error](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataSocialMediaRedditLiveResponseInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[time](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataSocialMediaRedditLiveResponseInfo](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md).[version](../interfaces/IBusinessDataSocialMediaRedditLiveResponseInfo.md#version)

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

[main.ts:206435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206435)

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

[main.ts:206457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206457)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:206450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L206450)
