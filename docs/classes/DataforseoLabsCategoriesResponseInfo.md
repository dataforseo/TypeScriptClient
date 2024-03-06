[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsCategoriesResponseInfo

# Class: DataforseoLabsCategoriesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DataforseoLabsCategoriesResponseInfo`**

## Implements

- [`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsCategoriesResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsCategoriesResponseInfo.md#cost)
- [status\_code](DataforseoLabsCategoriesResponseInfo.md#status_code)
- [status\_message](DataforseoLabsCategoriesResponseInfo.md#status_message)
- [tasks](DataforseoLabsCategoriesResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsCategoriesResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsCategoriesResponseInfo.md#tasks_error)
- [time](DataforseoLabsCategoriesResponseInfo.md#time)
- [version](DataforseoLabsCategoriesResponseInfo.md#version)

### Methods

- [init](DataforseoLabsCategoriesResponseInfo.md#init)
- [toJSON](DataforseoLabsCategoriesResponseInfo.md#tojson)
- [fromJS](DataforseoLabsCategoriesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsCategoriesResponseInfo**(`data?`): [`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsCategoriesResponseInfo`](../interfaces/IDataforseoLabsCategoriesResponseInfo.md) |

#### Returns

[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:78273](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78273)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsCategoriesResponseInfo](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[cost](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#cost)

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

[IDataforseoLabsCategoriesResponseInfo](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[status_code](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#status_code)

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

[IDataforseoLabsCategoriesResponseInfo](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[status_message](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DataforseoLabsCategoriesTaskInfo`](DataforseoLabsCategoriesTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsCategoriesResponseInfo](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[tasks](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#tasks)

#### Defined in

[main.ts:78269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78269)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsCategoriesResponseInfo](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsCategoriesResponseInfo](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsCategoriesResponseInfo](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[time](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsCategoriesResponseInfo](../interfaces/IDataforseoLabsCategoriesResponseInfo.md).[version](../interfaces/IDataforseoLabsCategoriesResponseInfo.md#version)

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

[main.ts:78277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78277)

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

[main.ts:78299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78299)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsCategoriesResponseInfo`](DataforseoLabsCategoriesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:78292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L78292)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")