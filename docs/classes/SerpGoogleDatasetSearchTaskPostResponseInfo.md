[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTaskPostResponseInfo

# Class: SerpGoogleDatasetSearchTaskPostResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleDatasetSearchTaskPostResponseInfo`**

## Implements

- [`ISerpGoogleDatasetSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTaskPostResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetSearchTaskPostResponseInfo.md#cost)
- [status\_code](SerpGoogleDatasetSearchTaskPostResponseInfo.md#status_code)
- [status\_message](SerpGoogleDatasetSearchTaskPostResponseInfo.md#status_message)
- [tasks](SerpGoogleDatasetSearchTaskPostResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleDatasetSearchTaskPostResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleDatasetSearchTaskPostResponseInfo.md#tasks_error)
- [time](SerpGoogleDatasetSearchTaskPostResponseInfo.md#time)
- [version](SerpGoogleDatasetSearchTaskPostResponseInfo.md#version)

### Methods

- [init](SerpGoogleDatasetSearchTaskPostResponseInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTaskPostResponseInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTaskPostResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTaskPostResponseInfo**(`data?`): [`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTaskPostResponseInfo`](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:50087](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50087)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md).[cost](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md#cost)

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

[ISerpGoogleDatasetSearchTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md).[status_code](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md#status_code)

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

[ISerpGoogleDatasetSearchTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md).[status_message](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleDatasetSearchTaskPostTaskInfo`](SerpGoogleDatasetSearchTaskPostTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md).[tasks](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md#tasks)

#### Defined in

[main.ts:50083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50083)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md).[time](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleDatasetSearchTaskPostResponseInfo](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md).[version](../interfaces/ISerpGoogleDatasetSearchTaskPostResponseInfo.md#version)

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

[main.ts:50091](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50091)

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

[main.ts:50113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50113)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:50106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L50106)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")