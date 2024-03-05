[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#time)
- [version](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo**(`data?`): [`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:192110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192110)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BusinessDataGoogleMyBusinessUpdatesTaskPostTaskInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:192106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192106)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md#version)

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

[main.ts:192114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192114)

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

[main.ts:192136](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192136)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:192129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L192129)
