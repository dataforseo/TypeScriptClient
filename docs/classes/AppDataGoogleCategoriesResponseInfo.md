[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleCategoriesResponseInfo

# Class: AppDataGoogleCategoriesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleCategoriesResponseInfo`**

## Implements

- [`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleCategoriesResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleCategoriesResponseInfo.md#cost)
- [status\_code](AppDataGoogleCategoriesResponseInfo.md#status_code)
- [status\_message](AppDataGoogleCategoriesResponseInfo.md#status_message)
- [tasks](AppDataGoogleCategoriesResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleCategoriesResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleCategoriesResponseInfo.md#tasks_error)
- [time](AppDataGoogleCategoriesResponseInfo.md#time)
- [version](AppDataGoogleCategoriesResponseInfo.md#version)

### Methods

- [init](AppDataGoogleCategoriesResponseInfo.md#init)
- [toJSON](AppDataGoogleCategoriesResponseInfo.md#tojson)
- [fromJS](AppDataGoogleCategoriesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleCategoriesResponseInfo**(`data?`): [`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleCategoriesResponseInfo`](../interfaces/IAppDataGoogleCategoriesResponseInfo.md) |

#### Returns

[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:177085](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177085)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleCategoriesResponseInfo](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[cost](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#cost)

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

[IAppDataGoogleCategoriesResponseInfo](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[status_code](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#status_code)

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

[IAppDataGoogleCategoriesResponseInfo](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[status_message](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleCategoriesTaskInfo`](AppDataGoogleCategoriesTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleCategoriesResponseInfo](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[tasks](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#tasks)

#### Defined in

[main.ts:177081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177081)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleCategoriesResponseInfo](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleCategoriesResponseInfo](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleCategoriesResponseInfo](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[time](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleCategoriesResponseInfo](../interfaces/IAppDataGoogleCategoriesResponseInfo.md).[version](../interfaces/IAppDataGoogleCategoriesResponseInfo.md#version)

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

[main.ts:177089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177089)

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

[main.ts:177111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177111)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:177104](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177104)
