[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskPostResponseInfo

# Class: SerpYahooOrganicTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYahooOrganicTaskPostResponseInfo`**

## Implements

- [`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicTaskPostResponseInfo.md#cost)
- [status\_code](SerpYahooOrganicTaskPostResponseInfo.md#status_code)
- [status\_message](SerpYahooOrganicTaskPostResponseInfo.md#status_message)
- [tasks](SerpYahooOrganicTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpYahooOrganicTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpYahooOrganicTaskPostResponseInfo.md#tasks_error)
- [time](SerpYahooOrganicTaskPostResponseInfo.md#time)
- [version](SerpYahooOrganicTaskPostResponseInfo.md#version)

### Methods

- [init](SerpYahooOrganicTaskPostResponseInfo.md#init)
- [toJSON](SerpYahooOrganicTaskPostResponseInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskPostResponseInfo**(`data?`): [`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskPostResponseInfo`](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md) |

#### Returns

[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:63249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63249)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicTaskPostResponseInfo](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[cost](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#cost)

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

[ISerpYahooOrganicTaskPostResponseInfo](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[status_code](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#status_code)

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

[ISerpYahooOrganicTaskPostResponseInfo](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[status_message](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYahooOrganicTaskPostTaskInfo`](SerpYahooOrganicTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYahooOrganicTaskPostResponseInfo](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[tasks](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:63245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63245)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYahooOrganicTaskPostResponseInfo](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYahooOrganicTaskPostResponseInfo](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYahooOrganicTaskPostResponseInfo](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[time](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYahooOrganicTaskPostResponseInfo](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md).[version](../interfaces/ISerpYahooOrganicTaskPostResponseInfo.md#version)

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

[main.ts:63253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63253)

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

[main.ts:63275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63275)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:63268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63268)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")