[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicLiveRegularResponseInfo

# Class: SerpGoogleOrganicLiveRegularResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`SerpGoogleOrganicLiveRegularResponseInfo`**

## Implements

- [`ISerpGoogleOrganicLiveRegularResponseInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicLiveRegularResponseInfo.md#constructor)

### Properties

- [cost](SerpGoogleOrganicLiveRegularResponseInfo.md#cost)
- [status\_code](SerpGoogleOrganicLiveRegularResponseInfo.md#status_code)
- [status\_message](SerpGoogleOrganicLiveRegularResponseInfo.md#status_message)
- [tasks](SerpGoogleOrganicLiveRegularResponseInfo.md#tasks)
- [tasks\_count](SerpGoogleOrganicLiveRegularResponseInfo.md#tasks_count)
- [tasks\_error](SerpGoogleOrganicLiveRegularResponseInfo.md#tasks_error)
- [time](SerpGoogleOrganicLiveRegularResponseInfo.md#time)
- [version](SerpGoogleOrganicLiveRegularResponseInfo.md#version)

### Methods

- [init](SerpGoogleOrganicLiveRegularResponseInfo.md#init)
- [toJSON](SerpGoogleOrganicLiveRegularResponseInfo.md#tojson)
- [fromJS](SerpGoogleOrganicLiveRegularResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicLiveRegularResponseInfo**(`data?`): [`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicLiveRegularResponseInfo`](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md) |

#### Returns

[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:36783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36783)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleOrganicLiveRegularResponseInfo](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md).[cost](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md#cost)

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

[ISerpGoogleOrganicLiveRegularResponseInfo](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md).[status_code](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md#status_code)

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

[ISerpGoogleOrganicLiveRegularResponseInfo](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md).[status_message](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`SerpGoogleOrganicLiveRegularTaskInfo`](SerpGoogleOrganicLiveRegularTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpGoogleOrganicLiveRegularResponseInfo](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md).[tasks](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md#tasks)

#### Defined in

[main.ts:36779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36779)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpGoogleOrganicLiveRegularResponseInfo](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md).[tasks_count](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpGoogleOrganicLiveRegularResponseInfo](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md).[tasks_error](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpGoogleOrganicLiveRegularResponseInfo](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md).[time](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpGoogleOrganicLiveRegularResponseInfo](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md).[version](../interfaces/ISerpGoogleOrganicLiveRegularResponseInfo.md#version)

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

[main.ts:36787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36787)

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

[main.ts:36809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36809)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:36802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L36802)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")