[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo

# Class: BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`**

## Implements

- [`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#cost)
- [data](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#data)
- [id](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#id)
- [path](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#path)
- [result](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#result)
- [result\_count](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#result_count)
- [status\_code](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#status_code)
- [status\_message](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#status_message)
- [time](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#time)

### Methods

- [init](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#init)
- [toJSON](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo**(`data?`): [`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md) |

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:190064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190064)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[cost](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#cost)

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

[IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[data](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#data)

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

[IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[id](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[path](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[result](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#result)

#### Defined in

[main.ts:190060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190060)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[result_count](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#result_count)

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

[IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[status_code](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#status_code)

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

[IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[status_message](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md).[time](../interfaces/IBusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md#time)

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

[main.ts:190068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190068)

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

[main.ts:190090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190090)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:190083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190083)
