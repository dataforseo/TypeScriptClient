[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageLinksResponseInfo

# Class: OnPageLinksResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`OnPageLinksResponseInfo`**

## Implements

- [`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLinksResponseInfo.md#constructor)

### Properties

- [cost](OnPageLinksResponseInfo.md#cost)
- [status\_code](OnPageLinksResponseInfo.md#status_code)
- [status\_message](OnPageLinksResponseInfo.md#status_message)
- [tasks](OnPageLinksResponseInfo.md#tasks)
- [tasks\_count](OnPageLinksResponseInfo.md#tasks_count)
- [tasks\_error](OnPageLinksResponseInfo.md#tasks_error)
- [time](OnPageLinksResponseInfo.md#time)
- [version](OnPageLinksResponseInfo.md#version)

### Methods

- [init](OnPageLinksResponseInfo.md#init)
- [toJSON](OnPageLinksResponseInfo.md#tojson)
- [fromJS](OnPageLinksResponseInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLinksResponseInfo**(`data?`): [`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLinksResponseInfo`](../interfaces/IOnPageLinksResponseInfo.md) |

#### Returns

[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:148670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148670)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLinksResponseInfo](../interfaces/IOnPageLinksResponseInfo.md).[cost](../interfaces/IOnPageLinksResponseInfo.md#cost)

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

[IOnPageLinksResponseInfo](../interfaces/IOnPageLinksResponseInfo.md).[status_code](../interfaces/IOnPageLinksResponseInfo.md#status_code)

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

[IOnPageLinksResponseInfo](../interfaces/IOnPageLinksResponseInfo.md).[status_message](../interfaces/IOnPageLinksResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`OnPageLinksTaskInfo`](OnPageLinksTaskInfo.md)[]

array of tasks

#### Implementation of

[IOnPageLinksResponseInfo](../interfaces/IOnPageLinksResponseInfo.md).[tasks](../interfaces/IOnPageLinksResponseInfo.md#tasks)

#### Defined in

[main.ts:148666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148666)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IOnPageLinksResponseInfo](../interfaces/IOnPageLinksResponseInfo.md).[tasks_count](../interfaces/IOnPageLinksResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IOnPageLinksResponseInfo](../interfaces/IOnPageLinksResponseInfo.md).[tasks_error](../interfaces/IOnPageLinksResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IOnPageLinksResponseInfo](../interfaces/IOnPageLinksResponseInfo.md).[time](../interfaces/IOnPageLinksResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IOnPageLinksResponseInfo](../interfaces/IOnPageLinksResponseInfo.md).[version](../interfaces/IOnPageLinksResponseInfo.md#version)

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

[main.ts:148674](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148674)

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

[main.ts:148696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148696)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:148689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L148689)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")