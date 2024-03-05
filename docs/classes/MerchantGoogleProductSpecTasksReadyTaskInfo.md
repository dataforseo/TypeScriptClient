[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductSpecTasksReadyTaskInfo

# Class: MerchantGoogleProductSpecTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantGoogleProductSpecTasksReadyTaskInfo`**

## Implements

- [`IMerchantGoogleProductSpecTasksReadyTaskInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductSpecTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductSpecTasksReadyTaskInfo.md#cost)
- [data](MerchantGoogleProductSpecTasksReadyTaskInfo.md#data)
- [id](MerchantGoogleProductSpecTasksReadyTaskInfo.md#id)
- [path](MerchantGoogleProductSpecTasksReadyTaskInfo.md#path)
- [result](MerchantGoogleProductSpecTasksReadyTaskInfo.md#result)
- [result\_count](MerchantGoogleProductSpecTasksReadyTaskInfo.md#result_count)
- [status\_code](MerchantGoogleProductSpecTasksReadyTaskInfo.md#status_code)
- [status\_message](MerchantGoogleProductSpecTasksReadyTaskInfo.md#status_message)
- [time](MerchantGoogleProductSpecTasksReadyTaskInfo.md#time)

### Methods

- [init](MerchantGoogleProductSpecTasksReadyTaskInfo.md#init)
- [toJSON](MerchantGoogleProductSpecTasksReadyTaskInfo.md#tojson)
- [fromJS](MerchantGoogleProductSpecTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductSpecTasksReadyTaskInfo**(`data?`): [`MerchantGoogleProductSpecTasksReadyTaskInfo`](MerchantGoogleProductSpecTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductSpecTasksReadyTaskInfo`](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md) |

#### Returns

[`MerchantGoogleProductSpecTasksReadyTaskInfo`](MerchantGoogleProductSpecTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:167729](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167729)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md).[cost](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md#cost)

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

[IMerchantGoogleProductSpecTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md).[data](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md#data)

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

[IMerchantGoogleProductSpecTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md).[id](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md).[path](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantGoogleProductSpecTasksReadyResultInfo`](MerchantGoogleProductSpecTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md).[result](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:167725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167725)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md).[result_count](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md#result_count)

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

[IMerchantGoogleProductSpecTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md).[status_code](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md#status_code)

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

[IMerchantGoogleProductSpecTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md).[status_message](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleProductSpecTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md).[time](../interfaces/IMerchantGoogleProductSpecTasksReadyTaskInfo.md#time)

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

[main.ts:167733](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167733)

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

[main.ts:167755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167755)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductSpecTasksReadyTaskInfo`](MerchantGoogleProductSpecTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductSpecTasksReadyTaskInfo`](MerchantGoogleProductSpecTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:167748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L167748)
