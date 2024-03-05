[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsLanguagesResponseInfo

# Class: KeywordsDataGoogleTrendsLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleTrendsLanguagesResponseInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsLanguagesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#time)
- [version](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsLanguagesResponseInfo**(`data?`): [`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsLanguagesResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:119550](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119550)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md#cost)

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

[IKeywordsDataGoogleTrendsLanguagesResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsLanguagesResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleTrendsLanguagesTaskInfo`](KeywordsDataGoogleTrendsLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md#tasks)

#### Defined in

[main.ts:119546](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119546)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleTrendsLanguagesResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleTrendsLanguagesResponseInfo.md#version)

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

[main.ts:119554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119554)

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

[main.ts:119576](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119576)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:119569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119569)
