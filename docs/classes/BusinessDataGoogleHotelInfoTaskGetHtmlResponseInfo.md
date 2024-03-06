[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo

# Class: BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#time)
- [version](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo**(`data?`): [`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:196482](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196482)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:196478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196478)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md#version)

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

[main.ts:196486](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196486)

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

[main.ts:196508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196508)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:196501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196501)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")