[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRankedKeywordsLiveResponseInfo

# Class: DataforseoLabsBingRankedKeywordsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsBingRankedKeywordsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#time)
- [version](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRankedKeywordsLiveResponseInfo**(`data?`): [`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRankedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:105571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105571)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsBingRankedKeywordsLiveTaskInfo`](DataforseoLabsBingRankedKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:105567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105567)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingRankedKeywordsLiveResponseInfo.md#version)

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

[main.ts:105575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105575)

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

[main.ts:105597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105597)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveResponseInfo`](DataforseoLabsBingRankedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:105590](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L105590)
