[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo

# Class: DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#time)
- [version](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo**(`data?`): [`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:99523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99523)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#cost)

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

[IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo`](DataforseoLabsAmazonRelatedKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:99519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99519)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md#version)

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

[main.ts:99527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99527)

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

[main.ts:99549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99549)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:99542](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99542)
