[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleLanguagesResponseInfo

# Class: MerchantGoogleLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`MerchantGoogleLanguagesResponseInfo`**

## Implements

- [`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleLanguagesResponseInfo.md#constructor)

### Properties

- [cost](MerchantGoogleLanguagesResponseInfo.md#cost)
- [status\_code](MerchantGoogleLanguagesResponseInfo.md#status_code)
- [status\_message](MerchantGoogleLanguagesResponseInfo.md#status_message)
- [tasks](MerchantGoogleLanguagesResponseInfo.md#tasks)
- [tasks\_count](MerchantGoogleLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](MerchantGoogleLanguagesResponseInfo.md#tasks_error)
- [time](MerchantGoogleLanguagesResponseInfo.md#time)
- [version](MerchantGoogleLanguagesResponseInfo.md#version)

### Methods

- [init](MerchantGoogleLanguagesResponseInfo.md#init)
- [toJSON](MerchantGoogleLanguagesResponseInfo.md#tojson)
- [fromJS](MerchantGoogleLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleLanguagesResponseInfo**(`data?`): [`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleLanguagesResponseInfo`](../interfaces/IMerchantGoogleLanguagesResponseInfo.md) |

#### Returns

[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:163458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163458)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleLanguagesResponseInfo](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[cost](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#cost)

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

[IMerchantGoogleLanguagesResponseInfo](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[status_code](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#status_code)

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

[IMerchantGoogleLanguagesResponseInfo](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[status_message](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`MerchantGoogleLanguagesTaskInfo`](MerchantGoogleLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[IMerchantGoogleLanguagesResponseInfo](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[tasks](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#tasks)

#### Defined in

[main.ts:163454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163454)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IMerchantGoogleLanguagesResponseInfo](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[tasks_count](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IMerchantGoogleLanguagesResponseInfo](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[tasks_error](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IMerchantGoogleLanguagesResponseInfo](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[time](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IMerchantGoogleLanguagesResponseInfo](../interfaces/IMerchantGoogleLanguagesResponseInfo.md).[version](../interfaces/IMerchantGoogleLanguagesResponseInfo.md#version)

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

[main.ts:163462](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163462)

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

[main.ts:163484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163484)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:163477](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163477)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")