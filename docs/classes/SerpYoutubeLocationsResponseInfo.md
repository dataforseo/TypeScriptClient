[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeLocationsResponseInfo

# Class: SerpYoutubeLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYoutubeLocationsResponseInfo`**

## Implements

- [`ISerpYoutubeLocationsResponseInfo`](../interfaces/ISerpYoutubeLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeLocationsResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeLocationsResponseInfo.md#cost)
- [status\_code](SerpYoutubeLocationsResponseInfo.md#status_code)
- [status\_message](SerpYoutubeLocationsResponseInfo.md#status_message)
- [tasks](SerpYoutubeLocationsResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeLocationsResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeLocationsResponseInfo.md#tasks_error)
- [time](SerpYoutubeLocationsResponseInfo.md#time)
- [version](SerpYoutubeLocationsResponseInfo.md#version)

### Methods

- [init](SerpYoutubeLocationsResponseInfo.md#init)
- [toJSON](SerpYoutubeLocationsResponseInfo.md#tojson)
- [fromJS](SerpYoutubeLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeLocationsResponseInfo**(`data?`): [`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeLocationsResponseInfo`](../interfaces/ISerpYoutubeLocationsResponseInfo.md) |

#### Returns

[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:57319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57319)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeLocationsResponseInfo](../interfaces/ISerpYoutubeLocationsResponseInfo.md).[cost](../interfaces/ISerpYoutubeLocationsResponseInfo.md#cost)

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

[ISerpYoutubeLocationsResponseInfo](../interfaces/ISerpYoutubeLocationsResponseInfo.md).[status_code](../interfaces/ISerpYoutubeLocationsResponseInfo.md#status_code)

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

[ISerpYoutubeLocationsResponseInfo](../interfaces/ISerpYoutubeLocationsResponseInfo.md).[status_message](../interfaces/ISerpYoutubeLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYoutubeLocationsTaskInfo`](SerpYoutubeLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeLocationsResponseInfo](../interfaces/ISerpYoutubeLocationsResponseInfo.md).[tasks](../interfaces/ISerpYoutubeLocationsResponseInfo.md#tasks)

#### Defined in

[main.ts:57315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57315)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeLocationsResponseInfo](../interfaces/ISerpYoutubeLocationsResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeLocationsResponseInfo](../interfaces/ISerpYoutubeLocationsResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeLocationsResponseInfo](../interfaces/ISerpYoutubeLocationsResponseInfo.md).[time](../interfaces/ISerpYoutubeLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeLocationsResponseInfo](../interfaces/ISerpYoutubeLocationsResponseInfo.md).[version](../interfaces/ISerpYoutubeLocationsResponseInfo.md#version)

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

[main.ts:57323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57323)

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

[main.ts:57345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57345)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:57338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57338)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")