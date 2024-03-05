[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductInfoTaskGetAdvancedTaskInfo

# Class: MerchantGoogleProductInfoTaskGetAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantGoogleProductInfoTaskGetAdvancedTaskInfo`**

## Implements

- [`IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#cost)
- [data](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#data)
- [id](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#id)
- [path](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#path)
- [result](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#result)
- [result\_count](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#result_count)
- [status\_code](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#status_code)
- [status\_message](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#status_message)
- [time](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#time)

### Methods

- [init](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#init)
- [toJSON](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#tojson)
- [fromJS](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductInfoTaskGetAdvancedTaskInfo**(`data?`): [`MerchantGoogleProductInfoTaskGetAdvancedTaskInfo`](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo`](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md) |

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedTaskInfo`](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:169461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169461)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md).[cost](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#cost)

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

[IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md).[data](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#data)

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

[IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md).[id](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md).[path](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantGoogleProductInfoTaskGetAdvancedResultInfo`](MerchantGoogleProductInfoTaskGetAdvancedResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md).[result](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:169457](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169457)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md).[result_count](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#result_count)

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

[IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md).[status_code](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#status_code)

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

[IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md).[status_message](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md).[time](../interfaces/IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md#time)

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

[main.ts:169465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169465)

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

[main.ts:169487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169487)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductInfoTaskGetAdvancedTaskInfo`](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductInfoTaskGetAdvancedTaskInfo`](MerchantGoogleProductInfoTaskGetAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:169480](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169480)
