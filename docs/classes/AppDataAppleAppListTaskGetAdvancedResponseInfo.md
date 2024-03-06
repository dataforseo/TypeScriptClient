[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppListTaskGetAdvancedResponseInfo

# Class: AppDataAppleAppListTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`AppDataAppleAppListTaskGetAdvancedResponseInfo`**

## Implements

- [`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#time)
- [version](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#init)
- [toJSON](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](AppDataAppleAppListTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListTaskGetAdvancedResponseInfo**(`data?`): [`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md) |

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:185603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185603)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#cost)

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

[IAppDataAppleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#status_code)

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

[IAppDataAppleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`AppDataAppleAppListTaskGetAdvancedTaskInfo`](AppDataAppleAppListTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:185599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185599)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[time](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md).[version](../interfaces/IAppDataAppleAppListTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:185607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185607)

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

[main.ts:185629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185629)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:185622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L185622)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")