[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo

# Class: DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo

Defined in: main.ts:101854

## Implements

- [`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo()

> **new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

Defined in: main.ts:101958

#### Parameters

##### data?

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:101932

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
["median_position","in",[1,10]]
[["median_position","in",[1,10]],"and",["domain","not_like","%wikipedia.org%"]]
[["domain","not_like","%wikipedia.org%"],
"and",
[["relevant_serp_items",">",0],"or",["median_position","in",[1,10]]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#filters)

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:101899

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`include_subdomains`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#include_subdomains)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:101907

search results type
indicates type of search results included in the response
optional field
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#item_types)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:101862

keywords array
required field
the results will be based on the keywords you specify in this array
UTF-8 encoding;
the keywords will be converted to lowercase format;
you can specify the maximum of 200 keywords
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:101894

unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:101886

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:101912

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:101878

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:101870

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with location_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:101917

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:101948

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
the comma is used as a separator
example:
["avg_position,asc"]
default rule:
["rating,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["avg_position,asc","etv,desc"]

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:101954

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101967

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:102011

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

Defined in: main.ts:102004

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)
