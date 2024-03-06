[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskGetAdvancedResponseInfo

# Class: SerpGoogleOrganicTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleOrganicTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#time)
- [version](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskGetAdvancedResponseInfo**(`data?`): [`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:36231](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36231)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpGoogleOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleOrganicTaskGetAdvancedTaskInfo`](SerpGoogleOrganicTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:36227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36227)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleOrganicTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:36235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36235)

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

[main.ts:36257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36257)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:36250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36250)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")