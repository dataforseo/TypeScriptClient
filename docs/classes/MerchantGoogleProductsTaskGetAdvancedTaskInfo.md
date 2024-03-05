[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductsTaskGetAdvancedTaskInfo

# Class: MerchantGoogleProductsTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantGoogleProductsTaskGetAdvancedTaskInfo`**

## Implements

- [`IMerchantGoogleProductsTaskGetAdvancedTaskInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#cost)
- [data](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#data)
- [id](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#id)
- [path](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#path)
- [result](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#result)
- [result\_count](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#status_message)
- [time](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#init)
- [toJSON](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductsTaskGetAdvancedTaskInfo**(`data?`): [`MerchantGoogleProductsTaskGetAdvancedTaskInfo`](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductsTaskGetAdvancedTaskInfo`](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md) |

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedTaskInfo`](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:165523](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165523)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md#cost)

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

[IMerchantGoogleProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md).[data](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md#data)

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

[IMerchantGoogleProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md).[id](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md).[path](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](MerchantGoogleProductsTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md).[result](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:165519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165519)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md#result_count)

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

[IMerchantGoogleProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md#status_code)

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

[IMerchantGoogleProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleProductsTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md).[time](../interfaces/IMerchantGoogleProductsTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:165527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165527)

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

[main.ts:165549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165549)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductsTaskGetAdvancedTaskInfo`](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductsTaskGetAdvancedTaskInfo`](MerchantGoogleProductsTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:165542](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165542)
