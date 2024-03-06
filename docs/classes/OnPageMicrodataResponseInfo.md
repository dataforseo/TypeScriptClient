[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageMicrodataResponseInfo

# Class: OnPageMicrodataResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`OnPageMicrodataResponseInfo`**

## Implements

- [`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageMicrodataResponseInfo.md#constructor)

### Properties

- [cost](OnPageMicrodataResponseInfo.md#cost)
- [status\_code](OnPageMicrodataResponseInfo.md#status_code)
- [status\_message](OnPageMicrodataResponseInfo.md#status_message)
- [tasks](OnPageMicrodataResponseInfo.md#tasks)
- [tasks\_count](OnPageMicrodataResponseInfo.md#tasks_count)
- [tasks\_error](OnPageMicrodataResponseInfo.md#tasks_error)
- [time](OnPageMicrodataResponseInfo.md#time)
- [version](OnPageMicrodataResponseInfo.md#version)

### Methods

- [init](OnPageMicrodataResponseInfo.md#init)
- [toJSON](OnPageMicrodataResponseInfo.md#tojson)
- [fromJS](OnPageMicrodataResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageMicrodataResponseInfo**(`data?`): [`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageMicrodataResponseInfo`](../interfaces/IOnPageMicrodataResponseInfo.md) |

#### Returns

[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:151084](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151084)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageMicrodataResponseInfo](../interfaces/IOnPageMicrodataResponseInfo.md).[cost](../interfaces/IOnPageMicrodataResponseInfo.md#cost)

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

[IOnPageMicrodataResponseInfo](../interfaces/IOnPageMicrodataResponseInfo.md).[status_code](../interfaces/IOnPageMicrodataResponseInfo.md#status_code)

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

[IOnPageMicrodataResponseInfo](../interfaces/IOnPageMicrodataResponseInfo.md).[status_message](../interfaces/IOnPageMicrodataResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`OnPageMicrodataTaskInfo`](OnPageMicrodataTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageMicrodataResponseInfo](../interfaces/IOnPageMicrodataResponseInfo.md).[tasks](../interfaces/IOnPageMicrodataResponseInfo.md#tasks)

#### Defined in

[main.ts:151080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151080)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageMicrodataResponseInfo](../interfaces/IOnPageMicrodataResponseInfo.md).[tasks_count](../interfaces/IOnPageMicrodataResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageMicrodataResponseInfo](../interfaces/IOnPageMicrodataResponseInfo.md).[tasks_error](../interfaces/IOnPageMicrodataResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageMicrodataResponseInfo](../interfaces/IOnPageMicrodataResponseInfo.md).[time](../interfaces/IOnPageMicrodataResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageMicrodataResponseInfo](../interfaces/IOnPageMicrodataResponseInfo.md).[version](../interfaces/IOnPageMicrodataResponseInfo.md#version)

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

[main.ts:151088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151088)

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

[main.ts:151110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151110)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:151103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151103)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")