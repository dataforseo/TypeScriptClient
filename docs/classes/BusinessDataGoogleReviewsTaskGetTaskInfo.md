[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleReviewsTaskGetTaskInfo

# Class: BusinessDataGoogleReviewsTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataGoogleReviewsTaskGetTaskInfo`**

## Implements

- [`IBusinessDataGoogleReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleReviewsTaskGetTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleReviewsTaskGetTaskInfo.md#cost)
- [data](BusinessDataGoogleReviewsTaskGetTaskInfo.md#data)
- [id](BusinessDataGoogleReviewsTaskGetTaskInfo.md#id)
- [path](BusinessDataGoogleReviewsTaskGetTaskInfo.md#path)
- [result](BusinessDataGoogleReviewsTaskGetTaskInfo.md#result)
- [result\_count](BusinessDataGoogleReviewsTaskGetTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleReviewsTaskGetTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleReviewsTaskGetTaskInfo.md#status_message)
- [time](BusinessDataGoogleReviewsTaskGetTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleReviewsTaskGetTaskInfo.md#init)
- [toJSON](BusinessDataGoogleReviewsTaskGetTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleReviewsTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleReviewsTaskGetTaskInfo**(`data?`): [`BusinessDataGoogleReviewsTaskGetTaskInfo`](BusinessDataGoogleReviewsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleReviewsTaskGetTaskInfo`](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md) |

#### Returns

[`BusinessDataGoogleReviewsTaskGetTaskInfo`](BusinessDataGoogleReviewsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:198560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198560)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetTaskInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md#cost)

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

[IBusinessDataGoogleReviewsTaskGetTaskInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md).[data](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md#data)

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

[IBusinessDataGoogleReviewsTaskGetTaskInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md).[id](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetTaskInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md).[path](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataGoogleReviewsTaskGetResultInfo`](BusinessDataGoogleReviewsTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetTaskInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md).[result](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:198556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198556)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetTaskInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md#result_count)

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

[IBusinessDataGoogleReviewsTaskGetTaskInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md#status_code)

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

[IBusinessDataGoogleReviewsTaskGetTaskInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleReviewsTaskGetTaskInfo](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md).[time](../interfaces/IBusinessDataGoogleReviewsTaskGetTaskInfo.md#time)

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

[main.ts:198564](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198564)

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

[main.ts:198586](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198586)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleReviewsTaskGetTaskInfo`](BusinessDataGoogleReviewsTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleReviewsTaskGetTaskInfo`](BusinessDataGoogleReviewsTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:198579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L198579)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")