[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductsTasksReadyTaskInfo

# Class: MerchantGoogleProductsTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantGoogleProductsTasksReadyTaskInfo`**

## Implements

- [`IMerchantGoogleProductsTasksReadyTaskInfo`](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductsTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductsTasksReadyTaskInfo.md#cost)
- [data](MerchantGoogleProductsTasksReadyTaskInfo.md#data)
- [id](MerchantGoogleProductsTasksReadyTaskInfo.md#id)
- [path](MerchantGoogleProductsTasksReadyTaskInfo.md#path)
- [result](MerchantGoogleProductsTasksReadyTaskInfo.md#result)
- [result\_count](MerchantGoogleProductsTasksReadyTaskInfo.md#result_count)
- [status\_code](MerchantGoogleProductsTasksReadyTaskInfo.md#status_code)
- [status\_message](MerchantGoogleProductsTasksReadyTaskInfo.md#status_message)
- [time](MerchantGoogleProductsTasksReadyTaskInfo.md#time)

### Methods

- [init](MerchantGoogleProductsTasksReadyTaskInfo.md#init)
- [toJSON](MerchantGoogleProductsTasksReadyTaskInfo.md#tojson)
- [fromJS](MerchantGoogleProductsTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductsTasksReadyTaskInfo**(`data?`): [`MerchantGoogleProductsTasksReadyTaskInfo`](MerchantGoogleProductsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductsTasksReadyTaskInfo`](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md) |

#### Returns

[`MerchantGoogleProductsTasksReadyTaskInfo`](MerchantGoogleProductsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:164323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164323)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductsTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md).[cost](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md#cost)

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

[IMerchantGoogleProductsTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md).[data](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md#data)

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

[IMerchantGoogleProductsTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md).[id](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleProductsTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md).[path](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantGoogleProductsTasksReadyResultInfo`](MerchantGoogleProductsTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleProductsTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md).[result](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:164319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164319)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleProductsTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md).[result_count](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md#result_count)

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

[IMerchantGoogleProductsTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md).[status_code](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md#status_code)

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

[IMerchantGoogleProductsTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md).[status_message](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleProductsTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md).[time](../interfaces/IMerchantGoogleProductsTasksReadyTaskInfo.md#time)

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

[main.ts:164327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164327)

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

[main.ts:164349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164349)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductsTasksReadyTaskInfo`](MerchantGoogleProductsTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductsTasksReadyTaskInfo`](MerchantGoogleProductsTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:164342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164342)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")