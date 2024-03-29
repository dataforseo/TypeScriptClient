[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicLiveHtmlResponseInfo

# Class: SerpGoogleOrganicLiveHtmlResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleOrganicLiveHtmlResponseInfo`**

## Implements

- [`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicLiveHtmlResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicLiveHtmlResponseInfo.md#cost)
- [status\_code](SerpGoogleOrganicLiveHtmlResponseInfo.md#status_code)
- [status\_message](SerpGoogleOrganicLiveHtmlResponseInfo.md#status_message)
- [tasks](SerpGoogleOrganicLiveHtmlResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleOrganicLiveHtmlResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleOrganicLiveHtmlResponseInfo.md#tasks_error)
- [time](SerpGoogleOrganicLiveHtmlResponseInfo.md#time)
- [version](SerpGoogleOrganicLiveHtmlResponseInfo.md#version)

### Methods

- [init](SerpGoogleOrganicLiveHtmlResponseInfo.md#init)
- [toJSON](SerpGoogleOrganicLiveHtmlResponseInfo.md#tojson)
- [fromJS](SerpGoogleOrganicLiveHtmlResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicLiveHtmlResponseInfo**(`data?`): [`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicLiveHtmlResponseInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md) |

#### Returns

[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:37263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37263)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResponseInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[cost](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#cost)

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

[ISerpGoogleOrganicLiveHtmlResponseInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[status_code](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#status_code)

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

[ISerpGoogleOrganicLiveHtmlResponseInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[status_message](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleOrganicLiveHtmlTaskInfo`](SerpGoogleOrganicLiveHtmlTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResponseInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[tasks](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#tasks)

#### Defined in

[main.ts:37259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37259)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResponseInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResponseInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResponseInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[time](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResponseInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md).[version](../interfaces/ISerpGoogleOrganicLiveHtmlResponseInfo.md#version)

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

[main.ts:37267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37267)

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

[main.ts:37289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37289)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:37282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37282)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")