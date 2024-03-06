[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTaskGetTaskInfo

# Class: BusinessDataTrustpilotReviewsTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataTrustpilotReviewsTaskGetTaskInfo`**

## Implements

- [`IBusinessDataTrustpilotReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#cost)
- [data](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#data)
- [id](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#id)
- [path](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#path)
- [result](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#result)
- [result\_count](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#result_count)
- [status\_code](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#status_message)
- [time](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#time)

### Methods

- [init](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#init)
- [toJSON](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotReviewsTaskGetTaskInfo**(`data?`): [`BusinessDataTrustpilotReviewsTaskGetTaskInfo`](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md) |

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetTaskInfo`](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:200240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200240)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md).[cost](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md#cost)

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

[IBusinessDataTrustpilotReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md).[data](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md#data)

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

[IBusinessDataTrustpilotReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md).[id](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md).[path](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataTrustpilotReviewsTaskGetResultInfo`](BusinessDataTrustpilotReviewsTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md).[result](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:200236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200236)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md).[result_count](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md#result_count)

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

[IBusinessDataTrustpilotReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md#status_code)

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

[IBusinessDataTrustpilotReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskGetTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md).[time](../interfaces/IBusinessDataTrustpilotReviewsTaskGetTaskInfo.md#time)

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

[main.ts:200244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200244)

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

[main.ts:200266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200266)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskGetTaskInfo`](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotReviewsTaskGetTaskInfo`](BusinessDataTrustpilotReviewsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:200259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200259)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")