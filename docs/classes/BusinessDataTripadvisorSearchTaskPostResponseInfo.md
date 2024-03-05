[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorSearchTaskPostResponseInfo

# Class: BusinessDataTripadvisorSearchTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataTripadvisorSearchTaskPostResponseInfo`**

## Implements

- [`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#time)
- [version](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorSearchTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorSearchTaskPostResponseInfo**(`data?`): [`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:201129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201129)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorSearchTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#cost)

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

[IBusinessDataTripadvisorSearchTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#status_code)

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

[IBusinessDataTripadvisorSearchTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BusinessDataTripadvisorSearchTaskPostTaskInfo`](BusinessDataTripadvisorSearchTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTripadvisorSearchTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:201125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201125)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTripadvisorSearchTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTripadvisorSearchTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorSearchTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTripadvisorSearchTaskPostResponseInfo](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataTripadvisorSearchTaskPostResponseInfo.md#version)

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

[main.ts:201133](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201133)

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

[main.ts:201155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201155)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:201148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L201148)
