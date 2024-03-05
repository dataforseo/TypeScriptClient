[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleLocationsTaskInfo

# Class: BusinessDataGoogleLocationsTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleLocationsTaskInfo`**

## Implements

- [`IBusinessDataGoogleLocationsTaskInfo`](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleLocationsTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleLocationsTaskInfo.md#cost)
- [data](BusinessDataGoogleLocationsTaskInfo.md#data)
- [id](BusinessDataGoogleLocationsTaskInfo.md#id)
- [path](BusinessDataGoogleLocationsTaskInfo.md#path)
- [result](BusinessDataGoogleLocationsTaskInfo.md#result)
- [result\_count](BusinessDataGoogleLocationsTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleLocationsTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleLocationsTaskInfo.md#status_message)
- [time](BusinessDataGoogleLocationsTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleLocationsTaskInfo.md#init)
- [toJSON](BusinessDataGoogleLocationsTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleLocationsTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleLocationsTaskInfo**(`data?`): [`BusinessDataGoogleLocationsTaskInfo`](BusinessDataGoogleLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleLocationsTaskInfo`](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md) |

#### Returns

[`BusinessDataGoogleLocationsTaskInfo`](BusinessDataGoogleLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:190256](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190256)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleLocationsTaskInfo](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md#cost)

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

[IBusinessDataGoogleLocationsTaskInfo](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md).[data](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md#data)

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

[IBusinessDataGoogleLocationsTaskInfo](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md).[id](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleLocationsTaskInfo](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md).[path](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataGoogleLocationsResultInfo`](BusinessDataGoogleLocationsResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleLocationsTaskInfo](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md).[result](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md#result)

#### Defined in

[main.ts:190252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190252)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleLocationsTaskInfo](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md#result_count)

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

[IBusinessDataGoogleLocationsTaskInfo](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md#status_code)

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

[IBusinessDataGoogleLocationsTaskInfo](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleLocationsTaskInfo](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md).[time](../interfaces/IBusinessDataGoogleLocationsTaskInfo.md#time)

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

[main.ts:190260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190260)

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

[main.ts:190282](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190282)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleLocationsTaskInfo`](BusinessDataGoogleLocationsTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleLocationsTaskInfo`](BusinessDataGoogleLocationsTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:190275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L190275)
