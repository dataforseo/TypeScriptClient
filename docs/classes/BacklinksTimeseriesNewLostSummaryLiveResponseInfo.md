[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksTimeseriesNewLostSummaryLiveResponseInfo

# Class: BacklinksTimeseriesNewLostSummaryLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`**

## Implements

- [`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#cost)
- [status\_code](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#status_code)
- [status\_message](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#status_message)
- [tasks](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tasks_error)
- [time](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#time)
- [version](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#version)

### Methods

- [init](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#init)
- [toJSON](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tojson)
- [fromJS](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksTimeseriesNewLostSummaryLiveResponseInfo**(`data?`): [`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksTimeseriesNewLostSummaryLiveResponseInfo`](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md) |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:139248](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139248)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResponseInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[cost](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#cost)

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

[IBacklinksTimeseriesNewLostSummaryLiveResponseInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[status_code](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#status_code)

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

[IBacklinksTimeseriesNewLostSummaryLiveResponseInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[status_message](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksTimeseriesNewLostSummaryLiveTaskInfo`](BacklinksTimeseriesNewLostSummaryLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResponseInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[tasks](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:139244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139244)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResponseInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResponseInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResponseInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[time](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksTimeseriesNewLostSummaryLiveResponseInfo](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md).[version](../interfaces/IBacklinksTimeseriesNewLostSummaryLiveResponseInfo.md#version)

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

[main.ts:139252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139252)

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

[main.ts:139274](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139274)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:139267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L139267)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")