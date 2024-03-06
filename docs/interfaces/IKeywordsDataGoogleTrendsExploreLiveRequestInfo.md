[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleTrendsExploreLiveRequestInfo

# Interface: IKeywordsDataGoogleTrendsExploreLiveRequestInfo

## Implemented by

- [`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](../classes/KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [category\_code](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#category_code)
- [date\_from](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#date_from)
- [date\_to](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#date_to)
- [item\_types](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#item_types)
- [keywords](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#keywords)
- [language\_code](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#language_code)
- [language\_name](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#language_name)
- [location\_code](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#location_code)
- [location\_name](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#location_name)
- [tag](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#tag)
- [time\_range](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#time_range)
- [type](IKeywordsDataGoogleTrendsExploreLiveRequestInfo.md#type)

## Properties

### category\_code

• `Optional` **category\_code**: `number`

google trends search category
optional field
if you don’t specify this field, the 0 value will be applied by default and the search will be carried out across all available categories
you can receive the list of available categories with their category_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/google_trends/categories

#### Defined in

[main.ts:121644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121644)

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

#### Defined in

[main.ts:121653](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121653)

___


### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Defined in

[main.ts:121660](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121660)

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

#### Defined in

[main.ts:121682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121682)

___


### keywords

• `Optional` **keywords**: `string`[]

keywords
optional field
if keywords are not specified, the results will not contain keyword-related data;
The maximum number of keywords you can specify: 5
Note: comma symbols (,) in the specified keywords will be unset and ignored

#### Defined in

[main.ts:121605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121605)

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

#### Defined in

[main.ts:121637](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121637)

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

#### Defined in

[main.ts:121629](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121629)

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

#### Defined in

[main.ts:121621](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121621)

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

#### Defined in

[main.ts:121613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121613)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:121688](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121688)

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

#### Defined in

[main.ts:121670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121670)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:121639](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L121639)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")