[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpSearchTaskGetResponseInfo

# Class: BusinessDataYelpSearchTaskGetResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataYelpSearchTaskGetResponseInfo`**

## Implements

- [`IBusinessDataYelpSearchTaskGetResponseInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpSearchTaskGetResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpSearchTaskGetResponseInfo.md#cost)
- [status\_code](BusinessDataYelpSearchTaskGetResponseInfo.md#status_code)
- [status\_message](BusinessDataYelpSearchTaskGetResponseInfo.md#status_message)
- [tasks](BusinessDataYelpSearchTaskGetResponseInfo.md#tasks)
- [tasks\_count](BusinessDataYelpSearchTaskGetResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataYelpSearchTaskGetResponseInfo.md#tasks_error)
- [time](BusinessDataYelpSearchTaskGetResponseInfo.md#time)
- [version](BusinessDataYelpSearchTaskGetResponseInfo.md#version)

### Methods

- [init](BusinessDataYelpSearchTaskGetResponseInfo.md#init)
- [toJSON](BusinessDataYelpSearchTaskGetResponseInfo.md#tojson)
- [fromJS](BusinessDataYelpSearchTaskGetResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpSearchTaskGetResponseInfo**(`data?`): [`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpSearchTaskGetResponseInfo`](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md) |

#### Returns

[`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:204623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204623)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[cost](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#cost)

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

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[status_code](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#status_code)

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

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[status_message](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataYelpSearchTaskGetTaskInfo`](BusinessDataYelpSearchTaskGetTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[tasks](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#tasks)

#### Defined in

[main.ts:204619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204619)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[tasks_count](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[tasks_error](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[time](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataYelpSearchTaskGetResponseInfo](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md).[version](../interfaces/IBusinessDataYelpSearchTaskGetResponseInfo.md#version)

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

[main.ts:204627](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204627)

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

[main.ts:204649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204649)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:204642](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204642)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")