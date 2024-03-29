[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchLiveAdvancedResponseInfo

# Class: SerpGoogleDatasetSearchLiveAdvancedResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`**

## Implements

- [`ISerpGoogleDatasetSearchLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#cost)
- [status\_code](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#status_code)
- [status\_message](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#status_message)
- [tasks](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#tasks_error)
- [time](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#time)
- [version](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#version)

### Methods

- [init](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchLiveAdvancedResponseInfo**(`data?`): [`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchLiveAdvancedResponseInfo`](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:51731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51731)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md).[cost](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#cost)

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

[ISerpGoogleDatasetSearchLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md).[status_code](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#status_code)

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

[ISerpGoogleDatasetSearchLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md).[status_message](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleDatasetSearchLiveAdvancedTaskInfo`](SerpGoogleDatasetSearchLiveAdvancedTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md).[tasks](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#tasks)

#### Defined in

[main.ts:51727](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51727)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md).[time](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleDatasetSearchLiveAdvancedResponseInfo](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md).[version](../interfaces/ISerpGoogleDatasetSearchLiveAdvancedResponseInfo.md#version)

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

[main.ts:51735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51735)

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

[main.ts:51757](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51757)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:51750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L51750)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")