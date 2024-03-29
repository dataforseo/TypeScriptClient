[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTasksFixedResponseInfo

# Class: SerpYahooOrganicTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYahooOrganicTasksFixedResponseInfo`**

## Implements

- [`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicTasksFixedResponseInfo.md#cost)
- [status\_code](SerpYahooOrganicTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpYahooOrganicTasksFixedResponseInfo.md#status_message)
- [tasks](SerpYahooOrganicTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpYahooOrganicTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpYahooOrganicTasksFixedResponseInfo.md#tasks_error)
- [time](SerpYahooOrganicTasksFixedResponseInfo.md#time)
- [version](SerpYahooOrganicTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpYahooOrganicTasksFixedResponseInfo.md#init)
- [toJSON](SerpYahooOrganicTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpYahooOrganicTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTasksFixedResponseInfo**(`data?`): [`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTasksFixedResponseInfo`](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md) |

#### Returns

[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:63673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63673)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicTasksFixedResponseInfo](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[cost](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#cost)

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

[ISerpYahooOrganicTasksFixedResponseInfo](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#status_code)

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

[ISerpYahooOrganicTasksFixedResponseInfo](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYahooOrganicTasksFixedTaskInfo`](SerpYahooOrganicTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYahooOrganicTasksFixedResponseInfo](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#tasks)

#### Defined in

[main.ts:63669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63669)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYahooOrganicTasksFixedResponseInfo](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYahooOrganicTasksFixedResponseInfo](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYahooOrganicTasksFixedResponseInfo](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[time](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYahooOrganicTasksFixedResponseInfo](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md).[version](../interfaces/ISerpYahooOrganicTasksFixedResponseInfo.md#version)

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

[main.ts:63677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63677)

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

[main.ts:63699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63699)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:63692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L63692)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")