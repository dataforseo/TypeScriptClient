[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo

# Class: DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo()

> **new DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md)

#### Defined in

main.ts:88589

## Properties

### category\_codes?

> `optional` **category\_codes**: `string`[]

product and service categories
required field
The maximum number of categories you can specify: 20
you can download the full list of possible categories

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`category_codes`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#category_codes)

#### Defined in

main.ts:88471

***

### category\_intersection?

> `optional` **category\_intersection**: `boolean`

category intersections
optional field
if set to true, you will get keywords featured in all specified categories;
if set to false, you will keywords that are specified in any of the specified categories;
default value: true

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`category_intersection`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#category_intersection)

#### Defined in

main.ts:88509

***

### filters?

> `optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like,as well as ilike, not_ilike to match any string of zero or more characters
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

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#filters)

#### Defined in

main.ts:88563

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#ignore_synonyms)

#### Defined in

main.ts:88526

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info object with clickstream data in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`include_clickstream_data`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#include_clickstream_data)

#### Defined in

main.ts:88521

***

### include\_serp\_info?

> `optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`include_serp_info`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#include_serp_info)

#### Defined in

main.ts:88514

***

### language\_code?

> `optional` **language\_code**: `string`

unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#language_code)

#### Defined in

main.ts:88503

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#language_name)

#### Defined in

main.ts:88495

***

### limit?

> `optional` **limit**: `number`

the maximum number of keywords in the results array
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#limit)

#### Defined in

main.ts:88531

***

### location\_code?

> `optional` **location\_code**: `number`

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#location_code)

#### Defined in

main.ts:88487

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#location_name)

#### Defined in

main.ts:88479

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#offset)

#### Defined in

main.ts:88536

***

### offset\_token?

> `optional` **offset\_token**: `string`

offset token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#offset_token)

#### Defined in

main.ts:88544

***

### order\_by?

> `optional` **order\_by**: `string`[]

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
["keyword_info.search_volume,desc","keyword_info.competition,asc"]

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#order_by)

#### Defined in

main.ts:88579

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md#tag)

#### Defined in

main.ts:88585

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:88598

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:88641

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo`](DataforseoLabsGoogleKeywordsForCategoriesLiveRequestInfo.md)

#### Defined in

main.ts:88634
