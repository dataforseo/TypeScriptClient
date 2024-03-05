[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotSearchTaskPostResponseInfo

# Class: BusinessDataTrustpilotSearchTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataTrustpilotSearchTaskPostResponseInfo`**

## Implements

- [`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#time)
- [version](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotSearchTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotSearchTaskPostResponseInfo**(`data?`): [`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotSearchTaskPostResponseInfo`](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:198873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198873)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#cost)

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

[IBusinessDataTrustpilotSearchTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#status_code)

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

[IBusinessDataTrustpilotSearchTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BusinessDataTrustpilotSearchTaskPostTaskInfo`](BusinessDataTrustpilotSearchTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:198869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198869)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTrustpilotSearchTaskPostResponseInfo](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataTrustpilotSearchTaskPostResponseInfo.md#version)

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

[main.ts:198877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198877)

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

[main.ts:198899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198899)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:198892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198892)
