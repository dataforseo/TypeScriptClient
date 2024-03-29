[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTasksFixedResponseInfo

# Class: SerpGoogleSearchByImageTasksFixedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleSearchByImageTasksFixedResponseInfo`**

## Implements

- [`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTasksFixedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleSearchByImageTasksFixedResponseInfo.md#cost)
- [status\_code](SerpGoogleSearchByImageTasksFixedResponseInfo.md#status_code)
- [status\_message](SerpGoogleSearchByImageTasksFixedResponseInfo.md#status_message)
- [tasks](SerpGoogleSearchByImageTasksFixedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleSearchByImageTasksFixedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleSearchByImageTasksFixedResponseInfo.md#tasks_error)
- [time](SerpGoogleSearchByImageTasksFixedResponseInfo.md#time)
- [version](SerpGoogleSearchByImageTasksFixedResponseInfo.md#version)

### Methods

- [init](SerpGoogleSearchByImageTasksFixedResponseInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTasksFixedResponseInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTasksFixedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTasksFixedResponseInfo**(`data?`): [`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTasksFixedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:47965](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47965)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[cost](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#cost)

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

[ISerpGoogleSearchByImageTasksFixedResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[status_code](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#status_code)

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

[ISerpGoogleSearchByImageTasksFixedResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[status_message](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleSearchByImageTasksFixedTaskInfo`](SerpGoogleSearchByImageTasksFixedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[tasks](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#tasks)

#### Defined in

[main.ts:47961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47961)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[time](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleSearchByImageTasksFixedResponseInfo](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md).[version](../interfaces/ISerpGoogleSearchByImageTasksFixedResponseInfo.md#version)

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

[main.ts:47969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47969)

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

[main.ts:47991](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47991)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:47984](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47984)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")