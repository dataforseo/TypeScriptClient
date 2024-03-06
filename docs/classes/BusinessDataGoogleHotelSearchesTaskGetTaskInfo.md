[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesTaskGetTaskInfo

# Class: BusinessDataGoogleHotelSearchesTaskGetTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataGoogleHotelSearchesTaskGetTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelSearchesTaskGetTaskInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#data)
- [id](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#id)
- [path](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#path)
- [result](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesTaskGetTaskInfo**(`data?`): [`BusinessDataGoogleHotelSearchesTaskGetTaskInfo`](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesTaskGetTaskInfo`](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskGetTaskInfo`](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:194036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194036)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelSearchesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#data)

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

[IBusinessDataGoogleHotelSearchesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataGoogleHotelSearchesTaskGetResultInfo`](BusinessDataGoogleHotelSearchesTaskGetResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#result)

#### Defined in

[main.ts:194032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194032)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelSearchesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelSearchesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelSearchesTaskGetTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelSearchesTaskGetTaskInfo.md#time)

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

[main.ts:194040](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194040)

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

[main.ts:194062](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194062)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesTaskGetTaskInfo`](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesTaskGetTaskInfo`](BusinessDataGoogleHotelSearchesTaskGetTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:194055](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194055)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")