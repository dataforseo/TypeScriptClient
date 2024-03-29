[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo

# Class: BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#data)
- [id](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#id)
- [path](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#path)
- [result](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo**(`data?`): [`BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:196427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196427)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#data)

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

[IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:196423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196423)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md#time)

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

[main.ts:196431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196431)

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

[main.ts:196453](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196453)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:196446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L196446)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")