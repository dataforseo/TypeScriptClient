[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTaskPostResponseInfo

# Class: SerpGoogleSearchByImageTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleSearchByImageTaskPostResponseInfo`**

## Implements

- [`ISerpGoogleSearchByImageTaskPostResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleSearchByImageTaskPostResponseInfo.md#cost)
- [status\_code](SerpGoogleSearchByImageTaskPostResponseInfo.md#status_code)
- [status\_message](SerpGoogleSearchByImageTaskPostResponseInfo.md#status_message)
- [tasks](SerpGoogleSearchByImageTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleSearchByImageTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleSearchByImageTaskPostResponseInfo.md#tasks_error)
- [time](SerpGoogleSearchByImageTaskPostResponseInfo.md#time)
- [version](SerpGoogleSearchByImageTaskPostResponseInfo.md#version)

### Methods

- [init](SerpGoogleSearchByImageTaskPostResponseInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTaskPostResponseInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTaskPostResponseInfo**(`data?`): [`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTaskPostResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:47541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47541)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleSearchByImageTaskPostResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md).[cost](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md#cost)

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

[ISerpGoogleSearchByImageTaskPostResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md).[status_code](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md#status_code)

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

[ISerpGoogleSearchByImageTaskPostResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md).[status_message](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleSearchByImageTaskPostTaskInfo`](SerpGoogleSearchByImageTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleSearchByImageTaskPostResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md).[tasks](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:47537](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47537)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleSearchByImageTaskPostResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleSearchByImageTaskPostResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleSearchByImageTaskPostResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md).[time](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleSearchByImageTaskPostResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md).[version](../interfaces/ISerpGoogleSearchByImageTaskPostResponseInfo.md#version)

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

[main.ts:47545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47545)

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

[main.ts:47567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47567)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:47560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47560)
