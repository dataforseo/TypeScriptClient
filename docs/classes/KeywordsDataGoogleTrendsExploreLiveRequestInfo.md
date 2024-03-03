[Documentation](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleTrendsExploreLiveRequestInfo

# Class: KeywordsDataGoogleTrendsExploreLiveRequestInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#constructor)

### Properties

- [category\_code](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#category_code)
- [date\_from](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#date_from)
- [date\_to](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#date_to)
- [item\_types](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#item_types)
- [keywords](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#keywords)
- [language\_code](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#language_code)
- [language\_name](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#language_name)
- [location\_code](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#location_code)
- [location\_name](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#location_name)
- [tag](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#tag)
- [time\_range](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#time_range)
- [type](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#type)

### Methods

- [init](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#init)
- [toJSON](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#tojson)
- [fromJS](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleTrendsExploreLiveRequestInfo**(`data?`): [`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleTrendsExploreLiveRequestInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md) |

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

#### Defined in

main.ts:121668

## Properties

### category\_code

• `Optional` **category\_code**: `number`

google trends search category
optional field
if you don’t specify this field, the 0 value will be applied by default and the search will be carried out across all available categories
you can receive the list of available categories with their category_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/google_trends/categories

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[category_code](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#category_code)

#### Defined in

main.ts:121620

___

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

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[date_from](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#date_from)

#### Defined in

main.ts:121629

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

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[date_to](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#date_to)

#### Defined in

main.ts:121636

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of items returned
optional field
if you don’t specify this field, all items will be presented in the response;
you can set only one item to speed up the execution of the request
possible values:
"item_types": [
"google_trends_graph",
"google_trends_map",
"google_trends_topics_list",
"google_trends_queries_list"
]

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[item_types](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#item_types)

#### Defined in

main.ts:121658

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
optional field
if keywords are not specified, the results will not contain keyword-related data;
The maximum number of keywords you can specify: 5
Note: comma symbols (,) in the specified keywords will be unset and ignored

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[keywords](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#keywords)

#### Defined in

main.ts:121581

___

### language\_code

• `Optional` **language\_code**: `string`

search engine language code
optional field
default value: en
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
en

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[language_code](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#language_code)

#### Defined in

main.ts:121613

___

### language\_name

• `Optional` **language\_name**: `string`

full name of search engine language
optional field
default value: English
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
English

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[language_name](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#language_name)

#### Defined in

main.ts:121605

___

### location\_code

• `Optional` **location\_code**: `number`

search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
2840

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[location_code](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#location_code)

#### Defined in

main.ts:121597

___

### location\_name

• `Optional` **location\_name**: `string`

full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
United Kingdom

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[location_name](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#location_name)

#### Defined in

main.ts:121589

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[tag](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#tag)

#### Defined in

main.ts:121664

___

### time\_range

• `Optional` **time\_range**: `string`

preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_hour, past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years
possible values for web only:
2004_present
possible values for news, youtube, images, froogle:
2008_present

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[time_range](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#time_range)

#### Defined in

main.ts:121646

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IKeywordsDataGoogleTrendsExploreLiveRequestInfo](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md).[type](../interfaces/IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#type)

#### Defined in

main.ts:121615

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

main.ts:121677

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

main.ts:121713

___

### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

#### Defined in

main.ts:121706
