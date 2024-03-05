[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleLocationsCountryTaskInfo

# Class: BusinessDataGoogleLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleLocationsCountryTaskInfo`**

## Implements

- [`IBusinessDataGoogleLocationsCountryTaskInfo`](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleLocationsCountryTaskInfo.md#cost)
- [data](BusinessDataGoogleLocationsCountryTaskInfo.md#data)
- [id](BusinessDataGoogleLocationsCountryTaskInfo.md#id)
- [path](BusinessDataGoogleLocationsCountryTaskInfo.md#path)
- [result](BusinessDataGoogleLocationsCountryTaskInfo.md#result)
- [result\_count](BusinessDataGoogleLocationsCountryTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleLocationsCountryTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleLocationsCountryTaskInfo.md#status_message)
- [time](BusinessDataGoogleLocationsCountryTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleLocationsCountryTaskInfo.md#init)
- [toJSON](BusinessDataGoogleLocationsCountryTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleLocationsCountryTaskInfo**(`data?`): [`BusinessDataGoogleLocationsCountryTaskInfo`](BusinessDataGoogleLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleLocationsCountryTaskInfo`](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md) |

#### Returns

[`BusinessDataGoogleLocationsCountryTaskInfo`](BusinessDataGoogleLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:190448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190448)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleLocationsCountryTaskInfo](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md#cost)

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

[IBusinessDataGoogleLocationsCountryTaskInfo](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md).[data](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md#data)

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

[IBusinessDataGoogleLocationsCountryTaskInfo](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md).[id](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleLocationsCountryTaskInfo](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md).[path](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataGoogleLocationsCountryResultInfo`](BusinessDataGoogleLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleLocationsCountryTaskInfo](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md).[result](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md#result)

#### Defined in

[main.ts:190444](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190444)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleLocationsCountryTaskInfo](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md#result_count)

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

[IBusinessDataGoogleLocationsCountryTaskInfo](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md#status_code)

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

[IBusinessDataGoogleLocationsCountryTaskInfo](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleLocationsCountryTaskInfo](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md).[time](../interfaces/IBusinessDataGoogleLocationsCountryTaskInfo.md#time)

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

[main.ts:190452](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190452)

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

[main.ts:190474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190474)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleLocationsCountryTaskInfo`](BusinessDataGoogleLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleLocationsCountryTaskInfo`](BusinessDataGoogleLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:190467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190467)
