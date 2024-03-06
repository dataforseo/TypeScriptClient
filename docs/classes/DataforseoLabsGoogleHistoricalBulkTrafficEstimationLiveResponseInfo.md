[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo

# Class: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:98565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98565)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:98561](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98561)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md#version)

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

[main.ts:98569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98569)

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

[main.ts:98591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98591)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo`](DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:98584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98584)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")