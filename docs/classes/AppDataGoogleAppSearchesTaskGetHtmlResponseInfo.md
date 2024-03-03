[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppSearchesTaskGetHtmlResponseInfo

# Class: AppDataGoogleAppSearchesTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`**

## Implements

- [`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#cost)
- [status\_code](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#status_message)
- [tasks](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tasks_error)
- [time](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#time)
- [version](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#init)
- [toJSON](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppSearchesTaskGetHtmlResponseInfo**(`data?`): [`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md) |

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

main.ts:178305

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[cost](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#cost)

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

[IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#status_code)

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

[IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

main.ts:22648

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleAppSearchesTaskGetHtmlTaskInfo`](AppDataGoogleAppSearchesTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

main.ts:178301

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

main.ts:22654

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

main.ts:22656

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[time](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

main.ts:22650

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md).[version](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md#version)

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

main.ts:178309

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

main.ts:178331

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

main.ts:178324
