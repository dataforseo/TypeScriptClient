[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo

# Class: SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#time)
- [version](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo**(`data?`): [`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:51275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51275)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpGoogleDatasetSearchTaskGetAdvancedTaskInfo`](SerpGoogleDatasetSearchTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:51271](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51271)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:51279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51279)

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

[main.ts:51301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51301)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:51294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51294)
