[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo

# Class: DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:84185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84185)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:84181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84181)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md#version)

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

[main.ts:84189](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84189)

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

[main.ts:84211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84211)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:84204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L84204)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")