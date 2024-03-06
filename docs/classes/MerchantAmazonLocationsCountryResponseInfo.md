[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonLocationsCountryResponseInfo

# Class: MerchantAmazonLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantAmazonLocationsCountryResponseInfo`**

## Implements

- [`IMerchantAmazonLocationsCountryResponseInfo`](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](MerchantAmazonLocationsCountryResponseInfo.md#cost)
- [status\_code](MerchantAmazonLocationsCountryResponseInfo.md#status_code)
- [status\_message](MerchantAmazonLocationsCountryResponseInfo.md#status_message)
- [tasks](MerchantAmazonLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](MerchantAmazonLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](MerchantAmazonLocationsCountryResponseInfo.md#tasks_error)
- [time](MerchantAmazonLocationsCountryResponseInfo.md#time)
- [version](MerchantAmazonLocationsCountryResponseInfo.md#version)

### Methods

- [init](MerchantAmazonLocationsCountryResponseInfo.md#init)
- [toJSON](MerchantAmazonLocationsCountryResponseInfo.md#tojson)
- [fromJS](MerchantAmazonLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonLocationsCountryResponseInfo**(`data?`): [`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonLocationsCountryResponseInfo`](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md) |

#### Returns

[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:170082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170082)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonLocationsCountryResponseInfo](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md).[cost](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md#cost)

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

[IMerchantAmazonLocationsCountryResponseInfo](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md).[status_code](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md#status_code)

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

[IMerchantAmazonLocationsCountryResponseInfo](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md).[status_message](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantAmazonLocationsCountryTaskInfo`](MerchantAmazonLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantAmazonLocationsCountryResponseInfo](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md).[tasks](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md#tasks)

#### Defined in

[main.ts:170078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170078)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantAmazonLocationsCountryResponseInfo](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md).[tasks_count](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantAmazonLocationsCountryResponseInfo](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md).[tasks_error](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantAmazonLocationsCountryResponseInfo](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md).[time](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantAmazonLocationsCountryResponseInfo](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md).[version](../interfaces/IMerchantAmazonLocationsCountryResponseInfo.md#version)

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

[main.ts:170086](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170086)

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

[main.ts:170108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170108)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:170101](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170101)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")