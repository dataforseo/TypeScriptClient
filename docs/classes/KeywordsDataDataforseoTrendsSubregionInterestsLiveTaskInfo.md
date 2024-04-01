[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo

# Class: KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo`**

## Implements

- [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#constructor)

### Properties

- [cost](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#cost)
- [data](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#data)
- [id](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#id)
- [path](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#path)
- [result](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#result)
- [result\_count](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#result_count)
- [status\_code](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#status_code)
- [status\_message](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#status_message)
- [time](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#time)

### Methods

- [init](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo**(`data?`): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo`](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

main.ts:125934

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md).[cost](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#cost)

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

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md).[data](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#data)

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

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md).[id](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

main.ts:23110

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md).[path](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

main.ts:23125

___

### result

• `Optional` **result**: [`KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo.md)[]

array of results

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md).[result](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#result)

#### Defined in

main.ts:125930

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md).[result_count](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#result_count)

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

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md).[status_code](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#status_code)

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

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md).[status_message](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

main.ts:23117

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md).[time](../interfaces/IKeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md#time)

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

main.ts:125938

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

main.ts:125960

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo`](KeywordsDataDataforseoTrendsSubregionInterestsLiveTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

main.ts:125953
