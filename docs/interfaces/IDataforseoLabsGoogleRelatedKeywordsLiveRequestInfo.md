[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo

# Interface: IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../classes/DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [depth](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#depth)
- [filters](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#filters)
- [ignore\_synonyms](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#ignore_synonyms)
- [include\_seed\_keyword](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#include_seed_keyword)
- [include\_serp\_info](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#include_serp_info)
- [keyword](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#keyword)
- [language\_code](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#order_by)
- [replace\_with\_core\_keyword](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#replace_with_core_keyword)
- [tag](IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#tag)

## Properties

### depth

• `Optional` **depth**: `number`

keyword search depth
optional field
default value: 1
number of the returned results depends on the value you set in this field
you can specify a level from 0 to 4
estimated number of keywords for each level (maximum):
0 – the keyword set in the keyword field
1 – 8 keywords
2 – 72 keywords
3 – 584 keywords
4 – 4680 keywords

#### Defined in

[main.ts:80224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80224)

___


### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like,not_like
you can use the % operator with like and not_like to match any string of zero or more characters
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

[main.ts:80265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80265)

___


### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Defined in

[main.ts:80239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80239)

___


### include\_seed\_keyword

• `Optional` **include\_seed\_keyword**: `boolean`

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

#### Defined in

[main.ts:80229](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80229)

___


### include\_serp\_info

• `Optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Defined in

[main.ts:80234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80234)

___


### keyword

• `Optional` **keyword**: `string`

keyword
required field
UTF-8 encoding
a keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Defined in

[main.ts:80180](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80180)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Defined in

[main.ts:80212](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80212)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Defined in

[main.ts:80204](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80204)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:80286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80286)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Defined in

[main.ts:80196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80196)

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

[main.ts:80188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80188)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

[main.ts:80291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80291)

___


### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["keyword_data.keyword_info.competition,desc"]
default rule:
["keyword_data.keyword_info.search_volume,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

#### Defined in

[main.ts:80281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80281)

___


### replace\_with\_core\_keyword

• `Optional` **replace\_with\_core\_keyword**: `boolean`

return data for core keyword
optional field
if true, serp_info and related_keywords will be returned for the main keyword in the group that the specified keyword belongs to;
if false, serp_info and related_keywords will be returned for the specified keyword (if available);
refer to this help center article for more details;
default value: false

#### Defined in

[main.ts:80246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80246)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:80297](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L80297)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")