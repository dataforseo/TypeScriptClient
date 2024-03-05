[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo

# Class: KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#time)
- [version](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:126540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126540)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tasks)

#### Defined in

[main.ts:126536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126536)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md#version)

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

[main.ts:126544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126544)

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

[main.ts:126566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126566)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:126559](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L126559)
