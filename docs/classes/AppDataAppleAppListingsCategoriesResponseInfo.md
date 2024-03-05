[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppListingsCategoriesResponseInfo

# Class: AppDataAppleAppListingsCategoriesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataAppleAppListingsCategoriesResponseInfo`**

## Implements

- [`IAppDataAppleAppListingsCategoriesResponseInfo`](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListingsCategoriesResponseInfo.md#constructor)

### Properties

- [cost](AppDataAppleAppListingsCategoriesResponseInfo.md#cost)
- [status\_code](AppDataAppleAppListingsCategoriesResponseInfo.md#status_code)
- [status\_message](AppDataAppleAppListingsCategoriesResponseInfo.md#status_message)
- [tasks](AppDataAppleAppListingsCategoriesResponseInfo.md#tasks)
- [tasks\_count](AppDataAppleAppListingsCategoriesResponseInfo.md#tasks_count)
- [tasks\_error](AppDataAppleAppListingsCategoriesResponseInfo.md#tasks_error)
- [time](AppDataAppleAppListingsCategoriesResponseInfo.md#time)
- [version](AppDataAppleAppListingsCategoriesResponseInfo.md#version)

### Methods

- [init](AppDataAppleAppListingsCategoriesResponseInfo.md#init)
- [toJSON](AppDataAppleAppListingsCategoriesResponseInfo.md#tojson)
- [fromJS](AppDataAppleAppListingsCategoriesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListingsCategoriesResponseInfo**(`data?`): [`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListingsCategoriesResponseInfo`](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md) |

#### Returns

[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:186683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186683)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataAppleAppListingsCategoriesResponseInfo](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md).[cost](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md#cost)

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

[IAppDataAppleAppListingsCategoriesResponseInfo](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md).[status_code](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md#status_code)

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

[IAppDataAppleAppListingsCategoriesResponseInfo](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md).[status_message](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`AppDataAppleAppListingsCategoriesTaskInfo`](AppDataAppleAppListingsCategoriesTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataAppleAppListingsCategoriesResponseInfo](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md).[tasks](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md#tasks)

#### Defined in

[main.ts:186679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186679)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataAppleAppListingsCategoriesResponseInfo](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md).[tasks_count](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataAppleAppListingsCategoriesResponseInfo](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md).[tasks_error](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataAppleAppListingsCategoriesResponseInfo](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md).[time](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataAppleAppListingsCategoriesResponseInfo](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md).[version](../interfaces/IAppDataAppleAppListingsCategoriesResponseInfo.md#version)

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

[main.ts:186687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186687)

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

[main.ts:186709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186709)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:186702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L186702)
