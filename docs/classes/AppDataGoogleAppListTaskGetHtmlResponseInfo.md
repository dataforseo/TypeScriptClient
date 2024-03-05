[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTaskGetHtmlResponseInfo

# Class: AppDataGoogleAppListTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleAppListTaskGetHtmlResponseInfo`**

## Implements

- [`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#time)
- [version](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#init)
- [toJSON](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTaskGetHtmlResponseInfo**(`data?`): [`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md) |

#### Returns

[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:179195](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179195)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#cost)

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

[IAppDataGoogleAppListTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#status_code)

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

[IAppDataGoogleAppListTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleAppListTaskGetHtmlTaskInfo`](AppDataGoogleAppListTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:179191](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179191)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[time](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md).[version](../interfaces/IAppDataGoogleAppListTaskGetHtmlResponseInfo.md#version)

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

[main.ts:179199](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179199)

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

[main.ts:179221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179221)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:179214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179214)
