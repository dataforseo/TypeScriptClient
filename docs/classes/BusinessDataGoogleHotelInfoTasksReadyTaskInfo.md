[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTasksReadyTaskInfo

# Class: BusinessDataGoogleHotelInfoTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleHotelInfoTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#data)
- [id](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#id)
- [path](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#path)
- [result](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTasksReadyTaskInfo**(`data?`): [`BusinessDataGoogleHotelInfoTasksReadyTaskInfo`](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyTaskInfo`](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:195173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195173)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#data)

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

[IBusinessDataGoogleHotelInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataGoogleHotelInfoTasksReadyResultInfo`](BusinessDataGoogleHotelInfoTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:195169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195169)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoTasksReadyTaskInfo.md#time)

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

[main.ts:195177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195177)

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

[main.ts:195199](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195199)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTasksReadyTaskInfo`](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTasksReadyTaskInfo`](BusinessDataGoogleHotelInfoTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:195192](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L195192)
