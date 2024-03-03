[Documentation](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleTopSearchesLiveRequestInfo

# Interface: IDataforseoLabsGoogleTopSearchesLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleTopSearchesLiveRequestInfo`](../classes/DataforseoLabsGoogleTopSearchesLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [filters](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#filters)
- [ignore\_synonyms](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#ignore_synonyms)
- [include\_serp\_info](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#include_serp_info)
- [language\_code](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#location_name)
- [offset](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#offset)
- [offset\_token](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#offset_token)
- [order\_by](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsGoogleTopSearchesLiveRequestInfo.md#tag)

## Properties

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

main.ts:85362

___

### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Defined in

main.ts:85343

___

### include\_serp\_info

• `Optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Defined in

main.ts:85338

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

main.ts:85333

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

main.ts:85325

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
note: you can get more than 1000 results by using the offset_token provided in the response to each subsequent request
default value: 1000
maximum value: 1000

#### Defined in

main.ts:85390

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

main.ts:85317

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

main.ts:85309

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

main.ts:85395

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

main.ts:85403

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
["keyword_info.competition,desc"]
default rule:
["keyword_info.search_volume,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_info.search_volume,desc","keyword_info.cpc,desc"]

#### Defined in

main.ts:85378

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:85384
