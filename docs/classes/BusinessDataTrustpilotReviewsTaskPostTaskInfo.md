[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTrustpilotReviewsTaskPostTaskInfo

# Class: BusinessDataTrustpilotReviewsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataTrustpilotReviewsTaskPostTaskInfo`**

## Implements

- [`IBusinessDataTrustpilotReviewsTaskPostTaskInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#cost)
- [data](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#data)
- [id](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#id)
- [path](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#path)
- [result](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#result)
- [result\_count](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#result_count)
- [status\_code](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#status_code)
- [status\_message](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#status_message)
- [time](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#time)

### Methods

- [init](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#init)
- [toJSON](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#tojson)
- [fromJS](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTrustpilotReviewsTaskPostTaskInfo**(`data?`): [`BusinessDataTrustpilotReviewsTaskPostTaskInfo`](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTrustpilotReviewsTaskPostTaskInfo`](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md) |

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostTaskInfo`](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:199587](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199587)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md).[cost](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md#cost)

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

[IBusinessDataTrustpilotReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md).[data](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md#data)

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

[IBusinessDataTrustpilotReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md).[id](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md).[path](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md).[result](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:199583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199583)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md).[result_count](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md#result_count)

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

[IBusinessDataTrustpilotReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md).[status_code](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md#status_code)

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

[IBusinessDataTrustpilotReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md).[status_message](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTrustpilotReviewsTaskPostTaskInfo](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md).[time](../interfaces/IBusinessDataTrustpilotReviewsTaskPostTaskInfo.md#time)

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

[main.ts:199591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199591)

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

[main.ts:199609](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199609)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTrustpilotReviewsTaskPostTaskInfo`](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTrustpilotReviewsTaskPostTaskInfo`](BusinessDataTrustpilotReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:199602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L199602)
