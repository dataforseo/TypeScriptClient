[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo

# Interface: IDataforseoLabsGoogleKeywordSuggestionsLiveRequestInfo

Defined in: main.ts:94548

## Indexable

\[`key`: `string`\]: `any`

## Properties

### exact\_match?

> `optional` **exact\_match**: `boolean`

Defined in: main.ts:94612

search for the exact phrase
optional field
if set to true, the returned keywords will include the exact keyword phrase you specified, with potentially other words before or after that phrase
default value: false

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:94635

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
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

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:94617

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

Defined in: main.ts:94607

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article

***

### include\_seed\_keyword?

> `optional` **include\_seed\_keyword**: `boolean`

Defined in: main.ts:94595

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

***

### include\_serp\_info?

> `optional` **include\_serp\_info**: `boolean`

Defined in: main.ts:94600

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:94554

keyword
required field
UTF-8 encoding
the keywords will be converted to lowercase format;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:94590

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:94581

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:94656

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:94572

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:94563

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:94661

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:94669

offset token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:94651

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

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:94675

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response
