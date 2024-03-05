[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisLanguagesResponseInfo

# Class: ContentAnalysisLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`ContentAnalysisLanguagesResponseInfo`**

## Implements

- [`IContentAnalysisLanguagesResponseInfo`](../interfaces/IContentAnalysisLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisLanguagesResponseInfo.md#constructor)

### Properties

- [cost](ContentAnalysisLanguagesResponseInfo.md#cost)
- [status\_code](ContentAnalysisLanguagesResponseInfo.md#status_code)
- [status\_message](ContentAnalysisLanguagesResponseInfo.md#status_message)
- [tasks](ContentAnalysisLanguagesResponseInfo.md#tasks)
- [tasks\_count](ContentAnalysisLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](ContentAnalysisLanguagesResponseInfo.md#tasks_error)
- [time](ContentAnalysisLanguagesResponseInfo.md#time)
- [version](ContentAnalysisLanguagesResponseInfo.md#version)

### Methods

- [init](ContentAnalysisLanguagesResponseInfo.md#init)
- [toJSON](ContentAnalysisLanguagesResponseInfo.md#tojson)
- [fromJS](ContentAnalysisLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisLanguagesResponseInfo**(`data?`): [`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisLanguagesResponseInfo`](../interfaces/IContentAnalysisLanguagesResponseInfo.md) |

#### Returns

[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:155802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155802)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisLanguagesResponseInfo](../interfaces/IContentAnalysisLanguagesResponseInfo.md).[cost](../interfaces/IContentAnalysisLanguagesResponseInfo.md#cost)

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

[IContentAnalysisLanguagesResponseInfo](../interfaces/IContentAnalysisLanguagesResponseInfo.md).[status_code](../interfaces/IContentAnalysisLanguagesResponseInfo.md#status_code)

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

[IContentAnalysisLanguagesResponseInfo](../interfaces/IContentAnalysisLanguagesResponseInfo.md).[status_message](../interfaces/IContentAnalysisLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`ContentAnalysisLanguagesTaskInfo`](ContentAnalysisLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IContentAnalysisLanguagesResponseInfo](../interfaces/IContentAnalysisLanguagesResponseInfo.md).[tasks](../interfaces/IContentAnalysisLanguagesResponseInfo.md#tasks)

#### Defined in

[main.ts:155798](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155798)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentAnalysisLanguagesResponseInfo](../interfaces/IContentAnalysisLanguagesResponseInfo.md).[tasks_count](../interfaces/IContentAnalysisLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentAnalysisLanguagesResponseInfo](../interfaces/IContentAnalysisLanguagesResponseInfo.md).[tasks_error](../interfaces/IContentAnalysisLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentAnalysisLanguagesResponseInfo](../interfaces/IContentAnalysisLanguagesResponseInfo.md).[time](../interfaces/IContentAnalysisLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentAnalysisLanguagesResponseInfo](../interfaces/IContentAnalysisLanguagesResponseInfo.md).[version](../interfaces/IContentAnalysisLanguagesResponseInfo.md#version)

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

[main.ts:155806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155806)

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

[main.ts:155828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155828)

___

### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisLanguagesResponseInfo`](ContentAnalysisLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:155821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155821)
