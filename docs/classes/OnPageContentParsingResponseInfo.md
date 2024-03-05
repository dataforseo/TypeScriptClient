[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageContentParsingResponseInfo

# Class: OnPageContentParsingResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPageContentParsingResponseInfo`**

## Implements

- [`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageContentParsingResponseInfo.md#constructor)

### Properties

- [cost](OnPageContentParsingResponseInfo.md#cost)
- [status\_code](OnPageContentParsingResponseInfo.md#status_code)
- [status\_message](OnPageContentParsingResponseInfo.md#status_message)
- [tasks](OnPageContentParsingResponseInfo.md#tasks)
- [tasks\_count](OnPageContentParsingResponseInfo.md#tasks_count)
- [tasks\_error](OnPageContentParsingResponseInfo.md#tasks_error)
- [time](OnPageContentParsingResponseInfo.md#time)
- [version](OnPageContentParsingResponseInfo.md#version)

### Methods

- [init](OnPageContentParsingResponseInfo.md#init)
- [toJSON](OnPageContentParsingResponseInfo.md#tojson)
- [fromJS](OnPageContentParsingResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageContentParsingResponseInfo**(`data?`): [`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageContentParsingResponseInfo`](../interfaces/IOnPageContentParsingResponseInfo.md) |

#### Returns

[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:152492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152492)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageContentParsingResponseInfo](../interfaces/IOnPageContentParsingResponseInfo.md).[cost](../interfaces/IOnPageContentParsingResponseInfo.md#cost)

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

[IOnPageContentParsingResponseInfo](../interfaces/IOnPageContentParsingResponseInfo.md).[status_code](../interfaces/IOnPageContentParsingResponseInfo.md#status_code)

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

[IOnPageContentParsingResponseInfo](../interfaces/IOnPageContentParsingResponseInfo.md).[status_message](../interfaces/IOnPageContentParsingResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`OnPageContentParsingTaskInfo`](OnPageContentParsingTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageContentParsingResponseInfo](../interfaces/IOnPageContentParsingResponseInfo.md).[tasks](../interfaces/IOnPageContentParsingResponseInfo.md#tasks)

#### Defined in

[main.ts:152488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152488)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageContentParsingResponseInfo](../interfaces/IOnPageContentParsingResponseInfo.md).[tasks_count](../interfaces/IOnPageContentParsingResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageContentParsingResponseInfo](../interfaces/IOnPageContentParsingResponseInfo.md).[tasks_error](../interfaces/IOnPageContentParsingResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageContentParsingResponseInfo](../interfaces/IOnPageContentParsingResponseInfo.md).[time](../interfaces/IOnPageContentParsingResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageContentParsingResponseInfo](../interfaces/IOnPageContentParsingResponseInfo.md).[version](../interfaces/IOnPageContentParsingResponseInfo.md#version)

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

[main.ts:152496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152496)

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

[main.ts:152518](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152518)

___

### fromJS

▸ **fromJS**(`data`): [`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:152511](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L152511)
