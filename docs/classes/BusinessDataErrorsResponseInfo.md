[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataErrorsResponseInfo

# Class: BusinessDataErrorsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataErrorsResponseInfo`**

## Implements

- [`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataErrorsResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataErrorsResponseInfo.md#cost)
- [status\_code](BusinessDataErrorsResponseInfo.md#status_code)
- [status\_message](BusinessDataErrorsResponseInfo.md#status_message)
- [tasks](BusinessDataErrorsResponseInfo.md#tasks)
- [tasks\_count](BusinessDataErrorsResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataErrorsResponseInfo.md#tasks_error)
- [time](BusinessDataErrorsResponseInfo.md#time)
- [version](BusinessDataErrorsResponseInfo.md#version)

### Methods

- [init](BusinessDataErrorsResponseInfo.md#init)
- [toJSON](BusinessDataErrorsResponseInfo.md#tojson)
- [fromJS](BusinessDataErrorsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataErrorsResponseInfo**(`data?`): [`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataErrorsResponseInfo`](../interfaces/IBusinessDataErrorsResponseInfo.md) |

#### Returns

[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:187783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187783)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataErrorsResponseInfo](../interfaces/IBusinessDataErrorsResponseInfo.md).[cost](../interfaces/IBusinessDataErrorsResponseInfo.md#cost)

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

[IBusinessDataErrorsResponseInfo](../interfaces/IBusinessDataErrorsResponseInfo.md).[status_code](../interfaces/IBusinessDataErrorsResponseInfo.md#status_code)

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

[IBusinessDataErrorsResponseInfo](../interfaces/IBusinessDataErrorsResponseInfo.md).[status_message](../interfaces/IBusinessDataErrorsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BusinessDataErrorsTaskInfo`](BusinessDataErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataErrorsResponseInfo](../interfaces/IBusinessDataErrorsResponseInfo.md).[tasks](../interfaces/IBusinessDataErrorsResponseInfo.md#tasks)

#### Defined in

[main.ts:187779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187779)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataErrorsResponseInfo](../interfaces/IBusinessDataErrorsResponseInfo.md).[tasks_count](../interfaces/IBusinessDataErrorsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataErrorsResponseInfo](../interfaces/IBusinessDataErrorsResponseInfo.md).[tasks_error](../interfaces/IBusinessDataErrorsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataErrorsResponseInfo](../interfaces/IBusinessDataErrorsResponseInfo.md).[time](../interfaces/IBusinessDataErrorsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataErrorsResponseInfo](../interfaces/IBusinessDataErrorsResponseInfo.md).[version](../interfaces/IBusinessDataErrorsResponseInfo.md#version)

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

[main.ts:187787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187787)

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

[main.ts:187809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187809)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:187802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L187802)
