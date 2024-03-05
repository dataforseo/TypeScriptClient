[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductSpecTaskPostTaskInfo

# Class: MerchantGoogleProductSpecTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantGoogleProductSpecTaskPostTaskInfo`**

## Implements

- [`IMerchantGoogleProductSpecTaskPostTaskInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductSpecTaskPostTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductSpecTaskPostTaskInfo.md#cost)
- [data](MerchantGoogleProductSpecTaskPostTaskInfo.md#data)
- [id](MerchantGoogleProductSpecTaskPostTaskInfo.md#id)
- [path](MerchantGoogleProductSpecTaskPostTaskInfo.md#path)
- [result](MerchantGoogleProductSpecTaskPostTaskInfo.md#result)
- [result\_count](MerchantGoogleProductSpecTaskPostTaskInfo.md#result_count)
- [status\_code](MerchantGoogleProductSpecTaskPostTaskInfo.md#status_code)
- [status\_message](MerchantGoogleProductSpecTaskPostTaskInfo.md#status_message)
- [time](MerchantGoogleProductSpecTaskPostTaskInfo.md#time)

### Methods

- [init](MerchantGoogleProductSpecTaskPostTaskInfo.md#init)
- [toJSON](MerchantGoogleProductSpecTaskPostTaskInfo.md#tojson)
- [fromJS](MerchantGoogleProductSpecTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductSpecTaskPostTaskInfo**(`data?`): [`MerchantGoogleProductSpecTaskPostTaskInfo`](MerchantGoogleProductSpecTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductSpecTaskPostTaskInfo`](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md) |

#### Returns

[`MerchantGoogleProductSpecTaskPostTaskInfo`](MerchantGoogleProductSpecTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:167536](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167536)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductSpecTaskPostTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md).[cost](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md#cost)

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

[IMerchantGoogleProductSpecTaskPostTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md).[data](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md#data)

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

[IMerchantGoogleProductSpecTaskPostTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md).[id](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleProductSpecTaskPostTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md).[path](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md#path)

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

[IMerchantGoogleProductSpecTaskPostTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md).[result](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:167532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167532)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleProductSpecTaskPostTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md).[result_count](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md#result_count)

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

[IMerchantGoogleProductSpecTaskPostTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md).[status_code](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md#status_code)

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

[IMerchantGoogleProductSpecTaskPostTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md).[status_message](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleProductSpecTaskPostTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md).[time](../interfaces/IMerchantGoogleProductSpecTaskPostTaskInfo.md#time)

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

[main.ts:167540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167540)

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

[main.ts:167558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167558)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductSpecTaskPostTaskInfo`](MerchantGoogleProductSpecTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductSpecTaskPostTaskInfo`](MerchantGoogleProductSpecTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:167551](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167551)
