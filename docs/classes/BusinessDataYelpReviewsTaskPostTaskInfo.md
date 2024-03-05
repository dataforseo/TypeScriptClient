[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpReviewsTaskPostTaskInfo

# Class: BusinessDataYelpReviewsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataYelpReviewsTaskPostTaskInfo`**

## Implements

- [`IBusinessDataYelpReviewsTaskPostTaskInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpReviewsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpReviewsTaskPostTaskInfo.md#cost)
- [data](BusinessDataYelpReviewsTaskPostTaskInfo.md#data)
- [id](BusinessDataYelpReviewsTaskPostTaskInfo.md#id)
- [path](BusinessDataYelpReviewsTaskPostTaskInfo.md#path)
- [result](BusinessDataYelpReviewsTaskPostTaskInfo.md#result)
- [result\_count](BusinessDataYelpReviewsTaskPostTaskInfo.md#result_count)
- [status\_code](BusinessDataYelpReviewsTaskPostTaskInfo.md#status_code)
- [status\_message](BusinessDataYelpReviewsTaskPostTaskInfo.md#status_message)
- [time](BusinessDataYelpReviewsTaskPostTaskInfo.md#time)

### Methods

- [init](BusinessDataYelpReviewsTaskPostTaskInfo.md#init)
- [toJSON](BusinessDataYelpReviewsTaskPostTaskInfo.md#tojson)
- [fromJS](BusinessDataYelpReviewsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpReviewsTaskPostTaskInfo**(`data?`): [`BusinessDataYelpReviewsTaskPostTaskInfo`](BusinessDataYelpReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpReviewsTaskPostTaskInfo`](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md) |

#### Returns

[`BusinessDataYelpReviewsTaskPostTaskInfo`](BusinessDataYelpReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:204939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204939)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpReviewsTaskPostTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md).[cost](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md#cost)

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

[IBusinessDataYelpReviewsTaskPostTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md).[data](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md#data)

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

[IBusinessDataYelpReviewsTaskPostTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md).[id](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataYelpReviewsTaskPostTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md).[path](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md#path)

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

[IBusinessDataYelpReviewsTaskPostTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md).[result](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:204935](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204935)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataYelpReviewsTaskPostTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md).[result_count](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md#result_count)

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

[IBusinessDataYelpReviewsTaskPostTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md).[status_code](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md#status_code)

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

[IBusinessDataYelpReviewsTaskPostTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md).[status_message](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataYelpReviewsTaskPostTaskInfo](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md).[time](../interfaces/IBusinessDataYelpReviewsTaskPostTaskInfo.md#time)

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

[main.ts:204943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204943)

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

[main.ts:204961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204961)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpReviewsTaskPostTaskInfo`](BusinessDataYelpReviewsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpReviewsTaskPostTaskInfo`](BusinessDataYelpReviewsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:204954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L204954)
