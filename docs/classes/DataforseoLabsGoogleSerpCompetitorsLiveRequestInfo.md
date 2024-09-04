[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo

# Class: DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo()

> **new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Defined in

main.ts:93471

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
["median_position","in",[1,10]]
[["median_position","in",[1,10]],"and",["domain","not_like","%wikipedia.org%"]]
[["domain","not_like","%wikipedia.org%"],
"and",
[["relevant_serp_items",">",0],"or",["median_position","in",[1,10]]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#filters)

#### Defined in

main.ts:93445

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`include_subdomains`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#include_subdomains)

#### Defined in

main.ts:93412

***

### item\_types?

> `optional` **item\_types**: `string`[]

search results type
indicates type of search results included in the response
optional field
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#item_types)

#### Defined in

main.ts:93420

***

### keywords?

> `optional` **keywords**: `string`[]

keywords array
required field
the results will be based on the keywords you specify in this array
UTF-8 encoding;
the keywords will be converted to lowercase format;
a keyword should be at least 3 characters long;
you can specify the maximum of 200 keywords

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#keywords)

#### Defined in

main.ts:93375

***

### language\_code?

> `optional` **language\_code**: `string`

unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_code)

#### Defined in

main.ts:93407

***

### language\_name?

> `optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_name)

#### Defined in

main.ts:93399

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#limit)

#### Defined in

main.ts:93425

***

### location\_code?

> `optional` **location\_code**: `number`

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_code)

#### Defined in

main.ts:93391

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with location_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_name)

#### Defined in

main.ts:93383

***

### offset?

> `optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#offset)

#### Defined in

main.ts:93430

***

### order\_by?

> `optional` **order\_by**: `string`[]

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

#### Defined in

main.ts:93461

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#tag)

#### Defined in

main.ts:93467

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:93480

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:93524

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Defined in

main.ts:93517
