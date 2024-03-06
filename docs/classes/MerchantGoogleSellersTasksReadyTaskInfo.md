[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersTasksReadyTaskInfo

# Class: MerchantGoogleSellersTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantGoogleSellersTasksReadyTaskInfo`**

## Implements

- [`IMerchantGoogleSellersTasksReadyTaskInfo`](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleSellersTasksReadyTaskInfo.md#cost)
- [data](MerchantGoogleSellersTasksReadyTaskInfo.md#data)
- [id](MerchantGoogleSellersTasksReadyTaskInfo.md#id)
- [path](MerchantGoogleSellersTasksReadyTaskInfo.md#path)
- [result](MerchantGoogleSellersTasksReadyTaskInfo.md#result)
- [result\_count](MerchantGoogleSellersTasksReadyTaskInfo.md#result_count)
- [status\_code](MerchantGoogleSellersTasksReadyTaskInfo.md#status_code)
- [status\_message](MerchantGoogleSellersTasksReadyTaskInfo.md#status_message)
- [time](MerchantGoogleSellersTasksReadyTaskInfo.md#time)

### Methods

- [init](MerchantGoogleSellersTasksReadyTaskInfo.md#init)
- [toJSON](MerchantGoogleSellersTasksReadyTaskInfo.md#tojson)
- [fromJS](MerchantGoogleSellersTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersTasksReadyTaskInfo**(`data?`): [`MerchantGoogleSellersTasksReadyTaskInfo`](MerchantGoogleSellersTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersTasksReadyTaskInfo`](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md) |

#### Returns

[`MerchantGoogleSellersTasksReadyTaskInfo`](MerchantGoogleSellersTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:166337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166337)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleSellersTasksReadyTaskInfo](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md).[cost](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md#cost)

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

[IMerchantGoogleSellersTasksReadyTaskInfo](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md).[data](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md#data)

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

[IMerchantGoogleSellersTasksReadyTaskInfo](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md).[id](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleSellersTasksReadyTaskInfo](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md).[path](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantGoogleSellersTasksReadyResultInfo`](MerchantGoogleSellersTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleSellersTasksReadyTaskInfo](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md).[result](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:166333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166333)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleSellersTasksReadyTaskInfo](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md).[result_count](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md#result_count)

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

[IMerchantGoogleSellersTasksReadyTaskInfo](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md).[status_code](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md#status_code)

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

[IMerchantGoogleSellersTasksReadyTaskInfo](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md).[status_message](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleSellersTasksReadyTaskInfo](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md).[time](../interfaces/IMerchantGoogleSellersTasksReadyTaskInfo.md#time)

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

[main.ts:166341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166341)

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

[main.ts:166363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166363)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersTasksReadyTaskInfo`](MerchantGoogleSellersTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersTasksReadyTaskInfo`](MerchantGoogleSellersTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:166356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L166356)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")