[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTaskGetAdvancedResponseInfo

# Class: AppDataGoogleAppListTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleAppListTaskGetAdvancedResponseInfo`**

## Implements

- [`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#time)
- [version](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#init)
- [toJSON](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTaskGetAdvancedResponseInfo**(`data?`): [`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md) |

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:178979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178979)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#cost)

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

[IAppDataGoogleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#status_code)

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

[IAppDataGoogleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleAppListTaskGetAdvancedTaskInfo`](AppDataGoogleAppListTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:178975](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178975)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[time](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md).[version](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:178983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178983)

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

[main.ts:179005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179005)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:178998](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178998)
