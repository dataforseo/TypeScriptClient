[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskGetRegularResponseInfo

# Class: SerpBingOrganicTaskGetRegularResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingOrganicTaskGetRegularResponseInfo`**

## Implements

- [`ISerpBingOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskGetRegularResponseInfo.md#constructor)

### Properties

- [cost](SerpBingOrganicTaskGetRegularResponseInfo.md#cost)
- [status\_code](SerpBingOrganicTaskGetRegularResponseInfo.md#status_code)
- [status\_message](SerpBingOrganicTaskGetRegularResponseInfo.md#status_message)
- [tasks](SerpBingOrganicTaskGetRegularResponseInfo.md#tasks)
- [tasks\_count](SerpBingOrganicTaskGetRegularResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingOrganicTaskGetRegularResponseInfo.md#tasks_error)
- [time](SerpBingOrganicTaskGetRegularResponseInfo.md#time)
- [version](SerpBingOrganicTaskGetRegularResponseInfo.md#version)

### Methods

- [init](SerpBingOrganicTaskGetRegularResponseInfo.md#init)
- [toJSON](SerpBingOrganicTaskGetRegularResponseInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskGetRegularResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskGetRegularResponseInfo**(`data?`): [`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md) |

#### Returns

[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:54419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54419)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md).[cost](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md#cost)

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

[ISerpBingOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md).[status_code](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md#status_code)

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

[ISerpBingOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md).[status_message](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpBingOrganicTaskGetRegularTaskInfo`](SerpBingOrganicTaskGetRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md).[tasks](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md#tasks)

#### Defined in

[main.ts:54415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54415)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md).[tasks_count](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md).[tasks_error](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md).[time](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingOrganicTaskGetRegularResponseInfo](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md).[version](../interfaces/ISerpBingOrganicTaskGetRegularResponseInfo.md#version)

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

[main.ts:54423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54423)

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

[main.ts:54445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54445)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:54438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54438)
