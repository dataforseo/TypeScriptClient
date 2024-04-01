[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataDataforseoTrendsDemographyLiveRequestInfo

# Class: KeywordsDataDataforseoTrendsDemographyLiveRequestInfo

## Implements

- [`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#constructor)

### Properties

- [date\_from](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#date_from)
- [date\_to](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#date_to)
- [keywords](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#keywords)
- [location\_code](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#location_code)
- [location\_name](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#location_name)
- [tag](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#tag)
- [time\_range](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#time_range)
- [type](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#type)

### Methods

- [init](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#init)
- [toJSON](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#tojson)
- [fromJS](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataDataforseoTrendsDemographyLiveRequestInfo**(`data?`): [`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md) |

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

#### Defined in

main.ts:126096

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[date_from](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#date_from)

#### Defined in

main.ts:126073

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[date_to](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#date_to)

#### Defined in

main.ts:126080

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
the maximum number of keywords you can specify: 5
avoid symbols and special characters (e.g., UTF symbols, emojis);
specifying non-Latin characters, you’ll get data for the countries where they are used

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[keywords](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#keywords)

#### Defined in

main.ts:126044

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_code belongs to;
example:
2840

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[location_code](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#location_code)

#### Defined in

main.ts:126062

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/dataforseo_trends/locations
note that the data will be provided for the country the specified location_name belongs to;
example:
United Kingdom

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[location_name](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#location_name)

#### Defined in

main.ts:126053

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[tag](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#tag)

#### Defined in

main.ts:126092

___

### time\_range

• `Optional` **time\_range**: `string`

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[time_range](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#time_range)

#### Defined in

main.ts:126086

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md).[type](../interfaces/IKeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md#type)

#### Defined in

main.ts:126064

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

main.ts:126105

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

main.ts:126133

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataDataforseoTrendsDemographyLiveRequestInfo`](KeywordsDataDataforseoTrendsDemographyLiveRequestInfo.md)

#### Defined in

main.ts:126126
