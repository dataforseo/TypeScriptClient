[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocationsCountryTaskInfo

# Class: SerpBingLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpBingLocationsCountryTaskInfo`**

## Implements

- [`ISerpBingLocationsCountryTaskInfo`](../interfaces/ISerpBingLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](SerpBingLocationsCountryTaskInfo.md#cost)
- [data](SerpBingLocationsCountryTaskInfo.md#data)
- [id](SerpBingLocationsCountryTaskInfo.md#id)
- [path](SerpBingLocationsCountryTaskInfo.md#path)
- [result](SerpBingLocationsCountryTaskInfo.md#result)
- [result\_count](SerpBingLocationsCountryTaskInfo.md#result_count)
- [status\_code](SerpBingLocationsCountryTaskInfo.md#status_code)
- [status\_message](SerpBingLocationsCountryTaskInfo.md#status_message)
- [time](SerpBingLocationsCountryTaskInfo.md#time)

### Methods

- [init](SerpBingLocationsCountryTaskInfo.md#init)
- [toJSON](SerpBingLocationsCountryTaskInfo.md#tojson)
- [fromJS](SerpBingLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocationsCountryTaskInfo**(`data?`): [`SerpBingLocationsCountryTaskInfo`](SerpBingLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocationsCountryTaskInfo`](../interfaces/ISerpBingLocationsCountryTaskInfo.md) |

#### Returns

[`SerpBingLocationsCountryTaskInfo`](SerpBingLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:53410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53410)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpBingLocationsCountryTaskInfo](../interfaces/ISerpBingLocationsCountryTaskInfo.md).[cost](../interfaces/ISerpBingLocationsCountryTaskInfo.md#cost)

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

[ISerpBingLocationsCountryTaskInfo](../interfaces/ISerpBingLocationsCountryTaskInfo.md).[data](../interfaces/ISerpBingLocationsCountryTaskInfo.md#data)

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

[ISerpBingLocationsCountryTaskInfo](../interfaces/ISerpBingLocationsCountryTaskInfo.md).[id](../interfaces/ISerpBingLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpBingLocationsCountryTaskInfo](../interfaces/ISerpBingLocationsCountryTaskInfo.md).[path](../interfaces/ISerpBingLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpBingLocationsCountryResultInfo`](SerpBingLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[ISerpBingLocationsCountryTaskInfo](../interfaces/ISerpBingLocationsCountryTaskInfo.md).[result](../interfaces/ISerpBingLocationsCountryTaskInfo.md#result)

#### Defined in

[main.ts:53406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53406)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpBingLocationsCountryTaskInfo](../interfaces/ISerpBingLocationsCountryTaskInfo.md).[result_count](../interfaces/ISerpBingLocationsCountryTaskInfo.md#result_count)

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

[ISerpBingLocationsCountryTaskInfo](../interfaces/ISerpBingLocationsCountryTaskInfo.md).[status_code](../interfaces/ISerpBingLocationsCountryTaskInfo.md#status_code)

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

[ISerpBingLocationsCountryTaskInfo](../interfaces/ISerpBingLocationsCountryTaskInfo.md).[status_message](../interfaces/ISerpBingLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpBingLocationsCountryTaskInfo](../interfaces/ISerpBingLocationsCountryTaskInfo.md).[time](../interfaces/ISerpBingLocationsCountryTaskInfo.md#time)

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

[main.ts:53414](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53414)

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

[main.ts:53436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53436)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingLocationsCountryTaskInfo`](SerpBingLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocationsCountryTaskInfo`](SerpBingLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:53429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L53429)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")