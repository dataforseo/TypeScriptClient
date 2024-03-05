[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPagePagesResponseInfo

# Class: OnPagePagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`OnPagePagesResponseInfo`**

## Implements

- [`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPagePagesResponseInfo.md#constructor)

### Properties

- [cost](OnPagePagesResponseInfo.md#cost)
- [status\_code](OnPagePagesResponseInfo.md#status_code)
- [status\_message](OnPagePagesResponseInfo.md#status_message)
- [tasks](OnPagePagesResponseInfo.md#tasks)
- [tasks\_count](OnPagePagesResponseInfo.md#tasks_count)
- [tasks\_error](OnPagePagesResponseInfo.md#tasks_error)
- [time](OnPagePagesResponseInfo.md#time)
- [version](OnPagePagesResponseInfo.md#version)

### Methods

- [init](OnPagePagesResponseInfo.md#init)
- [toJSON](OnPagePagesResponseInfo.md#tojson)
- [fromJS](OnPagePagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPagePagesResponseInfo**(`data?`): [`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPagePagesResponseInfo`](../interfaces/IOnPagePagesResponseInfo.md) |

#### Returns

[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:145280](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145280)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPagePagesResponseInfo](../interfaces/IOnPagePagesResponseInfo.md).[cost](../interfaces/IOnPagePagesResponseInfo.md#cost)

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

[IOnPagePagesResponseInfo](../interfaces/IOnPagePagesResponseInfo.md).[status_code](../interfaces/IOnPagePagesResponseInfo.md#status_code)

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

[IOnPagePagesResponseInfo](../interfaces/IOnPagePagesResponseInfo.md).[status_message](../interfaces/IOnPagePagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`OnPagePagesTaskInfo`](OnPagePagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPagePagesResponseInfo](../interfaces/IOnPagePagesResponseInfo.md).[tasks](../interfaces/IOnPagePagesResponseInfo.md#tasks)

#### Defined in

[main.ts:145276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145276)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPagePagesResponseInfo](../interfaces/IOnPagePagesResponseInfo.md).[tasks_count](../interfaces/IOnPagePagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPagePagesResponseInfo](../interfaces/IOnPagePagesResponseInfo.md).[tasks_error](../interfaces/IOnPagePagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPagePagesResponseInfo](../interfaces/IOnPagePagesResponseInfo.md).[time](../interfaces/IOnPagePagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPagePagesResponseInfo](../interfaces/IOnPagePagesResponseInfo.md).[version](../interfaces/IOnPagePagesResponseInfo.md#version)

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

[main.ts:145284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145284)

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

[main.ts:145306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145306)

___

### fromJS

▸ **fromJS**(`data`): [`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:145299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L145299)
