[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRankedKeywordsLiveRequestInfo

# Class: DataforseoLabsGoogleRankedKeywordsLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleRankedKeywordsLiveRequestInfo()

> **new DataforseoLabsGoogleRankedKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:100677

## Properties

### filters?

> `optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
["ranked_serp_element.serp_item.rank_group","<=",10]
[["ranked_serp_element.serp_item.rank_group","<=",10],
"and",
["ranked_serp_element.serp_item.type","<>","paid"]]
[["keyword_data.keyword_info.search_volume","<>",0],
"and",
[["ranked_serp_element.serp_item.type","<>","paid"],"or",["ranked_serp_element.serp_item.is_malicious","=",false]]]
if you want to get the keywords a particular webpage ranks for, specify the filter by the ranked_serp_element.serp_item.relative_url parameter
example:
["ranked_serp_element.serp_item.relative_url", "=", "/apis/rank-tracker-api"]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#filters)

#### Defined in

main.ts:100651

***

### historical\_serp\_mode?

> `optional` **historical\_serp\_mode**: `string`

data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return keywords for which the specified target currently has ranking results in SERP;
lost — return keywords for which the specified target had previously had ranking results in SERP, but didn’t have them during the last check;
all — return both types of keywords.
default value: live

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`historical_serp_mode`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#historical_serp_mode)

#### Defined in

main.ts:100631

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#ignore_synonyms)

#### Defined in

main.ts:100591

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, clickstream_etv, clickstream_gender_distribution, clickstream_age_distribution, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`include_clickstream_data`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#include_clickstream_data)

#### Defined in

main.ts:100607

***

### item\_types?

> `optional` **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#item_types)

#### Defined in

main.ts:100600

***

### language\_code?

> `optional` **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:100586

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:100577

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#limit)

#### Defined in

main.ts:100612

***

### load\_rank\_absolute?

> `optional` **load\_rank\_absolute**: `boolean`

return rankings distribution by rank_absolute
optional field
default value: false
if set to true, we will return the field metrics_absolute containing rankings distribution by the rank_absolute parameter that indicates the result’s position among all SERP elements

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`load_rank_absolute`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#load_rank_absolute)

#### Defined in

main.ts:100622

***

### location\_code?

> `optional` **location\_code**: `number`

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:100568

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:100559

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#offset)

#### Defined in

main.ts:100617

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
["keyword_data.keyword_info.competition,desc"]
default rule:
["ranked_serp_element.serp_item.rank_group,asc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#order_by)

#### Defined in

main.ts:100667

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#tag)

#### Defined in

main.ts:100673

***

### target?

> `optional` **target**: `string`

domain name or page url
required field
the domain name of the target website or URL of the target webpage;
the domain name must be specified without https:// or www.;
the webpage URL must be specified with https:// or www.

#### Implementation of

[`IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md#target)

#### Defined in

main.ts:100550

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:100686

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:100729

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleRankedKeywordsLiveRequestInfo`](DataforseoLabsGoogleRankedKeywordsLiveRequestInfo.md)

#### Defined in

main.ts:100722
