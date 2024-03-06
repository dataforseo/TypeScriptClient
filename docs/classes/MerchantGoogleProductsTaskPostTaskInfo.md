[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleProductsTaskPostTaskInfo

# Class: MerchantGoogleProductsTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantGoogleProductsTaskPostTaskInfo`**

## Implements

- [`IMerchantGoogleProductsTaskPostTaskInfo`](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleProductsTaskPostTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleProductsTaskPostTaskInfo.md#cost)
- [data](MerchantGoogleProductsTaskPostTaskInfo.md#data)
- [id](MerchantGoogleProductsTaskPostTaskInfo.md#id)
- [path](MerchantGoogleProductsTaskPostTaskInfo.md#path)
- [result](MerchantGoogleProductsTaskPostTaskInfo.md#result)
- [result\_count](MerchantGoogleProductsTaskPostTaskInfo.md#result_count)
- [status\_code](MerchantGoogleProductsTaskPostTaskInfo.md#status_code)
- [status\_message](MerchantGoogleProductsTaskPostTaskInfo.md#status_message)
- [time](MerchantGoogleProductsTaskPostTaskInfo.md#time)

### Methods

- [init](MerchantGoogleProductsTaskPostTaskInfo.md#init)
- [toJSON](MerchantGoogleProductsTaskPostTaskInfo.md#tojson)
- [fromJS](MerchantGoogleProductsTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleProductsTaskPostTaskInfo**(`data?`): [`MerchantGoogleProductsTaskPostTaskInfo`](MerchantGoogleProductsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleProductsTaskPostTaskInfo`](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md) |

#### Returns

[`MerchantGoogleProductsTaskPostTaskInfo`](MerchantGoogleProductsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:164130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164130)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleProductsTaskPostTaskInfo](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md).[cost](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md#cost)

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

[IMerchantGoogleProductsTaskPostTaskInfo](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md).[data](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md#data)

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

[IMerchantGoogleProductsTaskPostTaskInfo](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md).[id](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleProductsTaskPostTaskInfo](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md).[path](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: `any`

array of results
in this case, the value will be null

#### Implementation of

[IMerchantGoogleProductsTaskPostTaskInfo](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md).[result](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:164126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164126)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleProductsTaskPostTaskInfo](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md).[result_count](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md#result_count)

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

[IMerchantGoogleProductsTaskPostTaskInfo](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md).[status_code](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md#status_code)

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

[IMerchantGoogleProductsTaskPostTaskInfo](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md).[status_message](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleProductsTaskPostTaskInfo](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md).[time](../interfaces/IMerchantGoogleProductsTaskPostTaskInfo.md#time)

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

[main.ts:164134](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164134)

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

[main.ts:164152](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164152)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleProductsTaskPostTaskInfo`](MerchantGoogleProductsTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleProductsTaskPostTaskInfo`](MerchantGoogleProductsTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:164145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164145)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")