[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTaskGetAdvancedTaskInfo

# Class: MerchantAmazonProductsTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantAmazonProductsTaskGetAdvancedTaskInfo`**

## Implements

- [`IMerchantAmazonProductsTaskGetAdvancedTaskInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#cost)
- [data](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#data)
- [id](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#id)
- [path](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#path)
- [result](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#result)
- [result\_count](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#status_message)
- [time](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#init)
- [toJSON](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTaskGetAdvancedTaskInfo**(`data?`): [`MerchantAmazonProductsTaskGetAdvancedTaskInfo`](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTaskGetAdvancedTaskInfo`](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md) |

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedTaskInfo`](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:171444](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171444)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md#cost)

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

[IMerchantAmazonProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md).[data](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md#data)

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

[IMerchantAmazonProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md).[id](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md).[path](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](MerchantAmazonProductsTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md).[result](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:171440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171440)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md#result_count)

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

[IMerchantAmazonProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md#status_code)

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

[IMerchantAmazonProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md).[time](../interfaces/IMerchantAmazonProductsTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:171448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171448)

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

[main.ts:171470](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171470)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTaskGetAdvancedTaskInfo`](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTaskGetAdvancedTaskInfo`](MerchantAmazonProductsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:171463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171463)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")