[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsBingRelatedKeywordsLiveRequestInfo

# Class: DataforseoLabsBingRelatedKeywordsLiveRequestInfo

Defined in: main.ts:118752

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRelatedKeywordsLiveRequestInfo()

> **new DataforseoLabsBingRelatedKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

Defined in: main.ts:118873

#### Parameters

##### data?

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: main.ts:118804

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

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`depth`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#depth)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:118837

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like,not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
["keyword_data.keyword_info.search_volume",">",0]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#filters)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:118826

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#ignore_synonyms)

***

### include\_seed\_keyword?

> `optional` **include\_seed\_keyword**: `boolean`

Defined in: main.ts:118809

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`include_seed_keyword`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#include_seed_keyword)

***

### include\_serp\_info?

> `optional` **include\_serp\_info**: `boolean`

Defined in: main.ts:118814

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`include_serp_info`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#include_serp_info)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:118758

keyword
required field
UTF-8 encoding
the keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`keyword`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:118792

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:118784

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:118858

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:118776

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:118767

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:118863

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:118853

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

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#order_by)

***

### replace\_with\_core\_keyword?

> `optional` **replace\_with\_core\_keyword**: `boolean`

Defined in: main.ts:118821

return data for core keyword
optional field
if true, serp_info and related_keywords will be returned for the main keyword in the group that the specified keyword belongs to;
if false, serp_info and related_keywords will be returned for the specified keyword (if available);
refer to this help center article for more details;
default value: false

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`replace_with_core_keyword`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#replace_with_core_keyword)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:118869

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:118882

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:118921

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

Defined in: main.ts:118914

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)
