[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskGetHtmlResponseInfo

# Class: SerpGoogleOrganicTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleOrganicTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpGoogleOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#time)
- [version](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskGetHtmlResponseInfo**(`data?`): [`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:36517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36517)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md#cost)

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

[ISerpGoogleOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md#status_code)

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

[ISerpGoogleOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleOrganicTaskGetHtmlTaskInfo`](SerpGoogleOrganicTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:36513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36513)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpGoogleOrganicTaskGetHtmlResponseInfo.md#version)

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

[main.ts:36521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36521)

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

[main.ts:36543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36543)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:36536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36536)
