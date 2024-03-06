[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelSearchesLiveTaskInfo

# Class: BusinessDataGoogleHotelSearchesLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataGoogleHotelSearchesLiveTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelSearchesLiveTaskInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#data)
- [id](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#id)
- [path](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#path)
- [result](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelSearchesLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelSearchesLiveTaskInfo**(`data?`): [`BusinessDataGoogleHotelSearchesLiveTaskInfo`](BusinessDataGoogleHotelSearchesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelSearchesLiveTaskInfo`](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelSearchesLiveTaskInfo`](BusinessDataGoogleHotelSearchesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:194712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194712)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelSearchesLiveTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md#data)

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

[IBusinessDataGoogleHotelSearchesLiveTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataGoogleHotelSearchesLiveResultInfo`](BusinessDataGoogleHotelSearchesLiveResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md#result)

#### Defined in

[main.ts:194708](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194708)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelSearchesLiveTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelSearchesLiveTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelSearchesLiveTaskInfo](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelSearchesLiveTaskInfo.md#time)

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

[main.ts:194716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194716)

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

[main.ts:194738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194738)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelSearchesLiveTaskInfo`](BusinessDataGoogleHotelSearchesLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelSearchesLiveTaskInfo`](BusinessDataGoogleHotelSearchesLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:194731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L194731)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")