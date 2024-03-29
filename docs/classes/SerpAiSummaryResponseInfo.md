[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpAiSummaryResponseInfo

# Class: SerpAiSummaryResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpAiSummaryResponseInfo`**

## Implements

- [`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpAiSummaryResponseInfo.md#constructor)

### Properties

- [cost](SerpAiSummaryResponseInfo.md#cost)
- [status\_code](SerpAiSummaryResponseInfo.md#status_code)
- [status\_message](SerpAiSummaryResponseInfo.md#status_message)
- [tasks](SerpAiSummaryResponseInfo.md#tasks)
- [tasks\_count](SerpAiSummaryResponseInfo.md#tasks_count)
- [tasks\_error](SerpAiSummaryResponseInfo.md#tasks_error)
- [time](SerpAiSummaryResponseInfo.md#time)
- [version](SerpAiSummaryResponseInfo.md#version)

### Methods

- [init](SerpAiSummaryResponseInfo.md#init)
- [toJSON](SerpAiSummaryResponseInfo.md#tojson)
- [fromJS](SerpAiSummaryResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpAiSummaryResponseInfo**(`data?`): [`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpAiSummaryResponseInfo`](../interfaces/ISerpAiSummaryResponseInfo.md) |

#### Returns

[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:24009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24009)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpAiSummaryResponseInfo](../interfaces/ISerpAiSummaryResponseInfo.md).[cost](../interfaces/ISerpAiSummaryResponseInfo.md#cost)

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

[ISerpAiSummaryResponseInfo](../interfaces/ISerpAiSummaryResponseInfo.md).[status_code](../interfaces/ISerpAiSummaryResponseInfo.md#status_code)

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

[ISerpAiSummaryResponseInfo](../interfaces/ISerpAiSummaryResponseInfo.md).[status_message](../interfaces/ISerpAiSummaryResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpAiSummaryTaskInfo`](SerpAiSummaryTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpAiSummaryResponseInfo](../interfaces/ISerpAiSummaryResponseInfo.md).[tasks](../interfaces/ISerpAiSummaryResponseInfo.md#tasks)

#### Defined in

[main.ts:24005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24005)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpAiSummaryResponseInfo](../interfaces/ISerpAiSummaryResponseInfo.md).[tasks_count](../interfaces/ISerpAiSummaryResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpAiSummaryResponseInfo](../interfaces/ISerpAiSummaryResponseInfo.md).[tasks_error](../interfaces/ISerpAiSummaryResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpAiSummaryResponseInfo](../interfaces/ISerpAiSummaryResponseInfo.md).[time](../interfaces/ISerpAiSummaryResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpAiSummaryResponseInfo](../interfaces/ISerpAiSummaryResponseInfo.md).[version](../interfaces/ISerpAiSummaryResponseInfo.md#version)

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

[main.ts:24013](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24013)

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

[main.ts:24035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24035)

___


### fromJS

▸ **fromJS**(`data`): [`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:24028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L24028)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")