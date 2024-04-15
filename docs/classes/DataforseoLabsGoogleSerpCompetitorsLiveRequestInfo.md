**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo

# Class: DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo

## Implements

- [`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo(data)

> **new DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Source

main.ts:89721

## Properties

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, `<=, >`, >=, =, `<>`, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["median_position","in",[1,10]]
[["median_position","in",[1,10]],"and",["domain","not_like","%wikipedia.org%"]]
[["domain","not_like","%wikipedia.org%"],
"and",
[["relevant_serp_items",">`",0],"or",["median_position","in",[1,10]]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#filters)

#### Source

main.ts:89695

***

### include\_subdomains?

> **`optional`** **include\_subdomains**: `boolean`

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`include_subdomains`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#include_subdomains)

#### Source

main.ts:89662

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

search results type
indicates type of search results included in the response
optional field
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#item_types)

#### Source

main.ts:89670

***

### keywords?

> **`optional`** **keywords**: `string`[]

keywords array
required field
the results will be based on the keywords you specify in this array
UTF-8 encoding;
the keywords will be converted to lowercase format;
a keyword should be at least 3 characters long;
you can specify the maximum of 200 keywords

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#keywords)

#### Source

main.ts:89625

***

### language\_code?

> **`optional`** **language\_code**: `string`

unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_code)

#### Source

main.ts:89657

***

### language\_name?

> **`optional`** **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#language_name)

#### Source

main.ts:89649

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#limit)

#### Source

main.ts:89675

***

### location\_code?

> **`optional`** **location\_code**: `number`

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_code)

#### Source

main.ts:89641

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with location_name parameters by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#location_name)

#### Source

main.ts:89633

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#offset)

#### Source

main.ts:89680

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

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

#### Source

main.ts:89711

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md#tag)

#### Source

main.ts:89717

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:89730

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:89774

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo`](DataforseoLabsGoogleSerpCompetitorsLiveRequestInfo.md)

#### Source

main.ts:89767
