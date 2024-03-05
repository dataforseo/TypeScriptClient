[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleLocationsResponseInfo

# Class: AppDataGoogleLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`AppDataGoogleLocationsResponseInfo`**

## Implements

- [`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleLocationsResponseInfo.md#constructor)

### Properties

- [cost](AppDataGoogleLocationsResponseInfo.md#cost)
- [status\_code](AppDataGoogleLocationsResponseInfo.md#status_code)
- [status\_message](AppDataGoogleLocationsResponseInfo.md#status_message)
- [tasks](AppDataGoogleLocationsResponseInfo.md#tasks)
- [tasks\_count](AppDataGoogleLocationsResponseInfo.md#tasks_count)
- [tasks\_error](AppDataGoogleLocationsResponseInfo.md#tasks_error)
- [time](AppDataGoogleLocationsResponseInfo.md#time)
- [version](AppDataGoogleLocationsResponseInfo.md#version)

### Methods

- [init](AppDataGoogleLocationsResponseInfo.md#init)
- [toJSON](AppDataGoogleLocationsResponseInfo.md#tojson)
- [fromJS](AppDataGoogleLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleLocationsResponseInfo**(`data?`): [`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleLocationsResponseInfo`](../interfaces/IAppDataGoogleLocationsResponseInfo.md) |

#### Returns

[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:177281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177281)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataGoogleLocationsResponseInfo](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[cost](../interfaces/IAppDataGoogleLocationsResponseInfo.md#cost)

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

[IAppDataGoogleLocationsResponseInfo](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[status_code](../interfaces/IAppDataGoogleLocationsResponseInfo.md#status_code)

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

[IAppDataGoogleLocationsResponseInfo](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[status_message](../interfaces/IAppDataGoogleLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`AppDataGoogleLocationsTaskInfo`](AppDataGoogleLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataGoogleLocationsResponseInfo](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[tasks](../interfaces/IAppDataGoogleLocationsResponseInfo.md#tasks)

#### Defined in

[main.ts:177277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177277)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataGoogleLocationsResponseInfo](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[tasks_count](../interfaces/IAppDataGoogleLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataGoogleLocationsResponseInfo](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[tasks_error](../interfaces/IAppDataGoogleLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataGoogleLocationsResponseInfo](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[time](../interfaces/IAppDataGoogleLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataGoogleLocationsResponseInfo](../interfaces/IAppDataGoogleLocationsResponseInfo.md).[version](../interfaces/IAppDataGoogleLocationsResponseInfo.md#version)

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

[main.ts:177285](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177285)

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

[main.ts:177307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177307)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:177300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L177300)
