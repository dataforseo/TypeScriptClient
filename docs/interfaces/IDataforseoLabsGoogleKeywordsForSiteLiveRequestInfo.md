[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo

# Interface: IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../classes/DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#filters)
- [ignore\_synonyms](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#ignore_synonyms)
- [include\_serp\_info](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#include_serp_info)
- [include\_subdomains](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#include_subdomains)
- [language\_code](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#offset)
- [offset\_token](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#offset_token)
- [order\_by](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#tag)
- [target](IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#target)

## Properties

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
[["impressions_info.daily_impressions_average","in",[0,1000]],
"and",
["impressions_info.ad_position_average","<",3]][["impressions_info.ad_position_average",">",0],
"and",
[["impressions_info.cpc_max","<",0.5],"or",["impressions_info.daily_clicks_max",">=",10]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Defined in

main.ts:81148

___

### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Defined in

main.ts:81113

___

### include\_serp\_info

• `Optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Defined in

main.ts:81103

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Defined in

main.ts:81108

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

main.ts:81098

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

main.ts:81089

___

### limit

• `Optional` **limit**: `number`

the maximum number of keywords in the results array
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:81118

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

main.ts:81080

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

main.ts:81072

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

main.ts:81123

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

main.ts:81131

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
relevance is used as the default sorting rule to provide you with the closest keyword ideas. We recommend using this sorting rule to get highly-relevant search terms. Note that relevance is only our internal system identifier, so it can not be used as a filter, and you will not find this field in the result array. The relevance score is based on a similar principle as used in the Keywords For Keywords endpoint.note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_info.search_volume,desc","keyword_info.cpc,asc"]

#### Defined in

main.ts:81164

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:81170

___

### target

• `Optional` **target**: `string`

target domain
required field
the domain name of the target website
the domain should be specified without https:// or www.

#### Defined in

main.ts:81064
