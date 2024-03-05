[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLanguagesResponseInfo

# Class: SerpBingLanguagesResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)

  ↳ **`SerpBingLanguagesResponseInfo`**

## Implements

- [`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLanguagesResponseInfo.md#constructor)

### Properties

- [cost](SerpBingLanguagesResponseInfo.md#cost)
- [status\_code](SerpBingLanguagesResponseInfo.md#status_code)
- [status\_message](SerpBingLanguagesResponseInfo.md#status_message)
- [tasks](SerpBingLanguagesResponseInfo.md#tasks)
- [tasks\_count](SerpBingLanguagesResponseInfo.md#tasks_count)
- [tasks\_error](SerpBingLanguagesResponseInfo.md#tasks_error)
- [time](SerpBingLanguagesResponseInfo.md#time)
- [version](SerpBingLanguagesResponseInfo.md#version)

### Methods

- [init](SerpBingLanguagesResponseInfo.md#init)
- [toJSON](SerpBingLanguagesResponseInfo.md#tojson)
- [fromJS](SerpBingLanguagesResponseInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLanguagesResponseInfo**(`data?`): [`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLanguagesResponseInfo`](../interfaces/ISerpBingLanguagesResponseInfo.md) |

#### Returns

[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:53631](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53631)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLanguagesResponseInfo](../interfaces/ISerpBingLanguagesResponseInfo.md).[cost](../interfaces/ISerpBingLanguagesResponseInfo.md#cost)

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

[ISerpBingLanguagesResponseInfo](../interfaces/ISerpBingLanguagesResponseInfo.md).[status_code](../interfaces/ISerpBingLanguagesResponseInfo.md#status_code)

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

[ISerpBingLanguagesResponseInfo](../interfaces/ISerpBingLanguagesResponseInfo.md).[status_message](../interfaces/ISerpBingLanguagesResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___

### tasks

• `Optional` **tasks**: [`SerpBingLanguagesTaskInfo`](SerpBingLanguagesTaskInfo.md)[]

array of tasks

#### Implementation of

[ISerpBingLanguagesResponseInfo](../interfaces/ISerpBingLanguagesResponseInfo.md).[tasks](../interfaces/ISerpBingLanguagesResponseInfo.md#tasks)

#### Defined in

[main.ts:53627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53627)

___

### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[ISerpBingLanguagesResponseInfo](../interfaces/ISerpBingLanguagesResponseInfo.md).[tasks_count](../interfaces/ISerpBingLanguagesResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___

### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[ISerpBingLanguagesResponseInfo](../interfaces/ISerpBingLanguagesResponseInfo.md).[tasks_error](../interfaces/ISerpBingLanguagesResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___

### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[ISerpBingLanguagesResponseInfo](../interfaces/ISerpBingLanguagesResponseInfo.md).[time](../interfaces/ISerpBingLanguagesResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___

### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[ISerpBingLanguagesResponseInfo](../interfaces/ISerpBingLanguagesResponseInfo.md).[version](../interfaces/ISerpBingLanguagesResponseInfo.md#version)

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

[main.ts:53635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53635)

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

[main.ts:53657](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53657)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:53650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53650)
