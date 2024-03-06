[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingPageIntersectionLiveResponseInfo

# Class: DataforseoLabsBingPageIntersectionLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DataforseoLabsBingPageIntersectionLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#time)
- [version](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingPageIntersectionLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingPageIntersectionLiveResponseInfo**(`data?`): [`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingPageIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:104909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104909)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingPageIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingPageIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DataforseoLabsBingPageIntersectionLiveTaskInfo`](DataforseoLabsBingPageIntersectionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:104905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104905)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingPageIntersectionLiveResponseInfo.md#version)

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

[main.ts:104913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104913)

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

[main.ts:104935](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104935)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingPageIntersectionLiveResponseInfo`](DataforseoLabsBingPageIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:104928](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104928)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")