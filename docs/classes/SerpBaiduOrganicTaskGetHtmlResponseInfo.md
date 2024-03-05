[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTaskGetHtmlResponseInfo

# Class: SerpBaiduOrganicTaskGetHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBaiduOrganicTaskGetHtmlResponseInfo`**

## Implements

- [`ISerpBaiduOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#cost)
- [status\_code](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#status_message)
- [tasks](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#tasks_error)
- [time](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#time)
- [version](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#version)

### Methods

- [init](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#init)
- [toJSON](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTaskGetHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTaskGetHtmlResponseInfo**(`data?`): [`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTaskGetHtmlResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md) |

#### Returns

[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:67429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67429)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md).[cost](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md#cost)

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

[ISerpBaiduOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md).[status_code](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md#status_code)

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

[ISerpBaiduOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md).[status_message](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpBaiduOrganicTaskGetHtmlTaskInfo`](SerpBaiduOrganicTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md).[tasks](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:67425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67425)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md).[time](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md).[version](../interfaces/ISerpBaiduOrganicTaskGetHtmlResponseInfo.md#version)

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

[main.ts:67433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67433)

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

[main.ts:67455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67455)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:67448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67448)
