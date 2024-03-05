[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataTripadvisorLocationsTaskInfo

# Class: BusinessDataTripadvisorLocationsTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataTripadvisorLocationsTaskInfo`**

## Implements

- [`IBusinessDataTripadvisorLocationsTaskInfo`](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataTripadvisorLocationsTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataTripadvisorLocationsTaskInfo.md#cost)
- [data](BusinessDataTripadvisorLocationsTaskInfo.md#data)
- [id](BusinessDataTripadvisorLocationsTaskInfo.md#id)
- [path](BusinessDataTripadvisorLocationsTaskInfo.md#path)
- [result](BusinessDataTripadvisorLocationsTaskInfo.md#result)
- [result\_count](BusinessDataTripadvisorLocationsTaskInfo.md#result_count)
- [status\_code](BusinessDataTripadvisorLocationsTaskInfo.md#status_code)
- [status\_message](BusinessDataTripadvisorLocationsTaskInfo.md#status_message)
- [time](BusinessDataTripadvisorLocationsTaskInfo.md#time)

### Methods

- [init](BusinessDataTripadvisorLocationsTaskInfo.md#init)
- [toJSON](BusinessDataTripadvisorLocationsTaskInfo.md#tojson)
- [fromJS](BusinessDataTripadvisorLocationsTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataTripadvisorLocationsTaskInfo**(`data?`): [`BusinessDataTripadvisorLocationsTaskInfo`](BusinessDataTripadvisorLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataTripadvisorLocationsTaskInfo`](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md) |

#### Returns

[`BusinessDataTripadvisorLocationsTaskInfo`](BusinessDataTripadvisorLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:200432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200432)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataTripadvisorLocationsTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md).[cost](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md#cost)

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

[IBusinessDataTripadvisorLocationsTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md).[data](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md#data)

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

[IBusinessDataTripadvisorLocationsTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md).[id](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataTripadvisorLocationsTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md).[path](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataTripadvisorLocationsResultInfo`](BusinessDataTripadvisorLocationsResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataTripadvisorLocationsTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md).[result](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md#result)

#### Defined in

[main.ts:200428](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200428)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataTripadvisorLocationsTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md).[result_count](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md#result_count)

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

[IBusinessDataTripadvisorLocationsTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md).[status_code](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md#status_code)

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

[IBusinessDataTripadvisorLocationsTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md).[status_message](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataTripadvisorLocationsTaskInfo](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md).[time](../interfaces/IBusinessDataTripadvisorLocationsTaskInfo.md#time)

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

[main.ts:200436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200436)

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

[main.ts:200458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200458)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataTripadvisorLocationsTaskInfo`](BusinessDataTripadvisorLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataTripadvisorLocationsTaskInfo`](BusinessDataTripadvisorLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:200451](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L200451)
