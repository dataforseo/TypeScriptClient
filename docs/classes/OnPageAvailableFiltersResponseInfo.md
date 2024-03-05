[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageAvailableFiltersResponseInfo

# Class: OnPageAvailableFiltersResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageAvailableFiltersResponseInfo`**

## Implements

- [`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageAvailableFiltersResponseInfo.md#constructor)

### Properties

- [cost](OnPageAvailableFiltersResponseInfo.md#cost)
- [status\_code](OnPageAvailableFiltersResponseInfo.md#status_code)
- [status\_message](OnPageAvailableFiltersResponseInfo.md#status_message)
- [tasks](OnPageAvailableFiltersResponseInfo.md#tasks)
- [tasks\_count](OnPageAvailableFiltersResponseInfo.md#tasks_count)
- [tasks\_error](OnPageAvailableFiltersResponseInfo.md#tasks_error)
- [time](OnPageAvailableFiltersResponseInfo.md#time)
- [version](OnPageAvailableFiltersResponseInfo.md#version)

### Methods

- [init](OnPageAvailableFiltersResponseInfo.md#init)
- [toJSON](OnPageAvailableFiltersResponseInfo.md#tojson)
- [fromJS](OnPageAvailableFiltersResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageAvailableFiltersResponseInfo**(`data?`): [`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageAvailableFiltersResponseInfo`](../interfaces/IOnPageAvailableFiltersResponseInfo.md) |

#### Returns

[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:142501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142501)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageAvailableFiltersResponseInfo](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[cost](../interfaces/IOnPageAvailableFiltersResponseInfo.md#cost)

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

[IOnPageAvailableFiltersResponseInfo](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[status_code](../interfaces/IOnPageAvailableFiltersResponseInfo.md#status_code)

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

[IOnPageAvailableFiltersResponseInfo](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[status_message](../interfaces/IOnPageAvailableFiltersResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`OnPageAvailableFiltersTaskInfo`](OnPageAvailableFiltersTaskInfo.md)[]

#### Implementation of

[IOnPageAvailableFiltersResponseInfo](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[tasks](../interfaces/IOnPageAvailableFiltersResponseInfo.md#tasks)

#### Defined in

[main.ts:142497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142497)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageAvailableFiltersResponseInfo](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[tasks_count](../interfaces/IOnPageAvailableFiltersResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageAvailableFiltersResponseInfo](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[tasks_error](../interfaces/IOnPageAvailableFiltersResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageAvailableFiltersResponseInfo](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[time](../interfaces/IOnPageAvailableFiltersResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageAvailableFiltersResponseInfo](../interfaces/IOnPageAvailableFiltersResponseInfo.md).[version](../interfaces/IOnPageAvailableFiltersResponseInfo.md#version)

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

[main.ts:142505](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142505)

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

[main.ts:142527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142527)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:142520](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L142520)
