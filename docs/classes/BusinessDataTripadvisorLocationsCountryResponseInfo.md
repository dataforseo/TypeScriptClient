[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorLocationsCountryResponseInfo

# Class: BusinessDataTripadvisorLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataTripadvisorLocationsCountryResponseInfo`**

## Implements

- [`IBusinessDataTripadvisorLocationsCountryResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorLocationsCountryResponseInfo.md#cost)
- [status\_code](BusinessDataTripadvisorLocationsCountryResponseInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorLocationsCountryResponseInfo.md#status_message)
- [tasks](BusinessDataTripadvisorLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](BusinessDataTripadvisorLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataTripadvisorLocationsCountryResponseInfo.md#tasks_error)
- [time](BusinessDataTripadvisorLocationsCountryResponseInfo.md#time)
- [version](BusinessDataTripadvisorLocationsCountryResponseInfo.md#version)

### Methods

- [init](BusinessDataTripadvisorLocationsCountryResponseInfo.md#init)
- [toJSON](BusinessDataTripadvisorLocationsCountryResponseInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorLocationsCountryResponseInfo**(`data?`): [`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorLocationsCountryResponseInfo`](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md) |

#### Returns

[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:200679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200679)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResponseInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md).[cost](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md#cost)

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

[IBusinessDataTripadvisorLocationsCountryResponseInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md#status_code)

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

[IBusinessDataTripadvisorLocationsCountryResponseInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataTripadvisorLocationsCountryTaskInfo`](BusinessDataTripadvisorLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResponseInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md).[tasks](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md#tasks)

#### Defined in

[main.ts:200675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200675)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResponseInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md).[tasks_count](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResponseInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md).[tasks_error](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResponseInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md).[time](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataTripadvisorLocationsCountryResponseInfo](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md).[version](../interfaces/IBusinessDataTripadvisorLocationsCountryResponseInfo.md#version)

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

[main.ts:200683](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200683)

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

[main.ts:200705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200705)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:200698](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200698)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")