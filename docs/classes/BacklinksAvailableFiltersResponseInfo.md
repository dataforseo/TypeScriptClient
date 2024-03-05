[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksAvailableFiltersResponseInfo

# Class: BacklinksAvailableFiltersResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`BacklinksAvailableFiltersResponseInfo`**

## Implements

- [`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksAvailableFiltersResponseInfo.md#constructor)

### Properties

- [cost](BacklinksAvailableFiltersResponseInfo.md#cost)
- [status\_code](BacklinksAvailableFiltersResponseInfo.md#status_code)
- [status\_message](BacklinksAvailableFiltersResponseInfo.md#status_message)
- [tasks](BacklinksAvailableFiltersResponseInfo.md#tasks)
- [tasks\_count](BacklinksAvailableFiltersResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksAvailableFiltersResponseInfo.md#tasks_error)
- [time](BacklinksAvailableFiltersResponseInfo.md#time)
- [version](BacklinksAvailableFiltersResponseInfo.md#version)

### Methods

- [init](BacklinksAvailableFiltersResponseInfo.md#init)
- [toJSON](BacklinksAvailableFiltersResponseInfo.md#tojson)
- [fromJS](BacklinksAvailableFiltersResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksAvailableFiltersResponseInfo**(`data?`): [`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksAvailableFiltersResponseInfo`](../interfaces/IBacklinksAvailableFiltersResponseInfo.md) |

#### Returns

[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:128889](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128889)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksAvailableFiltersResponseInfo](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[cost](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#cost)

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

[IBacklinksAvailableFiltersResponseInfo](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[status_code](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#status_code)

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

[IBacklinksAvailableFiltersResponseInfo](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[status_message](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`BacklinksAvailableFiltersTaskInfo`](BacklinksAvailableFiltersTaskInfo.md)[]

#### Implementation of

[IBacklinksAvailableFiltersResponseInfo](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[tasks](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#tasks)

#### Defined in

[main.ts:128885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128885)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksAvailableFiltersResponseInfo](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[tasks_count](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksAvailableFiltersResponseInfo](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[tasks_error](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksAvailableFiltersResponseInfo](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[time](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksAvailableFiltersResponseInfo](../interfaces/IBacklinksAvailableFiltersResponseInfo.md).[version](../interfaces/IBacklinksAvailableFiltersResponseInfo.md#version)

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

[main.ts:128893](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128893)

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

[main.ts:128915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128915)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:128908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L128908)
