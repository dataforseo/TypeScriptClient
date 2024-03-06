[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYoutubeLocationsCountryResponseInfo

# Class: SerpYoutubeLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYoutubeLocationsCountryResponseInfo`**

## Implements

- [`ISerpYoutubeLocationsCountryResponseInfo`](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYoutubeLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](SerpYoutubeLocationsCountryResponseInfo.md#cost)
- [status\_code](SerpYoutubeLocationsCountryResponseInfo.md#status_code)
- [status\_message](SerpYoutubeLocationsCountryResponseInfo.md#status_message)
- [tasks](SerpYoutubeLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](SerpYoutubeLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](SerpYoutubeLocationsCountryResponseInfo.md#tasks_error)
- [time](SerpYoutubeLocationsCountryResponseInfo.md#time)
- [version](SerpYoutubeLocationsCountryResponseInfo.md#version)

### Methods

- [init](SerpYoutubeLocationsCountryResponseInfo.md#init)
- [toJSON](SerpYoutubeLocationsCountryResponseInfo.md#tojson)
- [fromJS](SerpYoutubeLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYoutubeLocationsCountryResponseInfo**(`data?`): [`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYoutubeLocationsCountryResponseInfo`](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md) |

#### Returns

[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:57517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57517)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYoutubeLocationsCountryResponseInfo](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md).[cost](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md#cost)

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

[ISerpYoutubeLocationsCountryResponseInfo](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md).[status_code](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md#status_code)

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

[ISerpYoutubeLocationsCountryResponseInfo](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md).[status_message](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYoutubeLocationsCountryTaskInfo`](SerpYoutubeLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYoutubeLocationsCountryResponseInfo](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md).[tasks](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md#tasks)

#### Defined in

[main.ts:57513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57513)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYoutubeLocationsCountryResponseInfo](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md).[tasks_count](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYoutubeLocationsCountryResponseInfo](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md).[tasks_error](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYoutubeLocationsCountryResponseInfo](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md).[time](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYoutubeLocationsCountryResponseInfo](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md).[version](../interfaces/ISerpYoutubeLocationsCountryResponseInfo.md#version)

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

[main.ts:57521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57521)

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

[main.ts:57543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57543)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:57536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L57536)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")