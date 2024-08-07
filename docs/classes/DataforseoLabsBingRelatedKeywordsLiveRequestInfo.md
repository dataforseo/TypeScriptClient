**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsBingRelatedKeywordsLiveRequestInfo

# Class: DataforseoLabsBingRelatedKeywordsLiveRequestInfo

## Implements

- [`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingRelatedKeywordsLiveRequestInfo(data)

> **new DataforseoLabsBingRelatedKeywordsLiveRequestInfo**(`data`?): [`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Source

main.ts:111596

## Properties

### depth?

> **`optional`** **depth**: `number`

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

#### Source

main.ts:111527

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, `<=, >`, >=, =, `<>`, in, not_in, like,not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["keyword_data.keyword_info.search_volume",">`",0]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#filters)

#### Source

main.ts:111560

***

### ignore\_synonyms?

> **`optional`** **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#ignore_synonyms)

#### Source

main.ts:111549

***

### include\_seed\_keyword?

> **`optional`** **include\_seed\_keyword**: `boolean`

include data for the seed keyword
optional field
if set to true, data for the seed keyword specified in the keyword field will be provided in the seed_keyword_data array of the response
default value: false

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`include_seed_keyword`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#include_seed_keyword)

#### Source

main.ts:111532

***

### include\_serp\_info?

> **`optional`** **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`include_serp_info`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#include_serp_info)

#### Source

main.ts:111537

***

### keyword?

> **`optional`** **keyword**: `string`

keyword
required field
UTF-8 encoding
a keyword should be at least 3 characters long;
the keywords will be converted to lowercase format

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`keyword`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#keyword)

#### Source

main.ts:111481

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#language_code)

#### Source

main.ts:111515

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available locations with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#language_name)

#### Source

main.ts:111507

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#limit)

#### Source

main.ts:111581

***

### location\_code?

> **`optional`** **location\_code**: `number`

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

#### Source

main.ts:111499

***

### location\_name?

> **`optional`** **location\_name**: `string`

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

#### Source

main.ts:111490

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#offset)

#### Source

main.ts:111586

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

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

#### Source

main.ts:111576

***

### replace\_with\_core\_keyword?

> **`optional`** **replace\_with\_core\_keyword**: `boolean`

return data for core keyword
optional field
if true, serp_info and related_keywords will be returned for the main keyword in the group that the specified keyword belongs to;
if false, serp_info and related_keywords will be returned for the specified keyword (if available);
refer to this help center article for more details;
default value: false

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`replace_with_core_keyword`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#replace_with_core_keyword)

#### Source

main.ts:111544

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingRelatedKeywordsLiveRequestInfo`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingRelatedKeywordsLiveRequestInfo.md#tag)

#### Source

main.ts:111592

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:111605

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:111644

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingRelatedKeywordsLiveRequestInfo`](DataforseoLabsBingRelatedKeywordsLiveRequestInfo.md)

#### Source

main.ts:111637
