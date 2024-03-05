[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataYelpLocationsCountryTaskInfo

# Class: BusinessDataYelpLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataYelpLocationsCountryTaskInfo`**

## Implements

- [`IBusinessDataYelpLocationsCountryTaskInfo`](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataYelpLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataYelpLocationsCountryTaskInfo.md#cost)
- [data](BusinessDataYelpLocationsCountryTaskInfo.md#data)
- [id](BusinessDataYelpLocationsCountryTaskInfo.md#id)
- [path](BusinessDataYelpLocationsCountryTaskInfo.md#path)
- [result](BusinessDataYelpLocationsCountryTaskInfo.md#result)
- [result\_count](BusinessDataYelpLocationsCountryTaskInfo.md#result_count)
- [status\_code](BusinessDataYelpLocationsCountryTaskInfo.md#status_code)
- [status\_message](BusinessDataYelpLocationsCountryTaskInfo.md#status_message)
- [time](BusinessDataYelpLocationsCountryTaskInfo.md#time)

### Methods

- [init](BusinessDataYelpLocationsCountryTaskInfo.md#init)
- [toJSON](BusinessDataYelpLocationsCountryTaskInfo.md#tojson)
- [fromJS](BusinessDataYelpLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataYelpLocationsCountryTaskInfo**(`data?`): [`BusinessDataYelpLocationsCountryTaskInfo`](BusinessDataYelpLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataYelpLocationsCountryTaskInfo`](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md) |

#### Returns

[`BusinessDataYelpLocationsCountryTaskInfo`](BusinessDataYelpLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:203064](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203064)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataYelpLocationsCountryTaskInfo](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md).[cost](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md#cost)

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

[IBusinessDataYelpLocationsCountryTaskInfo](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md).[data](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md#data)

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

[IBusinessDataYelpLocationsCountryTaskInfo](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md).[id](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataYelpLocationsCountryTaskInfo](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md).[path](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataYelpLocationsCountryResultInfo`](BusinessDataYelpLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataYelpLocationsCountryTaskInfo](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md).[result](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md#result)

#### Defined in

[main.ts:203060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203060)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataYelpLocationsCountryTaskInfo](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md).[result_count](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md#result_count)

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

[IBusinessDataYelpLocationsCountryTaskInfo](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md).[status_code](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md#status_code)

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

[IBusinessDataYelpLocationsCountryTaskInfo](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md).[status_message](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataYelpLocationsCountryTaskInfo](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md).[time](../interfaces/IBusinessDataYelpLocationsCountryTaskInfo.md#time)

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

[main.ts:203068](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203068)

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

[main.ts:203090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203090)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataYelpLocationsCountryTaskInfo`](BusinessDataYelpLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataYelpLocationsCountryTaskInfo`](BusinessDataYelpLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:203083](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L203083)
