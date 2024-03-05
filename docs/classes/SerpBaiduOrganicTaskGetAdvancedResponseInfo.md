[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTaskGetAdvancedResponseInfo

# Class: SerpBaiduOrganicTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBaiduOrganicTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#time)
- [version](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTaskGetAdvancedResponseInfo**(`data?`): [`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:67211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67211)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpBaiduOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpBaiduOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpBaiduOrganicTaskGetAdvancedTaskInfo`](SerpBaiduOrganicTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:67207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67207)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:67215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67215)

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

[main.ts:67237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67237)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:67230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67230)
