[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersAdUrlTaskInfo

# Class: MerchantGoogleSellersAdUrlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantGoogleSellersAdUrlTaskInfo`**

## Implements

- [`IMerchantGoogleSellersAdUrlTaskInfo`](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersAdUrlTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleSellersAdUrlTaskInfo.md#cost)
- [data](MerchantGoogleSellersAdUrlTaskInfo.md#data)
- [id](MerchantGoogleSellersAdUrlTaskInfo.md#id)
- [path](MerchantGoogleSellersAdUrlTaskInfo.md#path)
- [result](MerchantGoogleSellersAdUrlTaskInfo.md#result)
- [result\_count](MerchantGoogleSellersAdUrlTaskInfo.md#result_count)
- [status\_code](MerchantGoogleSellersAdUrlTaskInfo.md#status_code)
- [status\_message](MerchantGoogleSellersAdUrlTaskInfo.md#status_message)
- [time](MerchantGoogleSellersAdUrlTaskInfo.md#time)

### Methods

- [init](MerchantGoogleSellersAdUrlTaskInfo.md#init)
- [toJSON](MerchantGoogleSellersAdUrlTaskInfo.md#tojson)
- [fromJS](MerchantGoogleSellersAdUrlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersAdUrlTaskInfo**(`data?`): [`MerchantGoogleSellersAdUrlTaskInfo`](MerchantGoogleSellersAdUrlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersAdUrlTaskInfo`](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md) |

#### Returns

[`MerchantGoogleSellersAdUrlTaskInfo`](MerchantGoogleSellersAdUrlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:169643](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169643)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleSellersAdUrlTaskInfo](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md).[cost](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md#cost)

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

[IMerchantGoogleSellersAdUrlTaskInfo](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md).[data](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md#data)

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

[IMerchantGoogleSellersAdUrlTaskInfo](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md).[id](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleSellersAdUrlTaskInfo](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md).[path](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleSellersAdUrlTaskInfo](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md).[result](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md#result)

#### Defined in

[main.ts:169639](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169639)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleSellersAdUrlTaskInfo](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md).[result_count](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md#result_count)

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

[IMerchantGoogleSellersAdUrlTaskInfo](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md).[status_code](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md#status_code)

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

[IMerchantGoogleSellersAdUrlTaskInfo](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md).[status_message](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleSellersAdUrlTaskInfo](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md).[time](../interfaces/IMerchantGoogleSellersAdUrlTaskInfo.md#time)

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

[main.ts:169647](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169647)

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

[main.ts:169669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169669)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersAdUrlTaskInfo`](MerchantGoogleSellersAdUrlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersAdUrlTaskInfo`](MerchantGoogleSellersAdUrlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:169662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L169662)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")