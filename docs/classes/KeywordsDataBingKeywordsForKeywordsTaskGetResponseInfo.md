[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo

# Class: KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`**

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#cost)
- [status\_code](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#status_message)
- [tasks](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tasks_error)
- [time](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#time)
- [version](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#version)

### Methods

- [init](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#init)
- [toJSON](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo**(`data?`): [`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md) |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:125768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125768)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#cost)

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

[IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#status_code)

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

[IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[tasks](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tasks)

#### Defined in

[main.ts:125764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125764)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[time](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md).[version](../interfaces/IKeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md#version)

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

[main.ts:125772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125772)

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

[main.ts:125794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125794)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:125787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L125787)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")