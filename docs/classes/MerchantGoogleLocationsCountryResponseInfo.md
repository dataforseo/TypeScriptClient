[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleLocationsCountryResponseInfo

# Class: MerchantGoogleLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantGoogleLocationsCountryResponseInfo`**

## Implements

- [`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleLocationsCountryResponseInfo.md#cost)
- [status\_code](MerchantGoogleLocationsCountryResponseInfo.md#status_code)
- [status\_message](MerchantGoogleLocationsCountryResponseInfo.md#status_message)
- [tasks](MerchantGoogleLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleLocationsCountryResponseInfo.md#tasks_error)
- [time](MerchantGoogleLocationsCountryResponseInfo.md#time)
- [version](MerchantGoogleLocationsCountryResponseInfo.md#version)

### Methods

- [init](MerchantGoogleLocationsCountryResponseInfo.md#init)
- [toJSON](MerchantGoogleLocationsCountryResponseInfo.md#tojson)
- [fromJS](MerchantGoogleLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleLocationsCountryResponseInfo**(`data?`): [`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleLocationsCountryResponseInfo`](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md) |

#### Returns

[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:163838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163838)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleLocationsCountryResponseInfo](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[cost](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#cost)

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

[IMerchantGoogleLocationsCountryResponseInfo](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[status_code](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#status_code)

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

[IMerchantGoogleLocationsCountryResponseInfo](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[status_message](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantGoogleLocationsCountryTaskInfo`](MerchantGoogleLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleLocationsCountryResponseInfo](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[tasks](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#tasks)

#### Defined in

[main.ts:163834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163834)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleLocationsCountryResponseInfo](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleLocationsCountryResponseInfo](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleLocationsCountryResponseInfo](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[time](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleLocationsCountryResponseInfo](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md).[version](../interfaces/IMerchantGoogleLocationsCountryResponseInfo.md#version)

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

[main.ts:163842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163842)

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

[main.ts:163864](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163864)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:163857](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163857)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")