[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo

# Class: BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`**

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#time)
- [version](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#init)
- [toJSON](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo**(`data?`): [`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md) |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:190773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190773)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#cost)

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

[IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#status_code)

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

[IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo`](BusinessDataGoogleMyBusinessInfoTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:190769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190769)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md).[time](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md).[version](../interfaces/IBusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md#version)

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

[main.ts:190777](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190777)

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

[main.ts:190799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190799)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:190792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190792)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")