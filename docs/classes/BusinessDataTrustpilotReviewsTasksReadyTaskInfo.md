[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTasksReadyTaskInfo

# Class: BusinessDataTrustpilotReviewsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataTrustpilotReviewsTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataTrustpilotReviewsTasksReadyTaskInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#cost)
- [data](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#data)
- [id](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#id)
- [path](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#path)
- [result](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotReviewsTasksReadyTaskInfo**(`data?`): [`BusinessDataTrustpilotReviewsTasksReadyTaskInfo`](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotReviewsTasksReadyTaskInfo`](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyTaskInfo`](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:199768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199768)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___


### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___


### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataTrustpilotReviewsTasksReadyResultInfo`](BusinessDataTrustpilotReviewsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:199764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199764)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___


### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___


### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotReviewsTasksReadyTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataTrustpilotReviewsTasksReadyTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

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

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

[main.ts:199772](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199772)

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

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

[main.ts:199794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199794)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTasksReadyTaskInfo`](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotReviewsTasksReadyTaskInfo`](BusinessDataTrustpilotReviewsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:199787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199787)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")