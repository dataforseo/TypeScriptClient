[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTaskGetHtmlTaskInfo

# Class: MerchantAmazonProductsTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantAmazonProductsTaskGetHtmlTaskInfo`**

## Implements

- [`IMerchantAmazonProductsTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#cost)
- [data](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#data)
- [id](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#id)
- [path](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#path)
- [result](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#result)
- [result\_count](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#status_message)
- [time](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#init)
- [toJSON](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTaskGetHtmlTaskInfo**(`data?`): [`MerchantAmazonProductsTaskGetHtmlTaskInfo`](MerchantAmazonProductsTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md) |

#### Returns

[`MerchantAmazonProductsTaskGetHtmlTaskInfo`](MerchantAmazonProductsTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:171662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171662)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md).[cost](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md#cost)

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

[IMerchantAmazonProductsTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md).[data](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md#data)

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

[IMerchantAmazonProductsTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md).[id](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md).[path](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantAmazonProductsTaskGetHtmlResultInfo`](MerchantAmazonProductsTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md).[result](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:171658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171658)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md).[result_count](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md#result_count)

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

[IMerchantAmazonProductsTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md).[status_code](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md#status_code)

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

[IMerchantAmazonProductsTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md).[status_message](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonProductsTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md).[time](../interfaces/IMerchantAmazonProductsTaskGetHtmlTaskInfo.md#time)

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

[main.ts:171666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171666)

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

[main.ts:171688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171688)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTaskGetHtmlTaskInfo`](MerchantAmazonProductsTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTaskGetHtmlTaskInfo`](MerchantAmazonProductsTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:171681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171681)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")