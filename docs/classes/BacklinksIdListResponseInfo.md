[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksIdListResponseInfo

# Class: BacklinksIdListResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksIdListResponseInfo`**

## Implements

- [`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksIdListResponseInfo.md#constructor)

### Properties

- [cost](BacklinksIdListResponseInfo.md#cost)
- [status\_code](BacklinksIdListResponseInfo.md#status_code)
- [status\_message](BacklinksIdListResponseInfo.md#status_message)
- [tasks](BacklinksIdListResponseInfo.md#tasks)
- [tasks\_count](BacklinksIdListResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksIdListResponseInfo.md#tasks_error)
- [time](BacklinksIdListResponseInfo.md#time)
- [version](BacklinksIdListResponseInfo.md#version)

### Methods

- [init](BacklinksIdListResponseInfo.md#init)
- [toJSON](BacklinksIdListResponseInfo.md#tojson)
- [fromJS](BacklinksIdListResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksIdListResponseInfo**(`data?`): [`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksIdListResponseInfo`](../interfaces/IBacklinksIdListResponseInfo.md) |

#### Returns

[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:128238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128238)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksIdListResponseInfo](../interfaces/IBacklinksIdListResponseInfo.md).[cost](../interfaces/IBacklinksIdListResponseInfo.md#cost)

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

[IBacklinksIdListResponseInfo](../interfaces/IBacklinksIdListResponseInfo.md).[status_code](../interfaces/IBacklinksIdListResponseInfo.md#status_code)

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

[IBacklinksIdListResponseInfo](../interfaces/IBacklinksIdListResponseInfo.md).[status_message](../interfaces/IBacklinksIdListResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksIdListTaskInfo`](BacklinksIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksIdListResponseInfo](../interfaces/IBacklinksIdListResponseInfo.md).[tasks](../interfaces/IBacklinksIdListResponseInfo.md#tasks)

#### Defined in

[main.ts:128234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128234)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksIdListResponseInfo](../interfaces/IBacklinksIdListResponseInfo.md).[tasks_count](../interfaces/IBacklinksIdListResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksIdListResponseInfo](../interfaces/IBacklinksIdListResponseInfo.md).[tasks_error](../interfaces/IBacklinksIdListResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksIdListResponseInfo](../interfaces/IBacklinksIdListResponseInfo.md).[time](../interfaces/IBacklinksIdListResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksIdListResponseInfo](../interfaces/IBacklinksIdListResponseInfo.md).[version](../interfaces/IBacklinksIdListResponseInfo.md#version)

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

[main.ts:128242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128242)

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

[main.ts:128264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128264)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:128257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128257)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")