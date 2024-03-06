[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataErrorsResponseInfo

# Class: AppDataErrorsResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`AppDataErrorsResponseInfo`**

## Implements

- [`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataErrorsResponseInfo.md#constructor)

### Properties

- [cost](AppDataErrorsResponseInfo.md#cost)
- [status\_code](AppDataErrorsResponseInfo.md#status_code)
- [status\_message](AppDataErrorsResponseInfo.md#status_message)
- [tasks](AppDataErrorsResponseInfo.md#tasks)
- [tasks\_count](AppDataErrorsResponseInfo.md#tasks_count)
- [tasks\_error](AppDataErrorsResponseInfo.md#tasks_error)
- [time](AppDataErrorsResponseInfo.md#time)
- [version](AppDataErrorsResponseInfo.md#version)

### Methods

- [init](AppDataErrorsResponseInfo.md#init)
- [toJSON](AppDataErrorsResponseInfo.md#tojson)
- [fromJS](AppDataErrorsResponseInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataErrorsResponseInfo**(`data?`): [`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataErrorsResponseInfo`](../interfaces/IAppDataErrorsResponseInfo.md) |

#### Returns

[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:176917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176917)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IAppDataErrorsResponseInfo](../interfaces/IAppDataErrorsResponseInfo.md).[cost](../interfaces/IAppDataErrorsResponseInfo.md#cost)

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

[IAppDataErrorsResponseInfo](../interfaces/IAppDataErrorsResponseInfo.md).[status_code](../interfaces/IAppDataErrorsResponseInfo.md#status_code)

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

[IAppDataErrorsResponseInfo](../interfaces/IAppDataErrorsResponseInfo.md).[status_message](../interfaces/IAppDataErrorsResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`AppDataErrorsTaskInfo`](AppDataErrorsTaskInfo.md)[]

array of tasks

#### Implementation of

[IAppDataErrorsResponseInfo](../interfaces/IAppDataErrorsResponseInfo.md).[tasks](../interfaces/IAppDataErrorsResponseInfo.md#tasks)

#### Defined in

[main.ts:176913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176913)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IAppDataErrorsResponseInfo](../interfaces/IAppDataErrorsResponseInfo.md).[tasks_count](../interfaces/IAppDataErrorsResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IAppDataErrorsResponseInfo](../interfaces/IAppDataErrorsResponseInfo.md).[tasks_error](../interfaces/IAppDataErrorsResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IAppDataErrorsResponseInfo](../interfaces/IAppDataErrorsResponseInfo.md).[time](../interfaces/IAppDataErrorsResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IAppDataErrorsResponseInfo](../interfaces/IAppDataErrorsResponseInfo.md).[version](../interfaces/IAppDataErrorsResponseInfo.md#version)

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

[main.ts:176921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176921)

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

[main.ts:176943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176943)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:176936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L176936)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")