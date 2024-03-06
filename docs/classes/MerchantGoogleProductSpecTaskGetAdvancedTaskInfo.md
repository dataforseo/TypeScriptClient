[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductSpecTaskGetAdvancedTaskInfo

# Class: MerchantGoogleProductSpecTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantGoogleProductSpecTaskGetAdvancedTaskInfo`**

## Implements

- [`IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#cost)
- [data](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#data)
- [id](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#id)
- [path](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#path)
- [result](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#result)
- [result\_count](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#status_message)
- [time](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#init)
- [toJSON](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductSpecTaskGetAdvancedTaskInfo**(`data?`): [`MerchantGoogleProductSpecTaskGetAdvancedTaskInfo`](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo`](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md) |

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedTaskInfo`](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:168103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168103)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#cost)

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

[IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md).[data](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#data)

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

[IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md).[id](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md).[path](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantGoogleProductSpecTaskGetAdvancedResultInfo`](MerchantGoogleProductSpecTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md).[result](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:168099](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168099)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#result_count)

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

[IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#status_code)

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

[IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md).[time](../interfaces/IMerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:168107](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168107)

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

[main.ts:168129](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168129)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductSpecTaskGetAdvancedTaskInfo`](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductSpecTaskGetAdvancedTaskInfo`](MerchantGoogleProductSpecTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:168122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168122)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")