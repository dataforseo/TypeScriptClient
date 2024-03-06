[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageDuplicateTagsResponseInfo

# Class: OnPageDuplicateTagsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`OnPageDuplicateTagsResponseInfo`**

## Implements

- [`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageDuplicateTagsResponseInfo.md#constructor)

### Properties

- [cost](OnPageDuplicateTagsResponseInfo.md#cost)
- [status\_code](OnPageDuplicateTagsResponseInfo.md#status_code)
- [status\_message](OnPageDuplicateTagsResponseInfo.md#status_message)
- [tasks](OnPageDuplicateTagsResponseInfo.md#tasks)
- [tasks\_count](OnPageDuplicateTagsResponseInfo.md#tasks_count)
- [tasks\_error](OnPageDuplicateTagsResponseInfo.md#tasks_error)
- [time](OnPageDuplicateTagsResponseInfo.md#time)
- [version](OnPageDuplicateTagsResponseInfo.md#version)

### Methods

- [init](OnPageDuplicateTagsResponseInfo.md#init)
- [toJSON](OnPageDuplicateTagsResponseInfo.md#tojson)
- [fromJS](OnPageDuplicateTagsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageDuplicateTagsResponseInfo**(`data?`): [`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageDuplicateTagsResponseInfo`](../interfaces/IOnPageDuplicateTagsResponseInfo.md) |

#### Returns

[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:147380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147380)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageDuplicateTagsResponseInfo](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[cost](../interfaces/IOnPageDuplicateTagsResponseInfo.md#cost)

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

[IOnPageDuplicateTagsResponseInfo](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[status_code](../interfaces/IOnPageDuplicateTagsResponseInfo.md#status_code)

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

[IOnPageDuplicateTagsResponseInfo](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[status_message](../interfaces/IOnPageDuplicateTagsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`OnPageDuplicateTagsTaskInfo`](OnPageDuplicateTagsTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageDuplicateTagsResponseInfo](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[tasks](../interfaces/IOnPageDuplicateTagsResponseInfo.md#tasks)

#### Defined in

[main.ts:147376](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147376)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageDuplicateTagsResponseInfo](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[tasks_count](../interfaces/IOnPageDuplicateTagsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageDuplicateTagsResponseInfo](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[tasks_error](../interfaces/IOnPageDuplicateTagsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageDuplicateTagsResponseInfo](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[time](../interfaces/IOnPageDuplicateTagsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageDuplicateTagsResponseInfo](../interfaces/IOnPageDuplicateTagsResponseInfo.md).[version](../interfaces/IOnPageDuplicateTagsResponseInfo.md#version)

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

[main.ts:147384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147384)

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

[main.ts:147406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147406)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:147399](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L147399)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")