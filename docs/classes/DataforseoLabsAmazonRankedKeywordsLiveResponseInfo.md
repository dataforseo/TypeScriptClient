[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRankedKeywordsLiveResponseInfo

# Class: DataforseoLabsAmazonRankedKeywordsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#time)
- [version](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRankedKeywordsLiveResponseInfo**(`data?`): [`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:100371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100371)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#cost)

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

[IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsAmazonRankedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRankedKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:100367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100367)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md#version)

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

[main.ts:100375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100375)

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

[main.ts:100397](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100397)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRankedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRankedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:100390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L100390)
