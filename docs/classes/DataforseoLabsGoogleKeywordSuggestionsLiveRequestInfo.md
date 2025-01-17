[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo

# Class: DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo

Defined in: main.ts:94300

## Implements

- [`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo()

> **new DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md)

Defined in: main.ts:94431

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md)

## Properties

### exact\_match?

> `optional` **exact\_match**: `boolean`

Defined in: main.ts:94364

search for the exact phrase
optional field
if set to true, the returned keywords will include the exact keyword phrase you specified, with potentially other words before or after that phrase
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`exact_match`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#exact_match)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:94387

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
["keyword_info.search_volume",">",0]
[["keyword_info.search_volume","in",[0,1000]],
"and",
["keyword_info.competition_level","=","LOW"]][["keyword_info.search_volume",">",100],
"and",
[["keyword_info.cpc","<",0.5],
"or",
["keyword_info.high_top_of_page_bid","<=",0.5]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#filters)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:94369

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#ignore_synonyms)

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

Defined in: main.ts:94359

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`include_clickstream_data`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#include_clickstream_data)

***

### include\_seed\_keyword?

> `optional` **include\_seed\_keyword**: `boolean`

Defined in: main.ts:94347

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`include_seed_keyword`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#include_seed_keyword)

***

### include\_serp\_info?

> `optional` **include\_serp\_info**: `boolean`

Defined in: main.ts:94352

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`include_serp_info`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#include_serp_info)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:94306

keyword
required field
UTF-8 encoding
the keywords will be converted to lowercase format;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`keyword`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:94342

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:94333

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:94408

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:94324

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:94315

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:94413

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:94421

offset token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#offset_token)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:94403

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
a comma is used as a separator
example:
["keyword_info.competition,desc"]
default rule:
["keyword_info.search_volume,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_info.search_volume,desc","keyword_info.cpc,desc"]

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:94427

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:94440

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:94480

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md)

Defined in: main.ts:94473

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo`](DataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo.md)
