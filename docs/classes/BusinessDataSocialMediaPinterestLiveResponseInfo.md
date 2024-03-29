[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataSocialMediaPinterestLiveResponseInfo

# Class: BusinessDataSocialMediaPinterestLiveResponseInfo

## Hierarchy

- [`BaseResponseInfo`](BaseResponseInfo.md)
  
  ↳ **`BusinessDataSocialMediaPinterestLiveResponseInfo`**

## Implements

- [`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataSocialMediaPinterestLiveResponseInfo.md#constructor)

### Properties

- [cost](BusinessDataSocialMediaPinterestLiveResponseInfo.md#cost)
- [status\_code](BusinessDataSocialMediaPinterestLiveResponseInfo.md#status_code)
- [status\_message](BusinessDataSocialMediaPinterestLiveResponseInfo.md#status_message)
- [tasks](BusinessDataSocialMediaPinterestLiveResponseInfo.md#tasks)
- [tasks\_count](BusinessDataSocialMediaPinterestLiveResponseInfo.md#tasks_count)
- [tasks\_error](BusinessDataSocialMediaPinterestLiveResponseInfo.md#tasks_error)
- [time](BusinessDataSocialMediaPinterestLiveResponseInfo.md#time)
- [version](BusinessDataSocialMediaPinterestLiveResponseInfo.md#version)

### Methods

- [init](BusinessDataSocialMediaPinterestLiveResponseInfo.md#init)
- [toJSON](BusinessDataSocialMediaPinterestLiveResponseInfo.md#tojson)
- [fromJS](BusinessDataSocialMediaPinterestLiveResponseInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataSocialMediaPinterestLiveResponseInfo**(`data?`): [`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataSocialMediaPinterestLiveResponseInfo`](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md) |

#### Returns

[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[constructor](BaseResponseInfo.md#constructor)

#### Defined in

[main.ts:205833](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205833)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveResponseInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[cost](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#cost)

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

[IBusinessDataSocialMediaPinterestLiveResponseInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[status_code](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#status_code)

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

[IBusinessDataSocialMediaPinterestLiveResponseInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[status_message](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#status_message)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[status_message](BaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22506)

___


### tasks

• `Optional` **tasks**: [`BusinessDataSocialMediaPinterestLiveTaskInfo`](BusinessDataSocialMediaPinterestLiveTaskInfo.md)[]

array of tasks

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveResponseInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[tasks](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#tasks)

#### Defined in

[main.ts:205829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205829)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveResponseInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[tasks_count](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#tasks_count)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_count](BaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22512)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveResponseInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[tasks_error](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#tasks_error)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[tasks_error](BaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22514)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveResponseInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[time](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#time)

#### Inherited from

[BaseResponseInfo](BaseResponseInfo.md).[time](BaseResponseInfo.md#time)

#### Defined in

[main.ts:22508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22508)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Implementation of

[IBusinessDataSocialMediaPinterestLiveResponseInfo](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md).[version](../interfaces/IBusinessDataSocialMediaPinterestLiveResponseInfo.md#version)

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

[main.ts:205837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205837)

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

[main.ts:205859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205859)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)

#### Overrides

[BaseResponseInfo](BaseResponseInfo.md).[fromJS](BaseResponseInfo.md#fromjs)

#### Defined in

[main.ts:205852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205852)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")