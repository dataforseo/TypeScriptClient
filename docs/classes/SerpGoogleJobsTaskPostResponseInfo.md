[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTaskPostResponseInfo

# Class: SerpGoogleJobsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleJobsTaskPostResponseInfo`**

## Implements

- [`ISerpGoogleJobsTaskPostResponseInfo`](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleJobsTaskPostResponseInfo.md#cost)
- [status\_code](SerpGoogleJobsTaskPostResponseInfo.md#status_code)
- [status\_message](SerpGoogleJobsTaskPostResponseInfo.md#status_message)
- [tasks](SerpGoogleJobsTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleJobsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleJobsTaskPostResponseInfo.md#tasks_error)
- [time](SerpGoogleJobsTaskPostResponseInfo.md#time)
- [version](SerpGoogleJobsTaskPostResponseInfo.md#version)

### Methods

- [init](SerpGoogleJobsTaskPostResponseInfo.md#init)
- [toJSON](SerpGoogleJobsTaskPostResponseInfo.md#tojson)
- [fromJS](SerpGoogleJobsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTaskPostResponseInfo**(`data?`): [`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTaskPostResponseInfo`](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md) |

#### Returns

[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:48633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48633)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleJobsTaskPostResponseInfo](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md).[cost](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md#cost)

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

[ISerpGoogleJobsTaskPostResponseInfo](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md).[status_code](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md#status_code)

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

[ISerpGoogleJobsTaskPostResponseInfo](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md).[status_message](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleJobsTaskPostTaskInfo`](SerpGoogleJobsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleJobsTaskPostResponseInfo](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md).[tasks](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:48629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48629)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleJobsTaskPostResponseInfo](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleJobsTaskPostResponseInfo](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleJobsTaskPostResponseInfo](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md).[time](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleJobsTaskPostResponseInfo](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md).[version](../interfaces/ISerpGoogleJobsTaskPostResponseInfo.md#version)

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

[main.ts:48637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48637)

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

[main.ts:48659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48659)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:48652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48652)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")