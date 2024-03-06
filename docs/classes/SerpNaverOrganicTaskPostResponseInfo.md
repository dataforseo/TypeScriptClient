[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskPostResponseInfo

# Class: SerpNaverOrganicTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpNaverOrganicTaskPostResponseInfo`**

## Implements

- [`ISerpNaverOrganicTaskPostResponseInfo`](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTaskPostResponseInfo.md#cost)
- [status\_code](SerpNaverOrganicTaskPostResponseInfo.md#status_code)
- [status\_message](SerpNaverOrganicTaskPostResponseInfo.md#status_message)
- [tasks](SerpNaverOrganicTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpNaverOrganicTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpNaverOrganicTaskPostResponseInfo.md#tasks_error)
- [time](SerpNaverOrganicTaskPostResponseInfo.md#time)
- [version](SerpNaverOrganicTaskPostResponseInfo.md#version)

### Methods

- [init](SerpNaverOrganicTaskPostResponseInfo.md#init)
- [toJSON](SerpNaverOrganicTaskPostResponseInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskPostResponseInfo**(`data?`): [`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskPostResponseInfo`](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md) |

#### Returns

[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:67533](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67533)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTaskPostResponseInfo](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md).[cost](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md#cost)

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

[ISerpNaverOrganicTaskPostResponseInfo](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md).[status_code](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md#status_code)

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

[ISerpNaverOrganicTaskPostResponseInfo](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md).[status_message](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpNaverOrganicTaskPostTaskInfo`](SerpNaverOrganicTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpNaverOrganicTaskPostResponseInfo](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md).[tasks](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:67529](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67529)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpNaverOrganicTaskPostResponseInfo](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpNaverOrganicTaskPostResponseInfo](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpNaverOrganicTaskPostResponseInfo](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md).[time](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpNaverOrganicTaskPostResponseInfo](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md).[version](../interfaces/ISerpNaverOrganicTaskPostResponseInfo.md#version)

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

[main.ts:67537](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67537)

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

[main.ts:67559](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67559)

___


### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:67552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67552)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")