[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageSummaryResponseInfo

# Class: OnPageSummaryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`OnPageSummaryResponseInfo`**

## Implements

- [`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageSummaryResponseInfo.md#constructor)

### Properties

- [cost](OnPageSummaryResponseInfo.md#cost)
- [status\_code](OnPageSummaryResponseInfo.md#status_code)
- [status\_message](OnPageSummaryResponseInfo.md#status_message)
- [tasks](OnPageSummaryResponseInfo.md#tasks)
- [tasks\_count](OnPageSummaryResponseInfo.md#tasks_count)
- [tasks\_error](OnPageSummaryResponseInfo.md#tasks_error)
- [time](OnPageSummaryResponseInfo.md#time)
- [version](OnPageSummaryResponseInfo.md#version)

### Methods

- [init](OnPageSummaryResponseInfo.md#init)
- [toJSON](OnPageSummaryResponseInfo.md#tojson)
- [fromJS](OnPageSummaryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageSummaryResponseInfo**(`data?`): [`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageSummaryResponseInfo`](../interfaces/IOnPageSummaryResponseInfo.md) |

#### Returns

[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:143830](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143830)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageSummaryResponseInfo](../interfaces/IOnPageSummaryResponseInfo.md).[cost](../interfaces/IOnPageSummaryResponseInfo.md#cost)

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

[IOnPageSummaryResponseInfo](../interfaces/IOnPageSummaryResponseInfo.md).[status_code](../interfaces/IOnPageSummaryResponseInfo.md#status_code)

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

[IOnPageSummaryResponseInfo](../interfaces/IOnPageSummaryResponseInfo.md).[status_message](../interfaces/IOnPageSummaryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`OnPageSummaryTaskInfo`](OnPageSummaryTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageSummaryResponseInfo](../interfaces/IOnPageSummaryResponseInfo.md).[tasks](../interfaces/IOnPageSummaryResponseInfo.md#tasks)

#### Defined in

[main.ts:143826](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143826)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageSummaryResponseInfo](../interfaces/IOnPageSummaryResponseInfo.md).[tasks_count](../interfaces/IOnPageSummaryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageSummaryResponseInfo](../interfaces/IOnPageSummaryResponseInfo.md).[tasks_error](../interfaces/IOnPageSummaryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageSummaryResponseInfo](../interfaces/IOnPageSummaryResponseInfo.md).[time](../interfaces/IOnPageSummaryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageSummaryResponseInfo](../interfaces/IOnPageSummaryResponseInfo.md).[version](../interfaces/IOnPageSummaryResponseInfo.md#version)

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

[main.ts:143834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143834)

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

[main.ts:143856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143856)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:143849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L143849)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")