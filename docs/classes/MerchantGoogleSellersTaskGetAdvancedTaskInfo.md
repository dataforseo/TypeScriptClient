[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTaskGetAdvancedTaskInfo

# Class: MerchantGoogleSellersTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantGoogleSellersTaskGetAdvancedTaskInfo`**

## Implements

- [`IMerchantGoogleSellersTaskGetAdvancedTaskInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#cost)
- [data](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#data)
- [id](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#id)
- [path](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#path)
- [result](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#result)
- [result\_count](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#status_message)
- [time](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#init)
- [toJSON](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTaskGetAdvancedTaskInfo**(`data?`): [`MerchantGoogleSellersTaskGetAdvancedTaskInfo`](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTaskGetAdvancedTaskInfo`](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md) |

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedTaskInfo`](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:166933](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166933)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md#cost)

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

[IMerchantGoogleSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md).[data](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md#data)

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

[IMerchantGoogleSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md).[id](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md).[path](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantGoogleSellersTaskGetAdvancedResultInfo`](MerchantGoogleSellersTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md).[result](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:166929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166929)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md#result_count)

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

[IMerchantGoogleSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md#status_code)

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

[IMerchantGoogleSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleSellersTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md).[time](../interfaces/IMerchantGoogleSellersTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:166937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166937)

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

[main.ts:166959](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166959)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTaskGetAdvancedTaskInfo`](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTaskGetAdvancedTaskInfo`](MerchantGoogleSellersTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:166952](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166952)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")