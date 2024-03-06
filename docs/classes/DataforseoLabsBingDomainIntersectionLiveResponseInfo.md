[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingDomainIntersectionLiveResponseInfo

# Class: DataforseoLabsBingDomainIntersectionLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DataforseoLabsBingDomainIntersectionLiveResponseInfo`**

## Implements

- [`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#time)
- [version](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingDomainIntersectionLiveResponseInfo**(`data?`): [`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:103873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103873)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#cost)

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

[IDataforseoLabsBingDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#status_code)

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

[IDataforseoLabsBingDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DataforseoLabsBingDomainIntersectionLiveTaskInfo`](DataforseoLabsBingDomainIntersectionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:103869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103869)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsBingDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsBingDomainIntersectionLiveResponseInfo.md#version)

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

[main.ts:103877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103877)

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

[main.ts:103899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103899)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveResponseInfo`](DataforseoLabsBingDomainIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:103892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103892)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")