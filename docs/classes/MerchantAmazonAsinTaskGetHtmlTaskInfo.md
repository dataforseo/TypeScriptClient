[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTaskGetHtmlTaskInfo

# Class: MerchantAmazonAsinTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantAmazonAsinTaskGetHtmlTaskInfo`**

## Implements

- [`IMerchantAmazonAsinTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#cost)
- [data](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#data)
- [id](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#id)
- [path](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#path)
- [result](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#result)
- [result\_count](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#status_message)
- [time](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#init)
- [toJSON](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTaskGetHtmlTaskInfo**(`data?`): [`MerchantAmazonAsinTaskGetHtmlTaskInfo`](MerchantAmazonAsinTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTaskGetHtmlTaskInfo`](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md) |

#### Returns

[`MerchantAmazonAsinTaskGetHtmlTaskInfo`](MerchantAmazonAsinTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:173452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173452)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md).[cost](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md#cost)

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

[IMerchantAmazonAsinTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md).[data](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md#data)

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

[IMerchantAmazonAsinTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md).[id](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md).[path](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantAmazonAsinTaskGetHtmlResultInfo`](MerchantAmazonAsinTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md).[result](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:173448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173448)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md).[result_count](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md#result_count)

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

[IMerchantAmazonAsinTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md).[status_code](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md#status_code)

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

[IMerchantAmazonAsinTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md).[status_message](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonAsinTaskGetHtmlTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md).[time](../interfaces/IMerchantAmazonAsinTaskGetHtmlTaskInfo.md#time)

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

[main.ts:173456](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173456)

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

[main.ts:173478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173478)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTaskGetHtmlTaskInfo`](MerchantAmazonAsinTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTaskGetHtmlTaskInfo`](MerchantAmazonAsinTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:173471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173471)
