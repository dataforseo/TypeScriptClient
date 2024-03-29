[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskGetAdvancedResponseInfo

# Class: SerpYahooOrganicTaskGetAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpYahooOrganicTaskGetAdvancedResponseInfo`**

## Implements

- [`ISerpYahooOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#cost)
- [status\_code](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#status_code)
- [status\_message](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#status_message)
- [tasks](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#tasks_error)
- [time](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#time)
- [version](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#version)

### Methods

- [init](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#init)
- [toJSON](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskGetAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskGetAdvancedResponseInfo**(`data?`): [`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskGetAdvancedResponseInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md) |

#### Returns

[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:64197](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64197)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md).[cost](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md#cost)

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

[ISerpYahooOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md).[status_code](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md#status_code)

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

[ISerpYahooOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md).[status_message](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpYahooOrganicTaskGetAdvancedTaskInfo`](SerpYahooOrganicTaskGetAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md).[tasks](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:64193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64193)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md).[time](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResponseInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md).[version](../interfaces/ISerpYahooOrganicTaskGetAdvancedResponseInfo.md#version)

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

[main.ts:64201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64201)

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

[main.ts:64223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64223)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:64216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64216)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")