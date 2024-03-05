[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTaskGetAdvancedResponseInfo

# Class: SerpSeznamOrganicTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpSeznamOrganicTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#time)
- [version](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTaskGetAdvancedResponseInfo**(`data?`): [`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:70595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70595)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpSeznamOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpSeznamOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpSeznamOrganicTaskGetAdvancedTaskInfo`](SerpSeznamOrganicTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:70591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70591)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:70599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70599)

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

[main.ts:70621](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70621)

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:70614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70614)
