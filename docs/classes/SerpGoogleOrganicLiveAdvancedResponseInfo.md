[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicLiveAdvancedResponseInfo

# Class: SerpGoogleOrganicLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleOrganicLiveAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleOrganicLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleOrganicLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleOrganicLiveAdvancedResponseInfo.md#time)
- [version](SerpGoogleOrganicLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleOrganicLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleOrganicLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleOrganicLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicLiveAdvancedResponseInfo**(`data?`): [`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:37045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37045)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#cost)

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

[ISerpGoogleOrganicLiveAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleOrganicLiveAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleOrganicLiveAdvancedTaskInfo`](SerpGoogleOrganicLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:37041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37041)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleOrganicLiveAdvancedResponseInfo](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleOrganicLiveAdvancedResponseInfo.md#version)

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

[main.ts:37049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37049)

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

[main.ts:37071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37071)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:37064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37064)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")