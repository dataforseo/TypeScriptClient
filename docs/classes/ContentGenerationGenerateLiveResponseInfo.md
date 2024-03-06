[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateLiveResponseInfo

# Class: ContentGenerationGenerateLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`ContentGenerationGenerateLiveResponseInfo`**

## Implements

- [`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentGenerationGenerateLiveResponseInfo.md#cost)
- [status\_code](ContentGenerationGenerateLiveResponseInfo.md#status_code)
- [status\_message](ContentGenerationGenerateLiveResponseInfo.md#status_message)
- [tasks](ContentGenerationGenerateLiveResponseInfo.md#tasks)
- [tasks\_count](ContentGenerationGenerateLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentGenerationGenerateLiveResponseInfo.md#tasks_error)
- [time](ContentGenerationGenerateLiveResponseInfo.md#time)
- [version](ContentGenerationGenerateLiveResponseInfo.md#version)

### Methods

- [init](ContentGenerationGenerateLiveResponseInfo.md#init)
- [toJSON](ContentGenerationGenerateLiveResponseInfo.md#tojson)
- [fromJS](ContentGenerationGenerateLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateLiveResponseInfo**(`data?`): [`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateLiveResponseInfo`](../interfaces/IContentGenerationGenerateLiveResponseInfo.md) |

#### Returns

[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:160154](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160154)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGenerateLiveResponseInfo](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[cost](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#cost)

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

[IContentGenerationGenerateLiveResponseInfo](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[status_code](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#status_code)

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

[IContentGenerationGenerateLiveResponseInfo](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[status_message](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`ContentGenerationGenerateLiveTaskInfo`](ContentGenerationGenerateLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentGenerationGenerateLiveResponseInfo](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[tasks](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:160150](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160150)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentGenerationGenerateLiveResponseInfo](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[tasks_count](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentGenerationGenerateLiveResponseInfo](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[tasks_error](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentGenerationGenerateLiveResponseInfo](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[time](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentGenerationGenerateLiveResponseInfo](../interfaces/IContentGenerationGenerateLiveResponseInfo.md).[version](../interfaces/IContentGenerationGenerateLiveResponseInfo.md#version)

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

[main.ts:160158](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160158)

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

[main.ts:160180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160180)

___


### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateLiveResponseInfo`](ContentGenerationGenerateLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:160173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160173)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")