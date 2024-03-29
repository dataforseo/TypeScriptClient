[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeVideoCommentsLiveAdvancedResponseInfo

# Class: SerpYoutubeVideoCommentsLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`**

## Implements

- [`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#time)
- [version](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeVideoCommentsLiveAdvancedResponseInfo**(`data?`): [`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:62583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62583)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#cost)

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

[ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#status_code)

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

[ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYoutubeVideoCommentsLiveAdvancedTaskInfo`](SerpYoutubeVideoCommentsLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:62579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62579)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md#version)

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

[main.ts:62587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62587)

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

[main.ts:62609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62609)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:62602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L62602)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")