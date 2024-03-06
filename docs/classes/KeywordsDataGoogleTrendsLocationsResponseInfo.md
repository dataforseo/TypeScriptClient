[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsLocationsResponseInfo

# Class: KeywordsDataGoogleTrendsLocationsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataGoogleTrendsLocationsResponseInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsLocationsResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsLocationsResponseInfo.md#cost)
- [status\_code](KeywordsDataGoogleTrendsLocationsResponseInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsLocationsResponseInfo.md#status_message)
- [tasks](KeywordsDataGoogleTrendsLocationsResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataGoogleTrendsLocationsResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataGoogleTrendsLocationsResponseInfo.md#tasks_error)
- [time](KeywordsDataGoogleTrendsLocationsResponseInfo.md#time)
- [version](KeywordsDataGoogleTrendsLocationsResponseInfo.md#version)

### Methods

- [init](KeywordsDataGoogleTrendsLocationsResponseInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsLocationsResponseInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsLocationsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsLocationsResponseInfo**(`data?`): [`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsLocationsResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:119168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119168)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md#cost)

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

[IKeywordsDataGoogleTrendsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataGoogleTrendsLocationsTaskInfo`](KeywordsDataGoogleTrendsLocationsTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md).[tasks](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md#tasks)

#### Defined in

[main.ts:119164](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119164)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsResponseInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md).[version](../interfaces/IKeywordsDataGoogleTrendsLocationsResponseInfo.md#version)

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

[main.ts:119172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119172)

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

[main.ts:119194](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119194)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:119187](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119187)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")