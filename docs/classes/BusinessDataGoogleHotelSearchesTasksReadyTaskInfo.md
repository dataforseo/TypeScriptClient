[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesTasksReadyTaskInfo

# Class: BusinessDataGoogleHotelSearchesTasksReadyTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#data)
- [id](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#id)
- [path](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#path)
- [result](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesTasksReadyTaskInfo**(`data?`): [`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:193284](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193284)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#data)

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

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`BusinessDataGoogleHotelSearchesTasksReadyResultInfo`](BusinessDataGoogleHotelSearchesTasksReadyResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#result)

#### Defined in

[main.ts:193280](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193280)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md#time)

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

[main.ts:193288](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193288)

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

[main.ts:193310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193310)

___

### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesTasksReadyTaskInfo`](BusinessDataGoogleHotelSearchesTasksReadyTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:193303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L193303)
