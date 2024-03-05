[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsCategoriesResponseInfo

# Class: BusinessDataBusinessListingsCategoriesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BusinessDataBusinessListingsCategoriesResponseInfo`**

## Implements

- [`IBusinessDataBusinessListingsCategoriesResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsCategoriesResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataBusinessListingsCategoriesResponseInfo.md#cost)
- [status\_code](BusinessDataBusinessListingsCategoriesResponseInfo.md#status_code)
- [status\_message](BusinessDataBusinessListingsCategoriesResponseInfo.md#status_message)
- [tasks](BusinessDataBusinessListingsCategoriesResponseInfo.md#tasks)
- [tasks\_count](BusinessDataBusinessListingsCategoriesResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataBusinessListingsCategoriesResponseInfo.md#tasks_error)
- [time](BusinessDataBusinessListingsCategoriesResponseInfo.md#time)
- [version](BusinessDataBusinessListingsCategoriesResponseInfo.md#version)

### Methods

- [init](BusinessDataBusinessListingsCategoriesResponseInfo.md#init)
- [toJSON](BusinessDataBusinessListingsCategoriesResponseInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsCategoriesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsCategoriesResponseInfo**(`data?`): [`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsCategoriesResponseInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md) |

#### Returns

[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:188121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188121)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataBusinessListingsCategoriesResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md).[cost](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md#cost)

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

[IBusinessDataBusinessListingsCategoriesResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md).[status_code](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md#status_code)

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

[IBusinessDataBusinessListingsCategoriesResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md).[status_message](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BusinessDataBusinessListingsCategoriesTaskInfo`](BusinessDataBusinessListingsCategoriesTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataBusinessListingsCategoriesResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md).[tasks](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md#tasks)

#### Defined in

[main.ts:188117](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188117)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataBusinessListingsCategoriesResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md).[tasks_count](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataBusinessListingsCategoriesResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md).[tasks_error](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataBusinessListingsCategoriesResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md).[time](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataBusinessListingsCategoriesResponseInfo](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md).[version](../interfaces/IBusinessDataBusinessListingsCategoriesResponseInfo.md#version)

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

[main.ts:188125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188125)

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

[main.ts:188147](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188147)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:188140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L188140)
