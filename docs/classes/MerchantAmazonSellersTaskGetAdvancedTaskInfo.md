[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonSellersTaskGetAdvancedTaskInfo

# Class: MerchantAmazonSellersTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantAmazonSellersTaskGetAdvancedTaskInfo`**

## Implements

- [`IMerchantAmazonSellersTaskGetAdvancedTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#cost)
- [data](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#data)
- [id](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#id)
- [path](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#path)
- [result](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#result)
- [result\_count](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#status_message)
- [time](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#init)
- [toJSON](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonSellersTaskGetAdvancedTaskInfo**(`data?`): [`MerchantAmazonSellersTaskGetAdvancedTaskInfo`](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonSellersTaskGetAdvancedTaskInfo`](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md) |

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedTaskInfo`](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:174534](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174534)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md#cost)

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

[IMerchantAmazonSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md).[data](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md#data)

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

[IMerchantAmazonSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md).[id](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md).[path](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantAmazonSellersTaskGetAdvancedResultInfo`](MerchantAmazonSellersTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md).[result](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:174530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174530)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md#result_count)

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

[IMerchantAmazonSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md#status_code)

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

[IMerchantAmazonSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md).[time](../interfaces/IMerchantAmazonSellersTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:174538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174538)

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

[main.ts:174560](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174560)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonSellersTaskGetAdvancedTaskInfo`](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonSellersTaskGetAdvancedTaskInfo`](MerchantAmazonSellersTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:174553](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L174553)
