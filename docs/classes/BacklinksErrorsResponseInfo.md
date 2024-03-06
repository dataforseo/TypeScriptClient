[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksErrorsResponseInfo

# Class: BacklinksErrorsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksErrorsResponseInfo`**

## Implements

- [`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksErrorsResponseInfo.md#constructor)

### Properties

- [cost](BacklinksErrorsResponseInfo.md#cost)
- [status\_code](BacklinksErrorsResponseInfo.md#status_code)
- [status\_message](BacklinksErrorsResponseInfo.md#status_message)
- [tasks](BacklinksErrorsResponseInfo.md#tasks)
- [tasks\_count](BacklinksErrorsResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksErrorsResponseInfo.md#tasks_error)
- [time](BacklinksErrorsResponseInfo.md#time)
- [version](BacklinksErrorsResponseInfo.md#version)

### Methods

- [init](BacklinksErrorsResponseInfo.md#init)
- [toJSON](BacklinksErrorsResponseInfo.md#tojson)
- [fromJS](BacklinksErrorsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksErrorsResponseInfo**(`data?`): [`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksErrorsResponseInfo`](../interfaces/IBacklinksErrorsResponseInfo.md) |

#### Returns

[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:128578](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128578)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksErrorsResponseInfo](../interfaces/IBacklinksErrorsResponseInfo.md).[cost](../interfaces/IBacklinksErrorsResponseInfo.md#cost)

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

[IBacklinksErrorsResponseInfo](../interfaces/IBacklinksErrorsResponseInfo.md).[status_code](../interfaces/IBacklinksErrorsResponseInfo.md#status_code)

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

[IBacklinksErrorsResponseInfo](../interfaces/IBacklinksErrorsResponseInfo.md).[status_message](../interfaces/IBacklinksErrorsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksErrorsTaskInfo`](BacklinksErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksErrorsResponseInfo](../interfaces/IBacklinksErrorsResponseInfo.md).[tasks](../interfaces/IBacklinksErrorsResponseInfo.md#tasks)

#### Defined in

[main.ts:128574](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128574)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksErrorsResponseInfo](../interfaces/IBacklinksErrorsResponseInfo.md).[tasks_count](../interfaces/IBacklinksErrorsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksErrorsResponseInfo](../interfaces/IBacklinksErrorsResponseInfo.md).[tasks_error](../interfaces/IBacklinksErrorsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksErrorsResponseInfo](../interfaces/IBacklinksErrorsResponseInfo.md).[time](../interfaces/IBacklinksErrorsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksErrorsResponseInfo](../interfaces/IBacklinksErrorsResponseInfo.md).[version](../interfaces/IBacklinksErrorsResponseInfo.md#version)

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

[main.ts:128582](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128582)

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

[main.ts:128604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128604)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:128597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128597)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")