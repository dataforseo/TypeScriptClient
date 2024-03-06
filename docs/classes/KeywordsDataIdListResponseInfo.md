[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataIdListResponseInfo

# Class: KeywordsDataIdListResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`KeywordsDataIdListResponseInfo`**

## Implements

- [`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataIdListResponseInfo.md#constructor)

### Properties

- [cost](KeywordsDataIdListResponseInfo.md#cost)
- [status\_code](KeywordsDataIdListResponseInfo.md#status_code)
- [status\_message](KeywordsDataIdListResponseInfo.md#status_message)
- [tasks](KeywordsDataIdListResponseInfo.md#tasks)
- [tasks\_count](KeywordsDataIdListResponseInfo.md#tasks_count)
- [tasks\_error](KeywordsDataIdListResponseInfo.md#tasks_error)
- [time](KeywordsDataIdListResponseInfo.md#time)
- [version](KeywordsDataIdListResponseInfo.md#version)

### Methods

- [init](KeywordsDataIdListResponseInfo.md#init)
- [toJSON](KeywordsDataIdListResponseInfo.md#tojson)
- [fromJS](KeywordsDataIdListResponseInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataIdListResponseInfo**(`data?`): [`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataIdListResponseInfo`](../interfaces/IKeywordsDataIdListResponseInfo.md) |

#### Returns

[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:112517](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112517)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataIdListResponseInfo](../interfaces/IKeywordsDataIdListResponseInfo.md).[cost](../interfaces/IKeywordsDataIdListResponseInfo.md#cost)

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

[IKeywordsDataIdListResponseInfo](../interfaces/IKeywordsDataIdListResponseInfo.md).[status_code](../interfaces/IKeywordsDataIdListResponseInfo.md#status_code)

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

[IKeywordsDataIdListResponseInfo](../interfaces/IKeywordsDataIdListResponseInfo.md).[status_message](../interfaces/IKeywordsDataIdListResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`KeywordsDataIdListTaskInfo`](KeywordsDataIdListTaskInfo.md)[]

array of tasks

#### Implementation of

[IKeywordsDataIdListResponseInfo](../interfaces/IKeywordsDataIdListResponseInfo.md).[tasks](../interfaces/IKeywordsDataIdListResponseInfo.md#tasks)

#### Defined in

[main.ts:112513](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112513)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IKeywordsDataIdListResponseInfo](../interfaces/IKeywordsDataIdListResponseInfo.md).[tasks_count](../interfaces/IKeywordsDataIdListResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IKeywordsDataIdListResponseInfo](../interfaces/IKeywordsDataIdListResponseInfo.md).[tasks_error](../interfaces/IKeywordsDataIdListResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IKeywordsDataIdListResponseInfo](../interfaces/IKeywordsDataIdListResponseInfo.md).[time](../interfaces/IKeywordsDataIdListResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IKeywordsDataIdListResponseInfo](../interfaces/IKeywordsDataIdListResponseInfo.md).[version](../interfaces/IKeywordsDataIdListResponseInfo.md#version)

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

[main.ts:112521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112521)

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

[main.ts:112543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112543)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:112536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112536)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")