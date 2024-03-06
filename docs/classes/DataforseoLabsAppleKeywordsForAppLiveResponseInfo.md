[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsAppleKeywordsForAppLiveResponseInfo

# Class: DataforseoLabsAppleKeywordsForAppLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`**

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#time)
- [version](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsAppleKeywordsForAppLiveResponseInfo**(`data?`): [`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsAppleKeywordsForAppLiveResponseInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:111055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111055)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#cost)

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

[IDataforseoLabsAppleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#status_code)

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

[IDataforseoLabsAppleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DataforseoLabsAppleKeywordsForAppLiveTaskInfo`](DataforseoLabsAppleKeywordsForAppLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:111051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111051)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsAppleKeywordsForAppLiveResponseInfo](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResponseInfo.md#version)

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

[main.ts:111059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111059)

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

[main.ts:111081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111081)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResponseInfo`](DataforseoLabsAppleKeywordsForAppLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:111074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L111074)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")