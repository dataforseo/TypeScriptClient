[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTaskGetHtmlTaskInfo

# Class: MerchantAmazonSellersTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantAmazonSellersTaskGetHtmlTaskInfo`**

## Implements

- [`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#cost)
- [data](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#data)
- [id](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#id)
- [path](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#path)
- [result](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#result)
- [result\_count](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#status_message)
- [time](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#init)
- [toJSON](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](MerchantAmazonSellersTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonSellersTaskGetHtmlTaskInfo**(`data?`): [`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md) |

#### Returns

[`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:174750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174750)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[cost](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#cost)

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

[IMerchantAmazonSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[data](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#data)

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

[IMerchantAmazonSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[id](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[path](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantAmazonSellersTaskGetHtmlResultInfo`](MerchantAmazonSellersTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[result](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:174746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174746)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[result_count](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#result_count)

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

[IMerchantAmazonSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[status_code](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#status_code)

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

[IMerchantAmazonSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[status_message](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md).[time](../interfaces/IMerchantAmazonSellersTaskGetHtmlTaskInfo.md#time)

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

[main.ts:174754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174754)

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

[main.ts:174776](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174776)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonSellersTaskGetHtmlTaskInfo`](MerchantAmazonSellersTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:174769](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174769)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")