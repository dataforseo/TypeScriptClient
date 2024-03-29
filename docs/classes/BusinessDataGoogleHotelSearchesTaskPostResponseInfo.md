[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesTaskPostResponseInfo

# Class: BusinessDataGoogleHotelSearchesTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`**

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#time)
- [version](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesTaskPostResponseInfo**(`data?`): [`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:193151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193151)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#cost)

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

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_code)

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

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleHotelSearchesTaskPostTaskInfo`](BusinessDataGoogleHotelSearchesTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:193147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193147)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskPostResponseInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataGoogleHotelSearchesTaskPostResponseInfo.md#version)

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

[main.ts:193155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193155)

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

[main.ts:193177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193177)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:193170](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193170)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")