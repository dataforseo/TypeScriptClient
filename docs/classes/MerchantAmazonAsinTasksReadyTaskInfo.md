[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonAsinTasksReadyTaskInfo

# Class: MerchantAmazonAsinTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantAmazonAsinTasksReadyTaskInfo`**

## Implements

- [`IMerchantAmazonAsinTasksReadyTaskInfo`](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonAsinTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](MerchantAmazonAsinTasksReadyTaskInfo.md#cost)
- [data](MerchantAmazonAsinTasksReadyTaskInfo.md#data)
- [id](MerchantAmazonAsinTasksReadyTaskInfo.md#id)
- [path](MerchantAmazonAsinTasksReadyTaskInfo.md#path)
- [result](MerchantAmazonAsinTasksReadyTaskInfo.md#result)
- [result\_count](MerchantAmazonAsinTasksReadyTaskInfo.md#result_count)
- [status\_code](MerchantAmazonAsinTasksReadyTaskInfo.md#status_code)
- [status\_message](MerchantAmazonAsinTasksReadyTaskInfo.md#status_message)
- [time](MerchantAmazonAsinTasksReadyTaskInfo.md#time)

### Methods

- [init](MerchantAmazonAsinTasksReadyTaskInfo.md#init)
- [toJSON](MerchantAmazonAsinTasksReadyTaskInfo.md#tojson)
- [fromJS](MerchantAmazonAsinTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonAsinTasksReadyTaskInfo**(`data?`): [`MerchantAmazonAsinTasksReadyTaskInfo`](MerchantAmazonAsinTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonAsinTasksReadyTaskInfo`](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md) |

#### Returns

[`MerchantAmazonAsinTasksReadyTaskInfo`](MerchantAmazonAsinTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:172216](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172216)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantAmazonAsinTasksReadyTaskInfo](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md).[cost](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md#cost)

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

[IMerchantAmazonAsinTasksReadyTaskInfo](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md).[data](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md#data)

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

[IMerchantAmazonAsinTasksReadyTaskInfo](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md).[id](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantAmazonAsinTasksReadyTaskInfo](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md).[path](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantAmazonAsinTasksReadyResultInfo`](MerchantAmazonAsinTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IMerchantAmazonAsinTasksReadyTaskInfo](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md).[result](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:172212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172212)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantAmazonAsinTasksReadyTaskInfo](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md).[result_count](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md#result_count)

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

[IMerchantAmazonAsinTasksReadyTaskInfo](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md).[status_code](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md#status_code)

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

[IMerchantAmazonAsinTasksReadyTaskInfo](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md).[status_message](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantAmazonAsinTasksReadyTaskInfo](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md).[time](../interfaces/IMerchantAmazonAsinTasksReadyTaskInfo.md#time)

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

[main.ts:172220](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172220)

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

[main.ts:172242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172242)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonAsinTasksReadyTaskInfo`](MerchantAmazonAsinTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonAsinTasksReadyTaskInfo`](MerchantAmazonAsinTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:172235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172235)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")