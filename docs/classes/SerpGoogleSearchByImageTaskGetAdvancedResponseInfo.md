[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTaskGetAdvancedResponseInfo

# Class: SerpGoogleSearchByImageTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#time)
- [version](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTaskGetAdvancedResponseInfo**(`data?`): [`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:48233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48233)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleSearchByImageTaskGetAdvancedTaskInfo`](SerpGoogleSearchByImageTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:48229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48229)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:48237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48237)

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

[main.ts:48259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48259)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:48252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48252)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")