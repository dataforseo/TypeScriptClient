[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantGoogleLocationsCountryTaskInfo

# Class: MerchantGoogleLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`MerchantGoogleLocationsCountryTaskInfo`**

## Implements

- [`IMerchantGoogleLocationsCountryTaskInfo`](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](MerchantGoogleLocationsCountryTaskInfo.md#cost)
- [data](MerchantGoogleLocationsCountryTaskInfo.md#data)
- [id](MerchantGoogleLocationsCountryTaskInfo.md#id)
- [path](MerchantGoogleLocationsCountryTaskInfo.md#path)
- [result](MerchantGoogleLocationsCountryTaskInfo.md#result)
- [result\_count](MerchantGoogleLocationsCountryTaskInfo.md#result_count)
- [status\_code](MerchantGoogleLocationsCountryTaskInfo.md#status_code)
- [status\_message](MerchantGoogleLocationsCountryTaskInfo.md#status_message)
- [time](MerchantGoogleLocationsCountryTaskInfo.md#time)

### Methods

- [init](MerchantGoogleLocationsCountryTaskInfo.md#init)
- [toJSON](MerchantGoogleLocationsCountryTaskInfo.md#tojson)
- [fromJS](MerchantGoogleLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleLocationsCountryTaskInfo**(`data?`): [`MerchantGoogleLocationsCountryTaskInfo`](MerchantGoogleLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleLocationsCountryTaskInfo`](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md) |

#### Returns

[`MerchantGoogleLocationsCountryTaskInfo`](MerchantGoogleLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:163783](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163783)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IMerchantGoogleLocationsCountryTaskInfo](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md).[cost](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md#cost)

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

[IMerchantGoogleLocationsCountryTaskInfo](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md).[data](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md#data)

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

[IMerchantGoogleLocationsCountryTaskInfo](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md).[id](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IMerchantGoogleLocationsCountryTaskInfo](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md).[path](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`MerchantGoogleLocationsCountryResultInfo`](MerchantGoogleLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[IMerchantGoogleLocationsCountryTaskInfo](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md).[result](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md#result)

#### Defined in

[main.ts:163779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163779)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IMerchantGoogleLocationsCountryTaskInfo](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md).[result_count](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md#result_count)

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

[IMerchantGoogleLocationsCountryTaskInfo](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md).[status_code](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md#status_code)

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

[IMerchantGoogleLocationsCountryTaskInfo](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md).[status_message](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IMerchantGoogleLocationsCountryTaskInfo](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md).[time](../interfaces/IMerchantGoogleLocationsCountryTaskInfo.md#time)

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

[main.ts:163787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163787)

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

[main.ts:163809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163809)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleLocationsCountryTaskInfo`](MerchantGoogleLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleLocationsCountryTaskInfo`](MerchantGoogleLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:163802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L163802)
