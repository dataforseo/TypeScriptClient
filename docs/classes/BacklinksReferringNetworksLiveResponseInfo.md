[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksReferringNetworksLiveResponseInfo

# Class: BacklinksReferringNetworksLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksReferringNetworksLiveResponseInfo`**

## Implements

- [`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksReferringNetworksLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksReferringNetworksLiveResponseInfo.md#cost)
- [status\_code](BacklinksReferringNetworksLiveResponseInfo.md#status_code)
- [status\_message](BacklinksReferringNetworksLiveResponseInfo.md#status_message)
- [tasks](BacklinksReferringNetworksLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksReferringNetworksLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksReferringNetworksLiveResponseInfo.md#tasks_error)
- [time](BacklinksReferringNetworksLiveResponseInfo.md#time)
- [version](BacklinksReferringNetworksLiveResponseInfo.md#version)

### Methods

- [init](BacklinksReferringNetworksLiveResponseInfo.md#init)
- [toJSON](BacklinksReferringNetworksLiveResponseInfo.md#tojson)
- [fromJS](BacklinksReferringNetworksLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksReferringNetworksLiveResponseInfo**(`data?`): [`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksReferringNetworksLiveResponseInfo`](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md) |

#### Returns

[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:135876](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135876)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksReferringNetworksLiveResponseInfo](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[cost](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#cost)

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

[IBacklinksReferringNetworksLiveResponseInfo](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[status_code](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#status_code)

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

[IBacklinksReferringNetworksLiveResponseInfo](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[status_message](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksReferringNetworksLiveTaskInfo`](BacklinksReferringNetworksLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksReferringNetworksLiveResponseInfo](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[tasks](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:135872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135872)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksReferringNetworksLiveResponseInfo](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksReferringNetworksLiveResponseInfo](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksReferringNetworksLiveResponseInfo](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[time](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksReferringNetworksLiveResponseInfo](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md).[version](../interfaces/IBacklinksReferringNetworksLiveResponseInfo.md#version)

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

[main.ts:135880](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135880)

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

[main.ts:135902](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135902)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:135895](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135895)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")