[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductInfoTasksReadyTaskInfo

# Class: MerchantGoogleProductInfoTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantGoogleProductInfoTasksReadyTaskInfo`**

## Implements

- [`IMerchantGoogleProductInfoTasksReadyTaskInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductInfoTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductInfoTasksReadyTaskInfo.md#cost)
- [data](MerchantGoogleProductInfoTasksReadyTaskInfo.md#data)
- [id](MerchantGoogleProductInfoTasksReadyTaskInfo.md#id)
- [path](MerchantGoogleProductInfoTasksReadyTaskInfo.md#path)
- [result](MerchantGoogleProductInfoTasksReadyTaskInfo.md#result)
- [result\_count](MerchantGoogleProductInfoTasksReadyTaskInfo.md#result_count)
- [status\_code](MerchantGoogleProductInfoTasksReadyTaskInfo.md#status_code)
- [status\_message](MerchantGoogleProductInfoTasksReadyTaskInfo.md#status_message)
- [time](MerchantGoogleProductInfoTasksReadyTaskInfo.md#time)

### Methods

- [init](MerchantGoogleProductInfoTasksReadyTaskInfo.md#init)
- [toJSON](MerchantGoogleProductInfoTasksReadyTaskInfo.md#tojson)
- [fromJS](MerchantGoogleProductInfoTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductInfoTasksReadyTaskInfo**(`data?`): [`MerchantGoogleProductInfoTasksReadyTaskInfo`](MerchantGoogleProductInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductInfoTasksReadyTaskInfo`](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md) |

#### Returns

[`MerchantGoogleProductInfoTasksReadyTaskInfo`](MerchantGoogleProductInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:168873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168873)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md).[cost](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md#cost)

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

[IMerchantGoogleProductInfoTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md).[data](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md#data)

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

[IMerchantGoogleProductInfoTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md).[id](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md).[path](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantGoogleProductInfoTasksReadyResultInfo`](MerchantGoogleProductInfoTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md).[result](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:168869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168869)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md).[result_count](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md#result_count)

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

[IMerchantGoogleProductInfoTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md).[status_code](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md#status_code)

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

[IMerchantGoogleProductInfoTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md).[status_message](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleProductInfoTasksReadyTaskInfo](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md).[time](../interfaces/IMerchantGoogleProductInfoTasksReadyTaskInfo.md#time)

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

[main.ts:168877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168877)

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

[main.ts:168899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168899)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductInfoTasksReadyTaskInfo`](MerchantGoogleProductInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductInfoTasksReadyTaskInfo`](MerchantGoogleProductInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:168892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168892)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")