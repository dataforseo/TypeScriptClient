[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantIdListResponseInfo

# Class: MerchantIdListResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantIdListResponseInfo`**

## Implements

- [`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantIdListResponseInfo.md#constructor)

### Properties

- [cost](MerchantIdListResponseInfo.md#cost)
- [status\_code](MerchantIdListResponseInfo.md#status_code)
- [status\_message](MerchantIdListResponseInfo.md#status_message)
- [tasks](MerchantIdListResponseInfo.md#tasks)
- [tasks\_count](MerchantIdListResponseInfo.md#tasks_count)
- [tasks\_error](MerchantIdListResponseInfo.md#tasks_error)
- [time](MerchantIdListResponseInfo.md#time)
- [version](MerchantIdListResponseInfo.md#version)

### Methods

- [init](MerchantIdListResponseInfo.md#init)
- [toJSON](MerchantIdListResponseInfo.md#tojson)
- [fromJS](MerchantIdListResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantIdListResponseInfo**(`data?`): [`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantIdListResponseInfo`](../interfaces/IMerchantIdListResponseInfo.md) |

#### Returns

[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:162950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162950)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantIdListResponseInfo](../interfaces/IMerchantIdListResponseInfo.md).[cost](../interfaces/IMerchantIdListResponseInfo.md#cost)

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

[IMerchantIdListResponseInfo](../interfaces/IMerchantIdListResponseInfo.md).[status_code](../interfaces/IMerchantIdListResponseInfo.md#status_code)

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

[IMerchantIdListResponseInfo](../interfaces/IMerchantIdListResponseInfo.md).[status_message](../interfaces/IMerchantIdListResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantIdListTaskInfo`](MerchantIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantIdListResponseInfo](../interfaces/IMerchantIdListResponseInfo.md).[tasks](../interfaces/IMerchantIdListResponseInfo.md#tasks)

#### Defined in

[main.ts:162946](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162946)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantIdListResponseInfo](../interfaces/IMerchantIdListResponseInfo.md).[tasks_count](../interfaces/IMerchantIdListResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantIdListResponseInfo](../interfaces/IMerchantIdListResponseInfo.md).[tasks_error](../interfaces/IMerchantIdListResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantIdListResponseInfo](../interfaces/IMerchantIdListResponseInfo.md).[time](../interfaces/IMerchantIdListResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantIdListResponseInfo](../interfaces/IMerchantIdListResponseInfo.md).[version](../interfaces/IMerchantIdListResponseInfo.md#version)

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

[main.ts:162954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162954)

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

[main.ts:162976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162976)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:162969](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L162969)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")