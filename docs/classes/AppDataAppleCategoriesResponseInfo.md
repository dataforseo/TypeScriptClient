[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleCategoriesResponseInfo

# Class: AppDataAppleCategoriesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataAppleCategoriesResponseInfo`**

## Implements

- [`IAppDataAppleCategoriesResponseInfo`](../interfaces/IAppDataAppleCategoriesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleCategoriesResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleCategoriesResponseInfo.md#cost)
- [status\_code](AppDataAppleCategoriesResponseInfo.md#status_code)
- [status\_message](AppDataAppleCategoriesResponseInfo.md#status_message)
- [tasks](AppDataAppleCategoriesResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleCategoriesResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleCategoriesResponseInfo.md#tasks_error)
- [time](AppDataAppleCategoriesResponseInfo.md#time)
- [version](AppDataAppleCategoriesResponseInfo.md#version)

### Methods

- [init](AppDataAppleCategoriesResponseInfo.md#init)
- [toJSON](AppDataAppleCategoriesResponseInfo.md#tojson)
- [fromJS](AppDataAppleCategoriesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleCategoriesResponseInfo**(`data?`): [`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleCategoriesResponseInfo`](../interfaces/IAppDataAppleCategoriesResponseInfo.md) |

#### Returns

[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:182681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182681)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleCategoriesResponseInfo](../interfaces/IAppDataAppleCategoriesResponseInfo.md).[cost](../interfaces/IAppDataAppleCategoriesResponseInfo.md#cost)

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

[IAppDataAppleCategoriesResponseInfo](../interfaces/IAppDataAppleCategoriesResponseInfo.md).[status_code](../interfaces/IAppDataAppleCategoriesResponseInfo.md#status_code)

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

[IAppDataAppleCategoriesResponseInfo](../interfaces/IAppDataAppleCategoriesResponseInfo.md).[status_message](../interfaces/IAppDataAppleCategoriesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`AppDataAppleCategoriesTaskInfo`](AppDataAppleCategoriesTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleCategoriesResponseInfo](../interfaces/IAppDataAppleCategoriesResponseInfo.md).[tasks](../interfaces/IAppDataAppleCategoriesResponseInfo.md#tasks)

#### Defined in

[main.ts:182677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182677)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleCategoriesResponseInfo](../interfaces/IAppDataAppleCategoriesResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleCategoriesResponseInfo](../interfaces/IAppDataAppleCategoriesResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleCategoriesResponseInfo](../interfaces/IAppDataAppleCategoriesResponseInfo.md).[time](../interfaces/IAppDataAppleCategoriesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleCategoriesResponseInfo](../interfaces/IAppDataAppleCategoriesResponseInfo.md).[version](../interfaces/IAppDataAppleCategoriesResponseInfo.md#version)

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

[main.ts:182685](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182685)

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

[main.ts:182707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182707)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:182700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182700)
