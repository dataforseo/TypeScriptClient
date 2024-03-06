[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksCompetitorsLiveResponseInfo

# Class: BacklinksCompetitorsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksCompetitorsLiveResponseInfo`**

## Implements

- [`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksCompetitorsLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksCompetitorsLiveResponseInfo.md#cost)
- [status\_code](BacklinksCompetitorsLiveResponseInfo.md#status_code)
- [status\_message](BacklinksCompetitorsLiveResponseInfo.md#status_message)
- [tasks](BacklinksCompetitorsLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksCompetitorsLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksCompetitorsLiveResponseInfo.md#tasks_error)
- [time](BacklinksCompetitorsLiveResponseInfo.md#time)
- [version](BacklinksCompetitorsLiveResponseInfo.md#version)

### Methods

- [init](BacklinksCompetitorsLiveResponseInfo.md#init)
- [toJSON](BacklinksCompetitorsLiveResponseInfo.md#tojson)
- [fromJS](BacklinksCompetitorsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksCompetitorsLiveResponseInfo**(`data?`): [`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksCompetitorsLiveResponseInfo`](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md) |

#### Returns

[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:136324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136324)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksCompetitorsLiveResponseInfo](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[cost](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#cost)

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

[IBacklinksCompetitorsLiveResponseInfo](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[status_code](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#status_code)

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

[IBacklinksCompetitorsLiveResponseInfo](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[status_message](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksCompetitorsLiveTaskInfo`](BacklinksCompetitorsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksCompetitorsLiveResponseInfo](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[tasks](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:136320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136320)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksCompetitorsLiveResponseInfo](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksCompetitorsLiveResponseInfo](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksCompetitorsLiveResponseInfo](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[time](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksCompetitorsLiveResponseInfo](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md).[version](../interfaces/IBacklinksCompetitorsLiveResponseInfo.md#version)

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

[main.ts:136328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136328)

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

[main.ts:136350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136350)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:136343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136343)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")