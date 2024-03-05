[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTaskGetRegularResponseInfo

# Class: SerpSeznamOrganicTaskGetRegularResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpSeznamOrganicTaskGetRegularResponseInfo`**

## Implements

- [`ISerpSeznamOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTaskGetRegularResponseInfo.md#constructor)

### Properties

- [cost](SerpSeznamOrganicTaskGetRegularResponseInfo.md#cost)
- [status\_code](SerpSeznamOrganicTaskGetRegularResponseInfo.md#status_code)
- [status\_message](SerpSeznamOrganicTaskGetRegularResponseInfo.md#status_message)
- [tasks](SerpSeznamOrganicTaskGetRegularResponseInfo.md#tasks)
- [tasks\_count](SerpSeznamOrganicTaskGetRegularResponseInfo.md#tasks_count)
- [tasks\_error](SerpSeznamOrganicTaskGetRegularResponseInfo.md#tasks_error)
- [time](SerpSeznamOrganicTaskGetRegularResponseInfo.md#time)
- [version](SerpSeznamOrganicTaskGetRegularResponseInfo.md#version)

### Methods

- [init](SerpSeznamOrganicTaskGetRegularResponseInfo.md#init)
- [toJSON](SerpSeznamOrganicTaskGetRegularResponseInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTaskGetRegularResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTaskGetRegularResponseInfo**(`data?`): [`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTaskGetRegularResponseInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md) |

#### Returns

[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:70333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70333)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md).[cost](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md#cost)

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

[ISerpSeznamOrganicTaskGetRegularResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md).[status_code](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md#status_code)

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

[ISerpSeznamOrganicTaskGetRegularResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md).[status_message](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpSeznamOrganicTaskGetRegularTaskInfo`](SerpSeznamOrganicTaskGetRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md).[tasks](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md#tasks)

#### Defined in

[main.ts:70329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70329)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md).[tasks_count](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md).[tasks_error](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md).[time](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResponseInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md).[version](../interfaces/ISerpSeznamOrganicTaskGetRegularResponseInfo.md#version)

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

[main.ts:70337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70337)

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

[main.ts:70359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70359)

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:70352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70352)
