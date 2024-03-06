[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsTaskPostResponseInfo

# Class: SerpYoutubeVideoCommentsTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYoutubeVideoCommentsTaskPostResponseInfo`**

## Implements

- [`ISerpYoutubeVideoCommentsTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#time)
- [version](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsTaskPostResponseInfo**(`data?`): [`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsTaskPostResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:61351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61351)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md#cost)

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

[ISerpYoutubeVideoCommentsTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md#status_code)

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

[ISerpYoutubeVideoCommentsTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoCommentsTaskPostTaskInfo`](SerpYoutubeVideoCommentsTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:61347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61347)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoCommentsTaskPostResponseInfo](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoCommentsTaskPostResponseInfo.md#version)

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

[main.ts:61355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61355)

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

[main.ts:61377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61377)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:61370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L61370)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")