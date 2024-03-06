[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsLocationsCountryTaskInfo

# Class: KeywordsDataGoogleTrendsLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`KeywordsDataGoogleTrendsLocationsCountryTaskInfo`**

## Implements

- [`IKeywordsDataGoogleTrendsLocationsCountryTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#cost)
- [data](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#data)
- [id](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#id)
- [path](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#path)
- [result](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#result)
- [result\_count](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#result_count)
- [status\_code](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#status_code)
- [status\_message](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#status_message)
- [time](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#time)

### Methods

- [init](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsLocationsCountryTaskInfo**(`data?`): [`KeywordsDataGoogleTrendsLocationsCountryTaskInfo`](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsLocationsCountryTaskInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryTaskInfo`](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:119329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119329)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md).[cost](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#cost)

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

[IKeywordsDataGoogleTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md).[data](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#data)

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

[IKeywordsDataGoogleTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md).[id](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md).[path](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`KeywordsDataGoogleTrendsLocationsCountryResultInfo`](KeywordsDataGoogleTrendsLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md).[result](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#result)

#### Defined in

[main.ts:119325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119325)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md).[result_count](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#result_count)

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

[IKeywordsDataGoogleTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md).[status_code](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#status_code)

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

[IKeywordsDataGoogleTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md).[status_message](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataGoogleTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md).[time](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryTaskInfo.md#time)

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

[main.ts:119333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119333)

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

[main.ts:119355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119355)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsLocationsCountryTaskInfo`](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryTaskInfo`](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:119348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L119348)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")