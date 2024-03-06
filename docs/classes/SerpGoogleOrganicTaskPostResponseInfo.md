[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskPostResponseInfo

# Class: SerpGoogleOrganicTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleOrganicTaskPostResponseInfo`**

## Implements

- [`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTaskPostResponseInfo.md#cost)
- [status\_code](SerpGoogleOrganicTaskPostResponseInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTaskPostResponseInfo.md#status_message)
- [tasks](SerpGoogleOrganicTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleOrganicTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleOrganicTaskPostResponseInfo.md#tasks_error)
- [time](SerpGoogleOrganicTaskPostResponseInfo.md#time)
- [version](SerpGoogleOrganicTaskPostResponseInfo.md#version)

### Methods

- [init](SerpGoogleOrganicTaskPostResponseInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskPostResponseInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskPostResponseInfo**(`data?`): [`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskPostResponseInfo`](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:24675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24675)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTaskPostResponseInfo](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[cost](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#cost)

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

[ISerpGoogleOrganicTaskPostResponseInfo](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#status_code)

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

[ISerpGoogleOrganicTaskPostResponseInfo](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleOrganicTaskPostTaskInfo`](SerpGoogleOrganicTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleOrganicTaskPostResponseInfo](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[tasks](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:24671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24671)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleOrganicTaskPostResponseInfo](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleOrganicTaskPostResponseInfo](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTaskPostResponseInfo](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[time](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleOrganicTaskPostResponseInfo](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md).[version](../interfaces/ISerpGoogleOrganicTaskPostResponseInfo.md#version)

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

[main.ts:24679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24679)

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

[main.ts:24701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24701)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:24694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24694)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")