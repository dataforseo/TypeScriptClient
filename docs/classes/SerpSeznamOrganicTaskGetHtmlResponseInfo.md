[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTaskGetHtmlResponseInfo

# Class: SerpSeznamOrganicTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpSeznamOrganicTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#time)
- [version](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTaskGetHtmlResponseInfo**(`data?`): [`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:70813](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70813)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#cost)

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

[ISerpSeznamOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#status_code)

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

[ISerpSeznamOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpSeznamOrganicTaskGetHtmlTaskInfo`](SerpSeznamOrganicTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:70809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70809)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpSeznamOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpSeznamOrganicTaskGetHtmlResponseInfo.md#version)

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

[main.ts:70817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70817)

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

[main.ts:70839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70839)

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:70832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70832)
