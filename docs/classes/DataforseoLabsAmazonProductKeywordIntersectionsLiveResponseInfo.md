[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo

# Class: DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#time)
- [version](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo**(`data?`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:102039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102039)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#cost)

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

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:102035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102035)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md#version)

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

[main.ts:102043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102043)

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

[main.ts:102065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102065)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:102058](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102058)
