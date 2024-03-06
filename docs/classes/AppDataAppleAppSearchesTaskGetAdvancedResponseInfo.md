[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppSearchesTaskGetAdvancedResponseInfo

# Class: AppDataAppleAppSearchesTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`**

## Implements

- [`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#time)
- [version](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#init)
- [toJSON](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppSearchesTaskGetAdvancedResponseInfo**(`data?`): [`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md) |

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:183805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183805)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[cost](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#cost)

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

[IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#status_code)

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

[IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`AppDataAppleAppSearchesTaskGetAdvancedTaskInfo`](AppDataAppleAppSearchesTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:183801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183801)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[time](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md).[version](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:183809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183809)

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

[main.ts:183831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183831)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:183824](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183824)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")