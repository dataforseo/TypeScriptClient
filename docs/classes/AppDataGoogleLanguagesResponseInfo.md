[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleLanguagesResponseInfo

# Class: AppDataGoogleLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`AppDataGoogleLanguagesResponseInfo`**

## Implements

- [`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleLanguagesResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleLanguagesResponseInfo.md#cost)
- [status\_code](AppDataGoogleLanguagesResponseInfo.md#status_code)
- [status\_message](AppDataGoogleLanguagesResponseInfo.md#status_message)
- [tasks](AppDataGoogleLanguagesResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleLanguagesResponseInfo.md#tasks_error)
- [time](AppDataGoogleLanguagesResponseInfo.md#time)
- [version](AppDataGoogleLanguagesResponseInfo.md#version)

### Methods

- [init](AppDataGoogleLanguagesResponseInfo.md#init)
- [toJSON](AppDataGoogleLanguagesResponseInfo.md#tojson)
- [fromJS](AppDataGoogleLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleLanguagesResponseInfo**(`data?`): [`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleLanguagesResponseInfo`](../interfaces/IAppDataGoogleLanguagesResponseInfo.md) |

#### Returns

[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:177447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177447)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleLanguagesResponseInfo](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[cost](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#cost)

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

[IAppDataGoogleLanguagesResponseInfo](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[status_code](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#status_code)

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

[IAppDataGoogleLanguagesResponseInfo](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[status_message](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`AppDataGoogleLanguagesTaskInfo`](AppDataGoogleLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleLanguagesResponseInfo](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[tasks](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#tasks)

#### Defined in

[main.ts:177443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177443)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleLanguagesResponseInfo](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleLanguagesResponseInfo](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleLanguagesResponseInfo](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[time](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleLanguagesResponseInfo](../interfaces/IAppDataGoogleLanguagesResponseInfo.md).[version](../interfaces/IAppDataGoogleLanguagesResponseInfo.md#version)

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

[main.ts:177451](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177451)

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

[main.ts:177473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177473)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:177466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177466)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")