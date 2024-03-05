[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskGetRegularResponseInfo

# Class: SerpNaverOrganicTaskGetRegularResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpNaverOrganicTaskGetRegularResponseInfo`**

## Implements

- [`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskGetRegularResponseInfo.md#constructor)

### Properties

- [cost](SerpNaverOrganicTaskGetRegularResponseInfo.md#cost)
- [status\_code](SerpNaverOrganicTaskGetRegularResponseInfo.md#status_code)
- [status\_message](SerpNaverOrganicTaskGetRegularResponseInfo.md#status_message)
- [tasks](SerpNaverOrganicTaskGetRegularResponseInfo.md#tasks)
- [tasks\_count](SerpNaverOrganicTaskGetRegularResponseInfo.md#tasks_count)
- [tasks\_error](SerpNaverOrganicTaskGetRegularResponseInfo.md#tasks_error)
- [time](SerpNaverOrganicTaskGetRegularResponseInfo.md#time)
- [version](SerpNaverOrganicTaskGetRegularResponseInfo.md#version)

### Methods

- [init](SerpNaverOrganicTaskGetRegularResponseInfo.md#init)
- [toJSON](SerpNaverOrganicTaskGetRegularResponseInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskGetRegularResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskGetRegularResponseInfo**(`data?`): [`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md) |

#### Returns

[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:68223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68223)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResponseInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[cost](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#cost)

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

[ISerpNaverOrganicTaskGetRegularResponseInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[status_code](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#status_code)

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

[ISerpNaverOrganicTaskGetRegularResponseInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[status_message](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpNaverOrganicTaskGetRegularTaskInfo`](SerpNaverOrganicTaskGetRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResponseInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[tasks](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#tasks)

#### Defined in

[main.ts:68219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68219)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResponseInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[tasks_count](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResponseInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[tasks_error](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResponseInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[time](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpNaverOrganicTaskGetRegularResponseInfo](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md).[version](../interfaces/ISerpNaverOrganicTaskGetRegularResponseInfo.md#version)

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

[main.ts:68227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68227)

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

[main.ts:68249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68249)

___

### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:68242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68242)
