[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo

# Class: DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:82581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82581)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:82577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82577)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md#version)

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

[main.ts:82585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82585)

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

[main.ts:82607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82607)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo`](DataforseoLabsGoogleBulkKeywordDifficultyLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:82600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82600)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")