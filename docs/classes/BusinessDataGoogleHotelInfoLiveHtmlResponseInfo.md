[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoLiveHtmlResponseInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#time)
- [version](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoLiveHtmlResponseInfo**(`data?`): [`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:197708](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197708)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelInfoLiveHtmlTaskInfo`](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:197704](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197704)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md#version)

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

[main.ts:197712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197712)

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

[main.ts:197734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197734)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:197727](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197727)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")