[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesLiveResponseInfo

# Class: BacklinksDomainPagesLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BacklinksDomainPagesLiveResponseInfo`**

## Implements

- [`IBacklinksDomainPagesLiveResponseInfo`](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainPagesLiveResponseInfo.md#constructor)

### Properties

- [cost](BacklinksDomainPagesLiveResponseInfo.md#cost)
- [status\_code](BacklinksDomainPagesLiveResponseInfo.md#status_code)
- [status\_message](BacklinksDomainPagesLiveResponseInfo.md#status_message)
- [tasks](BacklinksDomainPagesLiveResponseInfo.md#tasks)
- [tasks\_count](BacklinksDomainPagesLiveResponseInfo.md#tasks_count)
- [tasks\_error](BacklinksDomainPagesLiveResponseInfo.md#tasks_error)
- [time](BacklinksDomainPagesLiveResponseInfo.md#time)
- [version](BacklinksDomainPagesLiveResponseInfo.md#version)

### Methods

- [init](BacklinksDomainPagesLiveResponseInfo.md#init)
- [toJSON](BacklinksDomainPagesLiveResponseInfo.md#tojson)
- [fromJS](BacklinksDomainPagesLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainPagesLiveResponseInfo**(`data?`): [`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainPagesLiveResponseInfo`](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md) |

#### Returns

[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:133558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133558)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBacklinksDomainPagesLiveResponseInfo](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md).[cost](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md#cost)

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

[IBacklinksDomainPagesLiveResponseInfo](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md).[status_code](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md#status_code)

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

[IBacklinksDomainPagesLiveResponseInfo](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md).[status_message](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BacklinksDomainPagesLiveTaskInfo`](BacklinksDomainPagesLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBacklinksDomainPagesLiveResponseInfo](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md).[tasks](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:133554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133554)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBacklinksDomainPagesLiveResponseInfo](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md).[tasks_count](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBacklinksDomainPagesLiveResponseInfo](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md).[tasks_error](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBacklinksDomainPagesLiveResponseInfo](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md).[time](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBacklinksDomainPagesLiveResponseInfo](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md).[version](../interfaces/IBacklinksDomainPagesLiveResponseInfo.md#version)

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

[main.ts:133562](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133562)

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

[main.ts:133584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133584)

___


### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:133577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133577)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")