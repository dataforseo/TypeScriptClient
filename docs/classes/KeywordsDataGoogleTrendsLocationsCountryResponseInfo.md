[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsLocationsCountryResponseInfo

# Class: KeywordsDataGoogleTrendsLocationsCountryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#time)
- [version](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsLocationsCountryResponseInfo**(`data?`): [`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:119384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119384)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#cost)

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

[IKeywordsDataGoogleTrendsLocationsCountryResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsLocationsCountryResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleTrendsLocationsCountryTaskInfo`](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tasks)

#### Defined in

[main.ts:119380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119380)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#version)

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

[main.ts:119388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119388)

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

[main.ts:119410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119410)

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:119403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119403)
