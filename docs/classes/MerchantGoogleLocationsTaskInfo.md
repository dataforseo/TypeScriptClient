[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleLocationsTaskInfo

# Class: MerchantGoogleLocationsTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`MerchantGoogleLocationsTaskInfo`**

## Implements

- [`IMerchantGoogleLocationsTaskInfo`](../interfaces/IMerchantGoogleLocationsTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleLocationsTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleLocationsTaskInfo.md#cost)
- [data](MerchantGoogleLocationsTaskInfo.md#data)
- [id](MerchantGoogleLocationsTaskInfo.md#id)
- [path](MerchantGoogleLocationsTaskInfo.md#path)
- [result](MerchantGoogleLocationsTaskInfo.md#result)
- [result\_count](MerchantGoogleLocationsTaskInfo.md#result_count)
- [status\_code](MerchantGoogleLocationsTaskInfo.md#status_code)
- [status\_message](MerchantGoogleLocationsTaskInfo.md#status_message)
- [time](MerchantGoogleLocationsTaskInfo.md#time)

### Methods

- [init](MerchantGoogleLocationsTaskInfo.md#init)
- [toJSON](MerchantGoogleLocationsTaskInfo.md#tojson)
- [fromJS](MerchantGoogleLocationsTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleLocationsTaskInfo**(`data?`): [`MerchantGoogleLocationsTaskInfo`](MerchantGoogleLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleLocationsTaskInfo`](../interfaces/IMerchantGoogleLocationsTaskInfo.md) |

#### Returns

[`MerchantGoogleLocationsTaskInfo`](MerchantGoogleLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:163593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163593)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleLocationsTaskInfo](../interfaces/IMerchantGoogleLocationsTaskInfo.md).[cost](../interfaces/IMerchantGoogleLocationsTaskInfo.md#cost)

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

[IMerchantGoogleLocationsTaskInfo](../interfaces/IMerchantGoogleLocationsTaskInfo.md).[data](../interfaces/IMerchantGoogleLocationsTaskInfo.md#data)

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

[IMerchantGoogleLocationsTaskInfo](../interfaces/IMerchantGoogleLocationsTaskInfo.md).[id](../interfaces/IMerchantGoogleLocationsTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleLocationsTaskInfo](../interfaces/IMerchantGoogleLocationsTaskInfo.md).[path](../interfaces/IMerchantGoogleLocationsTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`MerchantGoogleLocationsResultInfo`](MerchantGoogleLocationsResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleLocationsTaskInfo](../interfaces/IMerchantGoogleLocationsTaskInfo.md).[result](../interfaces/IMerchantGoogleLocationsTaskInfo.md#result)

#### Defined in

[main.ts:163589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163589)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleLocationsTaskInfo](../interfaces/IMerchantGoogleLocationsTaskInfo.md).[result_count](../interfaces/IMerchantGoogleLocationsTaskInfo.md#result_count)

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

[IMerchantGoogleLocationsTaskInfo](../interfaces/IMerchantGoogleLocationsTaskInfo.md).[status_code](../interfaces/IMerchantGoogleLocationsTaskInfo.md#status_code)

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

[IMerchantGoogleLocationsTaskInfo](../interfaces/IMerchantGoogleLocationsTaskInfo.md).[status_message](../interfaces/IMerchantGoogleLocationsTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleLocationsTaskInfo](../interfaces/IMerchantGoogleLocationsTaskInfo.md).[time](../interfaces/IMerchantGoogleLocationsTaskInfo.md#time)

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

[main.ts:163597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163597)

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

[main.ts:163619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163619)

___


### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleLocationsTaskInfo`](MerchantGoogleLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleLocationsTaskInfo`](MerchantGoogleLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:163612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163612)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")