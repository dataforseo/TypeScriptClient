[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTaskGetAdvancedTaskInfo

# Class: MerchantAmazonAsinTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantAmazonAsinTaskGetAdvancedTaskInfo`**

## Implements

- [`IMerchantAmazonAsinTaskGetAdvancedTaskInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#cost)
- [data](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#data)
- [id](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#id)
- [path](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#path)
- [result](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#result)
- [result\_count](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#status_message)
- [time](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#init)
- [toJSON](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTaskGetAdvancedTaskInfo**(`data?`): [`MerchantAmazonAsinTaskGetAdvancedTaskInfo`](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTaskGetAdvancedTaskInfo`](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md) |

#### Returns

[`MerchantAmazonAsinTaskGetAdvancedTaskInfo`](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:173182](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173182)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md#cost)

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

[IMerchantAmazonAsinTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md).[data](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md#data)

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

[IMerchantAmazonAsinTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md).[id](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md).[path](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantAmazonAsinTaskGetAdvancedResultInfo`](MerchantAmazonAsinTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md).[result](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:173178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173178)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md#result_count)

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

[IMerchantAmazonAsinTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md#status_code)

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

[IMerchantAmazonAsinTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonAsinTaskGetAdvancedTaskInfo](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md).[time](../interfaces/IMerchantAmazonAsinTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:173186](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173186)

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

[main.ts:173208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173208)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTaskGetAdvancedTaskInfo`](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTaskGetAdvancedTaskInfo`](MerchantAmazonAsinTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:173201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L173201)
