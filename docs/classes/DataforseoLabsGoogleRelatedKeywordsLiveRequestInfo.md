[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo

# Class: DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo

Defined in: main.ts:93646

## Implements

- [`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo()

> **new DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md)

Defined in: main.ts:93780

#### Parameters

##### data?

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:93696

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

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`depth`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#depth)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:93744

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like,not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
["keyword_data.keyword_info.search_volume",">",0]
[["keyword_info.search_volume","in",[0,1000]],
"and",
["keyword_data.keyword_info.competition_level","=","LOW"]]
[["keyword_data.keyword_info.search_volume",">",100],
"and",
[["keyword_data.keyword_info.cpc","<",0.5],
"or",
["keyword_info.high_top_of_page_bid","<=",0.5]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#filters)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:93718

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#ignore_synonyms)

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

Defined in: main.ts:93713

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`include_clickstream_data`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#include_clickstream_data)

***

### include\_seed\_keyword?

> `optional` **include\_seed\_keyword**: `boolean`

Defined in: main.ts:93701

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`include_seed_keyword`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#include_seed_keyword)

***

### include\_serp\_info?

> `optional` **include\_serp\_info**: `boolean`

Defined in: main.ts:93706

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`include_serp_info`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#include_serp_info)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:93652

keyword
required field
UTF-8 encoding
the keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`keyword`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:93684

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:93676

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:93765

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:93668

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:93660

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:93770

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:93760

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

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#order_by)

***

### replace\_with\_core\_keyword?

> `optional` **replace\_with\_core\_keyword**: `boolean`

Defined in: main.ts:93725

return data for core keyword
optional field
if true, serp_info and related_keywords will be returned for the main keyword in the group that the specified keyword belongs to;
if false, serp_info and related_keywords will be returned for the specified keyword (if available);
refer to this help center article for more details;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`replace_with_core_keyword`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#replace_with_core_keyword)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:93776

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:93789

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:93829

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md)

Defined in: main.ts:93822

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRelatedKeywordsLiveRequestInfo.md)
