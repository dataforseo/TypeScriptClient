[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo

# Class: KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo`**

## Implements

- [`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#cost)
- [data](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#data)
- [id](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#id)
- [path](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#path)
- [result](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#result)
- [result\_count](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#result_count)
- [status\_code](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#status_code)
- [status\_message](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#status_message)
- [time](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#time)

### Methods

- [init](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#init)
- [toJSON](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#tojson)
- [fromJS](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo**(`data?`): [`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md) |

#### Returns

[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:131852

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md).[cost](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#cost)

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

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md).[data](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#data)

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

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md).[id](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md).[path](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md).[result](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#result)

#### Defined in

main.ts:131848

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md).[result_count](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#result_count)

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

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md).[status_code](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#status_code)

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

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md).[status_message](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md).[time](../interfaces/IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md#time)

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

main.ts:131856

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

main.ts:131878

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:131871
