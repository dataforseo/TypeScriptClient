[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingRankedKeywordsLiveRequestInfo

# Class: DataforseoLabsBingRankedKeywordsLiveRequestInfo

Defined in: main.ts:118252

## Implements

- [`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRankedKeywordsLiveRequestInfo()

> **new DataforseoLabsBingRankedKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

Defined in: main.ts:118380

#### Parameters

##### data?

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:118354

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like, match, not_match
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

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#filters)

***

### historical\_serp\_mode?

> `optional` **historical\_serp\_mode**: `string`

Defined in: main.ts:118334

data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return keywords for which the specified target currently has ranking results in SERP;
lost — return keywords for which the specified target had previously had ranking results in SERP, but didn’t have them during the last check;
all — return both types of keywords.
default value: live

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`historical_serp_mode`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#historical_serp_mode)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:118310

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#ignore_synonyms)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:118305

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#item_types)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:118296

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:118287

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:118315

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#limit)

***

### load\_rank\_absolute?

> `optional` **load\_rank\_absolute**: `boolean`

Defined in: main.ts:118325

return rankings distribution by rank_absolute
optional field
default value: false
if set to true, we will return the field metrics_absolute containing rankings distribution by the rank_absolute parameter that indicates the result’s position among all SERP elements

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`load_rank_absolute`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#load_rank_absolute)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:118278

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:118268

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:118320

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:118370

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

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:118376

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:118258

domain name or page url
required field
the domain name of the target website or URL of the target webpage;
the domain name must be specified without https:// or www.;
the webpage URL must be specified with https:// or www.

#### Implementation of

[`IDataforseoLabsBingRankedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsBingRankedKeywordsLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:118389

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:118431

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)

Defined in: main.ts:118424

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingRankedKeywordsLiveRequestInfo`](DataforseoLabsBingRankedKeywordsLiveRequestInfo.md)
