[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageRawHtmlResponseInfo

# Class: OnPageRawHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`OnPageRawHtmlResponseInfo`**

## Implements

- [`IOnPageRawHtmlResponseInfo`](../interfaces/IOnPageRawHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageRawHtmlResponseInfo.md#constructor)

### Properties

- [cost](OnPageRawHtmlResponseInfo.md#cost)
- [status\_code](OnPageRawHtmlResponseInfo.md#status_code)
- [status\_message](OnPageRawHtmlResponseInfo.md#status_message)
- [tasks](OnPageRawHtmlResponseInfo.md#tasks)
- [tasks\_count](OnPageRawHtmlResponseInfo.md#tasks_count)
- [tasks\_error](OnPageRawHtmlResponseInfo.md#tasks_error)
- [time](OnPageRawHtmlResponseInfo.md#time)
- [version](OnPageRawHtmlResponseInfo.md#version)

### Methods

- [init](OnPageRawHtmlResponseInfo.md#init)
- [toJSON](OnPageRawHtmlResponseInfo.md#tojson)
- [fromJS](OnPageRawHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageRawHtmlResponseInfo**(`data?`): [`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageRawHtmlResponseInfo`](../interfaces/IOnPageRawHtmlResponseInfo.md) |

#### Returns

[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:151384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151384)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageRawHtmlResponseInfo](../interfaces/IOnPageRawHtmlResponseInfo.md).[cost](../interfaces/IOnPageRawHtmlResponseInfo.md#cost)

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

[IOnPageRawHtmlResponseInfo](../interfaces/IOnPageRawHtmlResponseInfo.md).[status_code](../interfaces/IOnPageRawHtmlResponseInfo.md#status_code)

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

[IOnPageRawHtmlResponseInfo](../interfaces/IOnPageRawHtmlResponseInfo.md).[status_message](../interfaces/IOnPageRawHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`OnPageRawHtmlTaskInfo`](OnPageRawHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageRawHtmlResponseInfo](../interfaces/IOnPageRawHtmlResponseInfo.md).[tasks](../interfaces/IOnPageRawHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:151380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151380)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageRawHtmlResponseInfo](../interfaces/IOnPageRawHtmlResponseInfo.md).[tasks_count](../interfaces/IOnPageRawHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageRawHtmlResponseInfo](../interfaces/IOnPageRawHtmlResponseInfo.md).[tasks_error](../interfaces/IOnPageRawHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageRawHtmlResponseInfo](../interfaces/IOnPageRawHtmlResponseInfo.md).[time](../interfaces/IOnPageRawHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageRawHtmlResponseInfo](../interfaces/IOnPageRawHtmlResponseInfo.md).[version](../interfaces/IOnPageRawHtmlResponseInfo.md#version)

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

[main.ts:151388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151388)

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

[main.ts:151410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151410)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:151403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L151403)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")