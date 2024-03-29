[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleDomainIntersectionLiveResponseInfo

# Class: DataforseoLabsGoogleDomainIntersectionLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`**

## Implements

- [`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#constructor)

### Properties

- [cost](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#cost)
- [status\_code](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#status_code)
- [status\_message](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#status_message)
- [tasks](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tasks)
- [tasks\_count](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tasks_count)
- [tasks\_error](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tasks_error)
- [time](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#time)
- [version](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#version)

### Methods

- [init](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#init)
- [toJSON](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tojson)
- [fromJS](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleDomainIntersectionLiveResponseInfo**(`data?`): [`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md) |

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:89265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89265)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[cost](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#cost)

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

[IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[status_code](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#status_code)

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

[IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[status_message](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`DataforseoLabsGoogleDomainIntersectionLiveTaskInfo`](DataforseoLabsGoogleDomainIntersectionLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[tasks](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:89261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89261)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[tasks_count](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[tasks_error](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[time](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md).[version](../interfaces/IDataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md#version)

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

[main.ts:89269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89269)

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

[main.ts:89291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89291)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleDomainIntersectionLiveResponseInfo`](DataforseoLabsGoogleDomainIntersectionLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:89284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L89284)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")