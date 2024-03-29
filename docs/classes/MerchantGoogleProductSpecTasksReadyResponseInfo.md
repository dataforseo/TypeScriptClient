[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductSpecTasksReadyResponseInfo

# Class: MerchantGoogleProductSpecTasksReadyResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantGoogleProductSpecTasksReadyResponseInfo`**

## Implements

- [`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductSpecTasksReadyResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductSpecTasksReadyResponseInfo.md#cost)
- [status\_code](MerchantGoogleProductSpecTasksReadyResponseInfo.md#status_code)
- [status\_message](MerchantGoogleProductSpecTasksReadyResponseInfo.md#status_message)
- [tasks](MerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_error)
- [time](MerchantGoogleProductSpecTasksReadyResponseInfo.md#time)
- [version](MerchantGoogleProductSpecTasksReadyResponseInfo.md#version)

### Methods

- [init](MerchantGoogleProductSpecTasksReadyResponseInfo.md#init)
- [toJSON](MerchantGoogleProductSpecTasksReadyResponseInfo.md#tojson)
- [fromJS](MerchantGoogleProductSpecTasksReadyResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductSpecTasksReadyResponseInfo**(`data?`): [`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductSpecTasksReadyResponseInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md) |

#### Returns

[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:167784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167784)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[cost](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#cost)

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

[IMerchantGoogleProductSpecTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[status_code](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#status_code)

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

[IMerchantGoogleProductSpecTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[status_message](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantGoogleProductSpecTasksReadyTaskInfo`](MerchantGoogleProductSpecTasksReadyTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[tasks](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks)

#### Defined in

[main.ts:167780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167780)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[time](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyResponseInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md).[version](../interfaces/IMerchantGoogleProductSpecTasksReadyResponseInfo.md#version)

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

[main.ts:167788](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167788)

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

[main.ts:167810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167810)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:167803](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167803)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")