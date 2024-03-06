[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTasksReadyResponseInfo

# Class: SerpGoogleSearchByImageTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleSearchByImageTasksReadyResponseInfo`**

## Implements

- [`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleSearchByImageTasksReadyResponseInfo.md#cost)
- [status\_code](SerpGoogleSearchByImageTasksReadyResponseInfo.md#status_code)
- [status\_message](SerpGoogleSearchByImageTasksReadyResponseInfo.md#status_message)
- [tasks](SerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks_error)
- [time](SerpGoogleSearchByImageTasksReadyResponseInfo.md#time)
- [version](SerpGoogleSearchByImageTasksReadyResponseInfo.md#version)

### Methods

- [init](SerpGoogleSearchByImageTasksReadyResponseInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTasksReadyResponseInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTasksReadyResponseInfo**(`data?`): [`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTasksReadyResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:47753](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47753)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[cost](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#cost)

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

[ISerpGoogleSearchByImageTasksReadyResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[status_code](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#status_code)

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

[ISerpGoogleSearchByImageTasksReadyResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[status_message](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleSearchByImageTasksReadyTaskInfo`](SerpGoogleSearchByImageTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[tasks](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:47749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47749)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[time](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleSearchByImageTasksReadyResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md).[version](../interfaces/ISerpGoogleSearchByImageTasksReadyResponseInfo.md#version)

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

[main.ts:47757](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47757)

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

[main.ts:47779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47779)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:47772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47772)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")