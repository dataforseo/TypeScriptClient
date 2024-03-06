[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentGenerationGenerateTextLiveResponseInfo

# Class: ContentGenerationGenerateTextLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`ContentGenerationGenerateTextLiveResponseInfo`**

## Implements

- [`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationGenerateTextLiveResponseInfo.md#constructor)

### Properties

- [cost](ContentGenerationGenerateTextLiveResponseInfo.md#cost)
- [status\_code](ContentGenerationGenerateTextLiveResponseInfo.md#status_code)
- [status\_message](ContentGenerationGenerateTextLiveResponseInfo.md#status_message)
- [tasks](ContentGenerationGenerateTextLiveResponseInfo.md#tasks)
- [tasks\_count](ContentGenerationGenerateTextLiveResponseInfo.md#tasks_count)
- [tasks\_error](ContentGenerationGenerateTextLiveResponseInfo.md#tasks_error)
- [time](ContentGenerationGenerateTextLiveResponseInfo.md#time)
- [version](ContentGenerationGenerateTextLiveResponseInfo.md#version)

### Methods

- [init](ContentGenerationGenerateTextLiveResponseInfo.md#init)
- [toJSON](ContentGenerationGenerateTextLiveResponseInfo.md#tojson)
- [fromJS](ContentGenerationGenerateTextLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationGenerateTextLiveResponseInfo**(`data?`): [`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationGenerateTextLiveResponseInfo`](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md) |

#### Returns

[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:160520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160520)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[cost](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#cost)

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

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[status_code](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#status_code)

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

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[status_message](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`ContentGenerationGenerateTextLiveTaskInfo`](ContentGenerationGenerateTextLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[tasks](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:160516](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160516)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[tasks_count](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[tasks_error](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[time](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentGenerationGenerateTextLiveResponseInfo](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md).[version](../interfaces/IContentGenerationGenerateTextLiveResponseInfo.md#version)

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

[main.ts:160524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160524)

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

[main.ts:160546](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160546)

___


### fromJS

▸ **fromJS**(`data`): [`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationGenerateTextLiveResponseInfo`](ContentGenerationGenerateTextLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:160539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L160539)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")