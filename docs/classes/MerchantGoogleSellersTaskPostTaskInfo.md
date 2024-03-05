[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskPostTaskInfo

# Class: MerchantGoogleSellersTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantGoogleSellersTaskPostTaskInfo`**

## Implements

- [`IMerchantGoogleSellersTaskPostTaskInfo`](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskPostTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleSellersTaskPostTaskInfo.md#cost)
- [data](MerchantGoogleSellersTaskPostTaskInfo.md#data)
- [id](MerchantGoogleSellersTaskPostTaskInfo.md#id)
- [path](MerchantGoogleSellersTaskPostTaskInfo.md#path)
- [result](MerchantGoogleSellersTaskPostTaskInfo.md#result)
- [result\_count](MerchantGoogleSellersTaskPostTaskInfo.md#result_count)
- [status\_code](MerchantGoogleSellersTaskPostTaskInfo.md#status_code)
- [status\_message](MerchantGoogleSellersTaskPostTaskInfo.md#status_message)
- [time](MerchantGoogleSellersTaskPostTaskInfo.md#time)

### Methods

- [init](MerchantGoogleSellersTaskPostTaskInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskPostTaskInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskPostTaskInfo**(`data?`): [`MerchantGoogleSellersTaskPostTaskInfo`](MerchantGoogleSellersTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskPostTaskInfo`](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskPostTaskInfo`](MerchantGoogleSellersTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:166144](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166144)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleSellersTaskPostTaskInfo](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md).[cost](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md#cost)

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

[IMerchantGoogleSellersTaskPostTaskInfo](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md).[data](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md#data)

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

[IMerchantGoogleSellersTaskPostTaskInfo](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md).[id](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleSellersTaskPostTaskInfo](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md).[path](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md#path)

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

[IMerchantGoogleSellersTaskPostTaskInfo](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md).[result](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:166140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166140)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleSellersTaskPostTaskInfo](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md).[result_count](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md#result_count)

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

[IMerchantGoogleSellersTaskPostTaskInfo](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md).[status_code](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md#status_code)

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

[IMerchantGoogleSellersTaskPostTaskInfo](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md).[status_message](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleSellersTaskPostTaskInfo](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md).[time](../interfaces/IMerchantGoogleSellersTaskPostTaskInfo.md#time)

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

[main.ts:166148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166148)

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

[main.ts:166166](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166166)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskPostTaskInfo`](MerchantGoogleSellersTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskPostTaskInfo`](MerchantGoogleSellersTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:166159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166159)
