[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksBacklinksLiveResponseInfo

# Class: BacklinksBacklinksLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksBacklinksLiveResponseInfo`**

## Implements

- [`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksBacklinksLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksBacklinksLiveResponseInfo.md#cost)
- [status\_code](BacklinksBacklinksLiveResponseInfo.md#status_code)
- [status\_message](BacklinksBacklinksLiveResponseInfo.md#status_message)
- [tasks](BacklinksBacklinksLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksBacklinksLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksBacklinksLiveResponseInfo.md#tasks_error)
- [time](BacklinksBacklinksLiveResponseInfo.md#time)
- [version](BacklinksBacklinksLiveResponseInfo.md#version)

### Methods

- [init](BacklinksBacklinksLiveResponseInfo.md#init)
- [toJSON](BacklinksBacklinksLiveResponseInfo.md#tojson)
- [fromJS](BacklinksBacklinksLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksBacklinksLiveResponseInfo**(`data?`): [`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksBacklinksLiveResponseInfo`](../interfaces/IBacklinksBacklinksLiveResponseInfo.md) |

#### Returns

[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:131636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131636)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksBacklinksLiveResponseInfo](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[cost](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#cost)

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

[IBacklinksBacklinksLiveResponseInfo](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[status_code](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#status_code)

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

[IBacklinksBacklinksLiveResponseInfo](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[status_message](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksBacklinksLiveTaskInfo`](BacklinksBacklinksLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksBacklinksLiveResponseInfo](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[tasks](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:131632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131632)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksBacklinksLiveResponseInfo](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksBacklinksLiveResponseInfo](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksBacklinksLiveResponseInfo](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[time](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksBacklinksLiveResponseInfo](../interfaces/IBacklinksBacklinksLiveResponseInfo.md).[version](../interfaces/IBacklinksBacklinksLiveResponseInfo.md#version)

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

[main.ts:131640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131640)

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

[main.ts:131662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131662)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:131655](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L131655)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")