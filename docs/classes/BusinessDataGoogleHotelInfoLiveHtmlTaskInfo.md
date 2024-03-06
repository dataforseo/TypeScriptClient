[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataGoogleHotelInfoLiveHtmlTaskInfo

# Class: BusinessDataGoogleHotelInfoLiveHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`BusinessDataGoogleHotelInfoLiveHtmlTaskInfo`**

## Implements

- [`IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#constructor)

### Properties

- [cost](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#cost)
- [data](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#data)
- [id](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#id)
- [path](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#path)
- [result](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#result)
- [result\_count](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#result_count)
- [status\_code](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#status_code)
- [status\_message](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#status_message)
- [time](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#time)

### Methods

- [init](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#init)
- [toJSON](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#tojson)
- [fromJS](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataGoogleHotelInfoLiveHtmlTaskInfo**(`data?`): [`BusinessDataGoogleHotelInfoLiveHtmlTaskInfo`](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo`](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md) |

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlTaskInfo`](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:197653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197653)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md).[cost](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#cost)

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

[IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md).[data](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#data)

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

[IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md).[id](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md).[path](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`BusinessDataGoogleHotelInfoLiveHtmlResultInfo`](BusinessDataGoogleHotelInfoLiveHtmlResultInfo.md)[]

array of results

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md).[result](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#result)

#### Defined in

[main.ts:197649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197649)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md).[result_count](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#result_count)

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

[IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md).[status_code](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#status_code)

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

[IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md).[status_message](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md).[time](../interfaces/IBusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md#time)

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

[main.ts:197657](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197657)

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

[main.ts:197679](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197679)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataGoogleHotelInfoLiveHtmlTaskInfo`](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataGoogleHotelInfoLiveHtmlTaskInfo`](BusinessDataGoogleHotelInfoLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:197672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L197672)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")