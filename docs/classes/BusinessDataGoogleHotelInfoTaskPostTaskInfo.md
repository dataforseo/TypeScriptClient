[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTaskPostTaskInfo

# Class: BusinessDataGoogleHotelInfoTaskPostTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleHotelInfoTaskPostTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoTaskPostTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#data)
- [id](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#id)
- [path](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#path)
- [result](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTaskPostTaskInfo**(`data?`): [`BusinessDataGoogleHotelInfoTaskPostTaskInfo`](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTaskPostTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTaskPostTaskInfo`](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:194986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194986)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md#data)

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

[IBusinessDataGoogleHotelInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md#path)

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

[IBusinessDataGoogleHotelInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md#result)

#### Defined in

[main.ts:194982](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194982)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskPostTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoTaskPostTaskInfo.md#time)

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

[main.ts:194990](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194990)

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

[main.ts:195008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195008)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskPostTaskInfo`](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTaskPostTaskInfo`](BusinessDataGoogleHotelInfoTaskPostTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:195001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195001)
