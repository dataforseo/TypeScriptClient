[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataErrorsRequestInfo

# Class: KeywordsDataErrorsRequestInfo

## Implements

- [`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataErrorsRequestInfo.md#constructor)

### Properties

- [datetime\_from](KeywordsDataErrorsRequestInfo.md#datetime_from)
- [datetime\_to](KeywordsDataErrorsRequestInfo.md#datetime_to)
- [filtered\_function](KeywordsDataErrorsRequestInfo.md#filtered_function)
- [limit](KeywordsDataErrorsRequestInfo.md#limit)
- [offset](KeywordsDataErrorsRequestInfo.md#offset)

### Methods

- [init](KeywordsDataErrorsRequestInfo.md#init)
- [toJSON](KeywordsDataErrorsRequestInfo.md#tojson)
- [fromJS](KeywordsDataErrorsRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataErrorsRequestInfo**(`data?`): [`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataErrorsRequestInfo`](../interfaces/IKeywordsDataErrorsRequestInfo.md) |

#### Returns

[`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

#### Defined in

main.ts:114977

## Properties

### datetime\_from

• `Optional` **datetime\_from**: `string`

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[IKeywordsDataErrorsRequestInfo](../interfaces/IKeywordsDataErrorsRequestInfo.md).[datetime_from](../interfaces/IKeywordsDataErrorsRequestInfo.md#datetime_from)

#### Defined in

main.ts:114966

___

### datetime\_to

• `Optional` **datetime\_to**: `string`

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 24 hours;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[IKeywordsDataErrorsRequestInfo](../interfaces/IKeywordsDataErrorsRequestInfo.md).[datetime_to](../interfaces/IKeywordsDataErrorsRequestInfo.md#datetime_to)

#### Defined in

main.ts:114973

___

### filtered\_function

• `Optional` **filtered\_function**: `string`

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: keywords_data/keywords_for_site/task_post, postback_url, pingback_url

#### Implementation of

[IKeywordsDataErrorsRequestInfo](../interfaces/IKeywordsDataErrorsRequestInfo.md).[filtered_function](../interfaces/IKeywordsDataErrorsRequestInfo.md#filtered_function)

#### Defined in

main.ts:114959

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[IKeywordsDataErrorsRequestInfo](../interfaces/IKeywordsDataErrorsRequestInfo.md).[limit](../interfaces/IKeywordsDataErrorsRequestInfo.md#limit)

#### Defined in

main.ts:114948

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[IKeywordsDataErrorsRequestInfo](../interfaces/IKeywordsDataErrorsRequestInfo.md).[offset](../interfaces/IKeywordsDataErrorsRequestInfo.md#offset)

#### Defined in

main.ts:114953

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:114986

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:115007

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)

#### Defined in

main.ts:115000
