**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo

# Class: DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo(data)

> **new DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md)

#### Source

main.ts:82575

## Properties

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, `<=, >`, >=, =, `<>`, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
note that you can not filter the results by relevance
example:
["keyword_info.search_volume",">`",0]
[["impressions_info.daily_impressions_average","in",[0,1000]],
"and",
["impressions_info.ad_position_average","`<",3]][["impressions_info.ad_position_average",">`",0],
"and",
[["impressions_info.cpc_max","`<",0.5],"or",["impressions_info.daily_clicks_max",">`=",10]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#filters)

#### Source

main.ts:82549

***

### ignore\_synonyms?

> **`optional`** **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#ignore_synonyms)

#### Source

main.ts:82514

***

### include\_clickstream\_data?

> **`optional`** **include\_clickstream\_data**: `boolean`

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info object with clickstream data in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
Note: clickstream data is available for roughly 15% of keywords in the response
learn more about how clickstream-based metrics are calculated in this help center article

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`include_clickstream_data`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#include_clickstream_data)

#### Source

main.ts:82509

***

### include\_serp\_info?

> **`optional`** **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`include_serp_info`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#include_serp_info)

#### Source

main.ts:82496

***

### include\_subdomains?

> **`optional`** **include\_subdomains**: `boolean`

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`include_subdomains`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#include_subdomains)

#### Source

main.ts:82501

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#language_code)

#### Source

main.ts:82491

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#language_name)

#### Source

main.ts:82482

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of keywords in the results array
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#limit)

#### Source

main.ts:82519

***

### location\_code?

> **`optional`** **location\_code**: `number`

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#location_code)

#### Source

main.ts:82473

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#location_name)

#### Source

main.ts:82465

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#offset)

#### Source

main.ts:82524

***

### offset\_token?

> **`optional`** **offset\_token**: `string`

offset token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#offset_token)

#### Source

main.ts:82532

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

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

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#order_by)

#### Source

main.ts:82565

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#tag)

#### Source

main.ts:82571

***

### target?

> **`optional`** **target**: `string`

target domain
required field
the domain name of the target website
the domain should be specified without https:// or www.

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md#target)

#### Source

main.ts:82457

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:82584

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:82623

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo`](DataforseoLabsGoogleKeywordsForSiteLiveRequestInfo.md)

#### Source

main.ts:82616
