[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListingsCategoriesResponseInfo

# Class: AppDataGoogleAppListingsCategoriesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleAppListingsCategoriesResponseInfo`**

## Implements

- [`IAppDataGoogleAppListingsCategoriesResponseInfo`](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListingsCategoriesResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppListingsCategoriesResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppListingsCategoriesResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppListingsCategoriesResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppListingsCategoriesResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppListingsCategoriesResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppListingsCategoriesResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppListingsCategoriesResponseInfo.md#time)
- [version](AppDataGoogleAppListingsCategoriesResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppListingsCategoriesResponseInfo.md#init)
- [toJSON](AppDataGoogleAppListingsCategoriesResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppListingsCategoriesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListingsCategoriesResponseInfo**(`data?`): [`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListingsCategoriesResponseInfo`](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md) |

#### Returns

[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:182129

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppListingsCategoriesResponseInfo](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md#cost)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[cost](BaseResponseInfo.md#cost)

#### Defined in

main.ts:22652

___

### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Implementation of

[IAppDataGoogleAppListingsCategoriesResponseInfo](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md#status_code)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_code](BaseResponseInfo.md#status_code)

#### Defined in

main.ts:22645

___

### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Implementation of

[IAppDataGoogleAppListingsCategoriesResponseInfo](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleAppListingsCategoriesTaskInfo`](AppDataGoogleAppListingsCategoriesTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppListingsCategoriesResponseInfo](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md#tasks)

#### Defined in

main.ts:182125

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppListingsCategoriesResponseInfo](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppListingsCategoriesResponseInfo](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppListingsCategoriesResponseInfo](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md).[time](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppListingsCategoriesResponseInfo](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md).[version](../interfaces/IAppDataGoogleAppListingsCategoriesResponseInfo.md#version)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[version](BaseResponseInfo.md#version)

#### Defined in

main.ts:22642

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

main.ts:182133

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

main.ts:182155

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:182148
