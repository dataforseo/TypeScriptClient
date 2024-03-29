[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduLocationsCountryTaskInfo

# Class: SerpBaiduLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBaiduLocationsCountryTaskInfo`**

## Implements

- [`ISerpBaiduLocationsCountryTaskInfo`](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](SerpBaiduLocationsCountryTaskInfo.md#cost)
- [data](SerpBaiduLocationsCountryTaskInfo.md#data)
- [id](SerpBaiduLocationsCountryTaskInfo.md#id)
- [path](SerpBaiduLocationsCountryTaskInfo.md#path)
- [result](SerpBaiduLocationsCountryTaskInfo.md#result)
- [result\_count](SerpBaiduLocationsCountryTaskInfo.md#result_count)
- [status\_code](SerpBaiduLocationsCountryTaskInfo.md#status_code)
- [status\_message](SerpBaiduLocationsCountryTaskInfo.md#status_message)
- [time](SerpBaiduLocationsCountryTaskInfo.md#time)

### Methods

- [init](SerpBaiduLocationsCountryTaskInfo.md#init)
- [toJSON](SerpBaiduLocationsCountryTaskInfo.md#tojson)
- [fromJS](SerpBaiduLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduLocationsCountryTaskInfo**(`data?`): [`SerpBaiduLocationsCountryTaskInfo`](SerpBaiduLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduLocationsCountryTaskInfo`](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md) |

#### Returns

[`SerpBaiduLocationsCountryTaskInfo`](SerpBaiduLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:65476](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65476)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBaiduLocationsCountryTaskInfo](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md).[cost](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md#cost)

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

[ISerpBaiduLocationsCountryTaskInfo](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md).[data](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md#data)

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

[ISerpBaiduLocationsCountryTaskInfo](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md).[id](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBaiduLocationsCountryTaskInfo](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md).[path](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBaiduLocationsCountryResultInfo`](SerpBaiduLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[ISerpBaiduLocationsCountryTaskInfo](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md).[result](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md#result)

#### Defined in

[main.ts:65472](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65472)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBaiduLocationsCountryTaskInfo](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md).[result_count](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md#result_count)

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

[ISerpBaiduLocationsCountryTaskInfo](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md).[status_code](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md#status_code)

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

[ISerpBaiduLocationsCountryTaskInfo](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md).[status_message](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBaiduLocationsCountryTaskInfo](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md).[time](../interfaces/ISerpBaiduLocationsCountryTaskInfo.md#time)

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

[main.ts:65480](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65480)

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

[main.ts:65502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65502)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBaiduLocationsCountryTaskInfo`](SerpBaiduLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduLocationsCountryTaskInfo`](SerpBaiduLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:65495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L65495)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")