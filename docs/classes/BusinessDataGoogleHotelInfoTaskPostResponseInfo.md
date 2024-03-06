[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTaskPostResponseInfo

# Class: BusinessDataGoogleHotelInfoTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleHotelInfoTaskPostResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#time)
- [version](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTaskPostResponseInfo**(`data?`): [`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:195034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195034)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelInfoTaskPostTaskInfo`](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:195030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195030)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelInfoTaskPostResponseInfo.md#version)

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

[main.ts:195038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195038)

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

[main.ts:195060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195060)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:195053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195053)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")