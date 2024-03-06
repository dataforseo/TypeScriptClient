[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingSerpCompetitorsLiveResponseInfo

# Class: DataforseoLabsBingSerpCompetitorsLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#time)
- [version](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingSerpCompetitorsLiveResponseInfo**(`data?`): [`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingSerpCompetitorsLiveResponseInfo`](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:107223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107223)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingSerpCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingSerpCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DataforseoLabsBingSerpCompetitorsLiveTaskInfo`](DataforseoLabsBingSerpCompetitorsLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:107219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107219)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingSerpCompetitorsLiveResponseInfo](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingSerpCompetitorsLiveResponseInfo.md#version)

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

[main.ts:107227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107227)

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

[main.ts:107249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107249)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingSerpCompetitorsLiveResponseInfo`](DataforseoLabsBingSerpCompetitorsLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:107242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L107242)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")