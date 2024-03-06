[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleLanguagesResponseInfo

# Class: BusinessDataGoogleLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataGoogleLanguagesResponseInfo`**

## Implements

- [`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleLanguagesResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleLanguagesResponseInfo.md#cost)
- [status\_code](BusinessDataGoogleLanguagesResponseInfo.md#status_code)
- [status\_message](BusinessDataGoogleLanguagesResponseInfo.md#status_message)
- [tasks](BusinessDataGoogleLanguagesResponseInfo.md#tasks)
- [tasks\_count](BusinessDataGoogleLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataGoogleLanguagesResponseInfo.md#tasks_error)
- [time](BusinessDataGoogleLanguagesResponseInfo.md#time)
- [version](BusinessDataGoogleLanguagesResponseInfo.md#version)

### Methods

- [init](BusinessDataGoogleLanguagesResponseInfo.md#init)
- [toJSON](BusinessDataGoogleLanguagesResponseInfo.md#tojson)
- [fromJS](BusinessDataGoogleLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleLanguagesResponseInfo**(`data?`): [`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleLanguagesResponseInfo`](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md) |

#### Returns

[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:190669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190669)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleLanguagesResponseInfo](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[cost](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#cost)

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

[IBusinessDataGoogleLanguagesResponseInfo](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[status_code](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#status_code)

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

[IBusinessDataGoogleLanguagesResponseInfo](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[status_message](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataGoogleLanguagesTaskInfo`](BusinessDataGoogleLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataGoogleLanguagesResponseInfo](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[tasks](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#tasks)

#### Defined in

[main.ts:190665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190665)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataGoogleLanguagesResponseInfo](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[tasks_count](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataGoogleLanguagesResponseInfo](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[tasks_error](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataGoogleLanguagesResponseInfo](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[time](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataGoogleLanguagesResponseInfo](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md).[version](../interfaces/IBusinessDataGoogleLanguagesResponseInfo.md#version)

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

[main.ts:190673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190673)

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

[main.ts:190695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190695)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:190688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190688)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")