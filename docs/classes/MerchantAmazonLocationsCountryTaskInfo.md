[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonLocationsCountryTaskInfo

# Class: MerchantAmazonLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantAmazonLocationsCountryTaskInfo`**

## Implements

- [`IMerchantAmazonLocationsCountryTaskInfo`](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonLocationsCountryTaskInfo.md#cost)
- [data](MerchantAmazonLocationsCountryTaskInfo.md#data)
- [id](MerchantAmazonLocationsCountryTaskInfo.md#id)
- [path](MerchantAmazonLocationsCountryTaskInfo.md#path)
- [result](MerchantAmazonLocationsCountryTaskInfo.md#result)
- [result\_count](MerchantAmazonLocationsCountryTaskInfo.md#result_count)
- [status\_code](MerchantAmazonLocationsCountryTaskInfo.md#status_code)
- [status\_message](MerchantAmazonLocationsCountryTaskInfo.md#status_message)
- [time](MerchantAmazonLocationsCountryTaskInfo.md#time)

### Methods

- [init](MerchantAmazonLocationsCountryTaskInfo.md#init)
- [toJSON](MerchantAmazonLocationsCountryTaskInfo.md#tojson)
- [fromJS](MerchantAmazonLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonLocationsCountryTaskInfo**(`data?`): [`MerchantAmazonLocationsCountryTaskInfo`](MerchantAmazonLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonLocationsCountryTaskInfo`](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md) |

#### Returns

[`MerchantAmazonLocationsCountryTaskInfo`](MerchantAmazonLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:170027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170027)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonLocationsCountryTaskInfo](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md).[cost](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md#cost)

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

[IMerchantAmazonLocationsCountryTaskInfo](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md).[data](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md#data)

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

[IMerchantAmazonLocationsCountryTaskInfo](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md).[id](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonLocationsCountryTaskInfo](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md).[path](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantAmazonLocationsCountryResultInfo`](MerchantAmazonLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonLocationsCountryTaskInfo](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md).[result](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md#result)

#### Defined in

[main.ts:170023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170023)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonLocationsCountryTaskInfo](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md).[result_count](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md#result_count)

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

[IMerchantAmazonLocationsCountryTaskInfo](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md).[status_code](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md#status_code)

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

[IMerchantAmazonLocationsCountryTaskInfo](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md).[status_message](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonLocationsCountryTaskInfo](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md).[time](../interfaces/IMerchantAmazonLocationsCountryTaskInfo.md#time)

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

[main.ts:170031](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170031)

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

[main.ts:170053](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170053)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonLocationsCountryTaskInfo`](MerchantAmazonLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonLocationsCountryTaskInfo`](MerchantAmazonLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:170046](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170046)
