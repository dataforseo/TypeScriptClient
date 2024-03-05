[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageWaterfallResponseInfo

# Class: OnPageWaterfallResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageWaterfallResponseInfo`**

## Implements

- [`IOnPageWaterfallResponseInfo`](../interfaces/IOnPageWaterfallResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageWaterfallResponseInfo.md#constructor)

### Properties

- [cost](OnPageWaterfallResponseInfo.md#cost)
- [status\_code](OnPageWaterfallResponseInfo.md#status_code)
- [status\_message](OnPageWaterfallResponseInfo.md#status_message)
- [tasks](OnPageWaterfallResponseInfo.md#tasks)
- [tasks\_count](OnPageWaterfallResponseInfo.md#tasks_count)
- [tasks\_error](OnPageWaterfallResponseInfo.md#tasks_error)
- [time](OnPageWaterfallResponseInfo.md#time)
- [version](OnPageWaterfallResponseInfo.md#version)

### Methods

- [init](OnPageWaterfallResponseInfo.md#init)
- [toJSON](OnPageWaterfallResponseInfo.md#tojson)
- [fromJS](OnPageWaterfallResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageWaterfallResponseInfo**(`data?`): [`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageWaterfallResponseInfo`](../interfaces/IOnPageWaterfallResponseInfo.md) |

#### Returns

[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:149990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149990)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageWaterfallResponseInfo](../interfaces/IOnPageWaterfallResponseInfo.md).[cost](../interfaces/IOnPageWaterfallResponseInfo.md#cost)

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

[IOnPageWaterfallResponseInfo](../interfaces/IOnPageWaterfallResponseInfo.md).[status_code](../interfaces/IOnPageWaterfallResponseInfo.md#status_code)

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

[IOnPageWaterfallResponseInfo](../interfaces/IOnPageWaterfallResponseInfo.md).[status_message](../interfaces/IOnPageWaterfallResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`OnPageWaterfallTaskInfo`](OnPageWaterfallTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageWaterfallResponseInfo](../interfaces/IOnPageWaterfallResponseInfo.md).[tasks](../interfaces/IOnPageWaterfallResponseInfo.md#tasks)

#### Defined in

[main.ts:149986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149986)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageWaterfallResponseInfo](../interfaces/IOnPageWaterfallResponseInfo.md).[tasks_count](../interfaces/IOnPageWaterfallResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageWaterfallResponseInfo](../interfaces/IOnPageWaterfallResponseInfo.md).[tasks_error](../interfaces/IOnPageWaterfallResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageWaterfallResponseInfo](../interfaces/IOnPageWaterfallResponseInfo.md).[time](../interfaces/IOnPageWaterfallResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageWaterfallResponseInfo](../interfaces/IOnPageWaterfallResponseInfo.md).[version](../interfaces/IOnPageWaterfallResponseInfo.md#version)

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

[main.ts:149994](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L149994)

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

[main.ts:150016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150016)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:150009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150009)
