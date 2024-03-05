[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoTaskPostResponseInfo

# Class: SerpGoogleDatasetInfoTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleDatasetInfoTaskPostResponseInfo`**

## Implements

- [`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetInfoTaskPostResponseInfo.md#cost)
- [status\_code](SerpGoogleDatasetInfoTaskPostResponseInfo.md#status_code)
- [status\_message](SerpGoogleDatasetInfoTaskPostResponseInfo.md#status_message)
- [tasks](SerpGoogleDatasetInfoTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleDatasetInfoTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleDatasetInfoTaskPostResponseInfo.md#tasks_error)
- [time](SerpGoogleDatasetInfoTaskPostResponseInfo.md#time)
- [version](SerpGoogleDatasetInfoTaskPostResponseInfo.md#version)

### Methods

- [init](SerpGoogleDatasetInfoTaskPostResponseInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoTaskPostResponseInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoTaskPostResponseInfo**(`data?`): [`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:52031](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52031)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[cost](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#cost)

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

[ISerpGoogleDatasetInfoTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[status_code](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#status_code)

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

[ISerpGoogleDatasetInfoTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[status_message](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleDatasetInfoTaskPostTaskInfo`](SerpGoogleDatasetInfoTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[tasks](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:52027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52027)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[time](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleDatasetInfoTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md).[version](../interfaces/ISerpGoogleDatasetInfoTaskPostResponseInfo.md#version)

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

[main.ts:52035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52035)

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

[main.ts:52057](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52057)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:52050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L52050)
