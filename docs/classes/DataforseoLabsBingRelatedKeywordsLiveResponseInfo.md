[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingRelatedKeywordsLiveResponseInfo

# Class: DataforseoLabsBingRelatedKeywordsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#time)
- [version](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingRelatedKeywordsLiveResponseInfo**(`data?`): [`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingRelatedKeywordsLiveResponseInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:106185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106185)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`DataforseoLabsBingRelatedKeywordsLiveTaskInfo`](DataforseoLabsBingRelatedKeywordsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:106181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106181)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingRelatedKeywordsLiveResponseInfo](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveResponseInfo.md#version)

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

[main.ts:106189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106189)

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

[main.ts:106211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106211)

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveResponseInfo`](DataforseoLabsBingRelatedKeywordsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:106204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L106204)
