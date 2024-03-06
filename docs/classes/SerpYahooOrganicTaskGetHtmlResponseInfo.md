[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskGetHtmlResponseInfo

# Class: SerpYahooOrganicTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYahooOrganicTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpYahooOrganicTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpYahooOrganicTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpYahooOrganicTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpYahooOrganicTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpYahooOrganicTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpYahooOrganicTaskGetHtmlResponseInfo.md#time)
- [version](SerpYahooOrganicTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpYahooOrganicTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpYahooOrganicTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskGetHtmlResponseInfo**(`data?`): [`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:64415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64415)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#cost)

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

[ISerpYahooOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#status_code)

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

[ISerpYahooOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYahooOrganicTaskGetHtmlTaskInfo`](SerpYahooOrganicTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:64411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64411)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpYahooOrganicTaskGetHtmlResponseInfo.md#version)

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

[main.ts:64419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64419)

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

[main.ts:64441](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64441)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:64434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64434)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")