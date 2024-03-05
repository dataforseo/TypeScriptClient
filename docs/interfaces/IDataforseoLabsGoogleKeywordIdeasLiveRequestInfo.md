[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo

# Interface: IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../classes/DataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [closely\_variants](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#closely_variants)
- [filters](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#filters)
- [ignore\_synonyms](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#ignore_synonyms)
- [include\_serp\_info](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#include_serp_info)
- [keywords](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#keywords)
- [language\_code](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#offset)
- [offset\_token](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#offset_token)
- [order\_by](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#tag)

## Properties

### closely\_variants

• `Optional` **closely\_variants**: `boolean`

search mode
optional field
if set to true the results will be based on the phrase-match search algorithm
if set to false the results will be based on the broad-match search algorithm
default value: false

#### Defined in

[main.ts:81430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81430)

___

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
note that you can not filter the results by relevance
example:
["keyword_info.search_volume",">",0]
[["keyword_info.search_volume","in",[0,1000]],
"and",
["keyword_info.competition_level","=","LOW"]]
[["keyword_info.search_volume",">",100],
"and",
[["keyword_info.cpc","<",0.5],
"or",
["keyword_info.high_top_of_page_bid","<=",0.5]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Defined in

[main.ts:81478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81478)

___

### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Defined in

[main.ts:81435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81435)

___

### include\_serp\_info

• `Optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Defined in

[main.ts:81440](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81440)

___

### keywords

• `Optional` **keywords**: `string`[]

keywords
required field
UTF-8 encoding
The maximum number of keywords you can specify: 200.
The minimum number of characters for each keyword: 3.
The keywords will be converted to lowercase format

#### Defined in

[main.ts:81390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81390)

___

### language\_code

• `Optional` **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Defined in

[main.ts:81424](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81424)

___

### language\_name

• `Optional` **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Defined in

[main.ts:81415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81415)

___

### limit

• `Optional` **limit**: `number`

the maximum number of keywords in the results array
optional field
default value: 700
maximum value: 1000

#### Defined in

[main.ts:81445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81445)

___

### location\_code

• `Optional` **location\_code**: `number`

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Defined in

[main.ts:81406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81406)

___

### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Defined in

[main.ts:81398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81398)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

[main.ts:81450](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81450)

___

### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.

#### Defined in

[main.ts:81458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81458)

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["keyword_info.competition,desc"]
default rule:
["relevance,desc"]
relevance is used as the default sorting rule to provide you with the closest keyword ideas. We recommend using this sorting rule to get highly-relevant search terms. Note that relevance is only our internal system identifier, so it can not be used as a filter, and you will not find this field in the result array. The relevance score is based on a similar principle as used in the Keywords For Keywords endpoint.
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_info.search_volume,desc","keyword_info.cpc,desc"]

#### Defined in

[main.ts:81495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81495)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:81501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L81501)
