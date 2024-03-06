[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskGetHtmlTaskInfo

# Class: MerchantGoogleSellersTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantGoogleSellersTaskGetHtmlTaskInfo`**

## Implements

- [`IMerchantGoogleSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#cost)
- [data](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#data)
- [id](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#id)
- [path](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#path)
- [result](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#result)
- [result\_count](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#status_message)
- [time](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskGetHtmlTaskInfo**(`data?`): [`MerchantGoogleSellersTaskGetHtmlTaskInfo`](MerchantGoogleSellersTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskGetHtmlTaskInfo`](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskGetHtmlTaskInfo`](MerchantGoogleSellersTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:167149](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167149)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md).[cost](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md#cost)

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

[IMerchantGoogleSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md).[data](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md#data)

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

[IMerchantGoogleSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md).[id](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md).[path](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantGoogleSellersTaskGetHtmlResultInfo`](MerchantGoogleSellersTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md).[result](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:167145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167145)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md).[result_count](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md#result_count)

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

[IMerchantGoogleSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md).[status_code](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md#status_code)

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

[IMerchantGoogleSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md).[status_message](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleSellersTaskGetHtmlTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md).[time](../interfaces/IMerchantGoogleSellersTaskGetHtmlTaskInfo.md#time)

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

[main.ts:167153](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167153)

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

[main.ts:167175](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167175)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskGetHtmlTaskInfo`](MerchantGoogleSellersTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskGetHtmlTaskInfo`](MerchantGoogleSellersTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:167168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167168)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")