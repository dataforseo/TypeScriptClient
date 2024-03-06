[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonProductsTaskPostTaskInfo

# Class: MerchantAmazonProductsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantAmazonProductsTaskPostTaskInfo`**

## Implements

- [`IMerchantAmazonProductsTaskPostTaskInfo`](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonProductsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonProductsTaskPostTaskInfo.md#cost)
- [data](MerchantAmazonProductsTaskPostTaskInfo.md#data)
- [id](MerchantAmazonProductsTaskPostTaskInfo.md#id)
- [path](MerchantAmazonProductsTaskPostTaskInfo.md#path)
- [result](MerchantAmazonProductsTaskPostTaskInfo.md#result)
- [result\_count](MerchantAmazonProductsTaskPostTaskInfo.md#result_count)
- [status\_code](MerchantAmazonProductsTaskPostTaskInfo.md#status_code)
- [status\_message](MerchantAmazonProductsTaskPostTaskInfo.md#status_message)
- [time](MerchantAmazonProductsTaskPostTaskInfo.md#time)

### Methods

- [init](MerchantAmazonProductsTaskPostTaskInfo.md#init)
- [toJSON](MerchantAmazonProductsTaskPostTaskInfo.md#tojson)
- [fromJS](MerchantAmazonProductsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonProductsTaskPostTaskInfo**(`data?`): [`MerchantAmazonProductsTaskPostTaskInfo`](MerchantAmazonProductsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonProductsTaskPostTaskInfo`](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md) |

#### Returns

[`MerchantAmazonProductsTaskPostTaskInfo`](MerchantAmazonProductsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:170357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170357)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonProductsTaskPostTaskInfo](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md).[cost](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md#cost)

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

[IMerchantAmazonProductsTaskPostTaskInfo](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md).[data](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md#data)

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

[IMerchantAmazonProductsTaskPostTaskInfo](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md).[id](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonProductsTaskPostTaskInfo](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md).[path](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md#path)

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

[IMerchantAmazonProductsTaskPostTaskInfo](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md).[result](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:170353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170353)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonProductsTaskPostTaskInfo](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md).[result_count](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md#result_count)

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

[IMerchantAmazonProductsTaskPostTaskInfo](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md).[status_code](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md#status_code)

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

[IMerchantAmazonProductsTaskPostTaskInfo](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md).[status_message](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonProductsTaskPostTaskInfo](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md).[time](../interfaces/IMerchantAmazonProductsTaskPostTaskInfo.md#time)

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

[main.ts:170361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170361)

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

[main.ts:170379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170379)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonProductsTaskPostTaskInfo`](MerchantAmazonProductsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonProductsTaskPostTaskInfo`](MerchantAmazonProductsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:170372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170372)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")