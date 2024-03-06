[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ContentAnalysisAvailableFiltersResponseInfo

# Class: ContentAnalysisAvailableFiltersResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`ContentAnalysisAvailableFiltersResponseInfo`**

## Implements

- [`IContentAnalysisAvailableFiltersResponseInfo`](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentAnalysisAvailableFiltersResponseInfo.md#constructor)

### Properties

- [cost](ContentAnalysisAvailableFiltersResponseInfo.md#cost)
- [status\_code](ContentAnalysisAvailableFiltersResponseInfo.md#status_code)
- [status\_message](ContentAnalysisAvailableFiltersResponseInfo.md#status_message)
- [tasks](ContentAnalysisAvailableFiltersResponseInfo.md#tasks)
- [tasks\_count](ContentAnalysisAvailableFiltersResponseInfo.md#tasks_count)
- [tasks\_error](ContentAnalysisAvailableFiltersResponseInfo.md#tasks_error)
- [time](ContentAnalysisAvailableFiltersResponseInfo.md#time)
- [version](ContentAnalysisAvailableFiltersResponseInfo.md#version)

### Methods

- [init](ContentAnalysisAvailableFiltersResponseInfo.md#init)
- [toJSON](ContentAnalysisAvailableFiltersResponseInfo.md#tojson)
- [fromJS](ContentAnalysisAvailableFiltersResponseInfo.md#fromjs)

## Constructors

### constructor

• **new ContentAnalysisAvailableFiltersResponseInfo**(`data?`): [`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentAnalysisAvailableFiltersResponseInfo`](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md) |

#### Returns

[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:155471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155471)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IContentAnalysisAvailableFiltersResponseInfo](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md).[cost](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md#cost)

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

[IContentAnalysisAvailableFiltersResponseInfo](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md).[status_code](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md#status_code)

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

[IContentAnalysisAvailableFiltersResponseInfo](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md).[status_message](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`ContentAnalysisAvailableFiltersTaskInfo`](ContentAnalysisAvailableFiltersTaskInfo.md)[]

#### Implementation of

[IContentAnalysisAvailableFiltersResponseInfo](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md).[tasks](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md#tasks)

#### Defined in

[main.ts:155467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155467)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IContentAnalysisAvailableFiltersResponseInfo](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md).[tasks_count](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IContentAnalysisAvailableFiltersResponseInfo](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md).[tasks_error](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IContentAnalysisAvailableFiltersResponseInfo](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md).[time](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IContentAnalysisAvailableFiltersResponseInfo](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md).[version](../interfaces/IContentAnalysisAvailableFiltersResponseInfo.md#version)

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

[main.ts:155475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155475)

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

[main.ts:155497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155497)

___


### fromJS

▸ **fromJS**(`data`): [`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentAnalysisAvailableFiltersResponseInfo`](ContentAnalysisAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:155490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L155490)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")