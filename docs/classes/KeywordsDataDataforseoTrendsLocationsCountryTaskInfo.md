[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsLocationsCountryTaskInfo

# Class: KeywordsDataDataforseoTrendsLocationsCountryTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataDataforseoTrendsLocationsCountryTaskInfo`**

## Implements

- [`IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#cost)
- [data](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#data)
- [id](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#id)
- [path](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#path)
- [result](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#result)
- [result\_count](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#result_count)
- [status\_code](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#status_code)
- [status\_message](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#status_message)
- [time](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#time)

### Methods

- [init](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsLocationsCountryTaskInfo**(`data?`): [`KeywordsDataDataforseoTrendsLocationsCountryTaskInfo`](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo`](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryTaskInfo`](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:124628

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md).[cost](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

main.ts:23121

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md).[data](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

main.ts:23127

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md).[id](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md).[path](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`KeywordsDataDataforseoTrendsLocationsCountryResultInfo`](KeywordsDataDataforseoTrendsLocationsCountryResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md).[result](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#result)

#### Defined in

main.ts:124624

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md).[result_count](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

main.ts:23123

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md).[status_code](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

main.ts:23114

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md).[status_message](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md).[time](../interfaces/IKeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

main.ts:23119

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

main.ts:124632

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

main.ts:124654

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsLocationsCountryTaskInfo`](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsLocationsCountryTaskInfo`](KeywordsDataDataforseoTrendsLocationsCountryTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:124647
