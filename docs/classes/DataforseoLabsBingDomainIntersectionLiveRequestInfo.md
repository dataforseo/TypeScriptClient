[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsBingDomainIntersectionLiveRequestInfo

# Class: DataforseoLabsBingDomainIntersectionLiveRequestInfo

## Implements

- [`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsBingDomainIntersectionLiveRequestInfo()

> **new DataforseoLabsBingDomainIntersectionLiveRequestInfo**(`data`?): [`DataforseoLabsBingDomainIntersectionLiveRequestInfo`](DataforseoLabsBingDomainIntersectionLiveRequestInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md)

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveRequestInfo`](DataforseoLabsBingDomainIntersectionLiveRequestInfo.md)

#### Defined in

main.ts:109829

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
["keyword_data.keyword_info.search_volume","in",[100,1000]]
[["first_domain_serp_element.etv",">",0],"and",["first_domain_serp_element.description","like","%goat%"]]
[["keyword_data.keyword_info.search_volume",">",100],
"and",
[["first_domain_serp_element.description","like","%goat%"],
"or",
["second_domain_serp_element.type","=","organic"]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#filters)

#### Defined in

main.ts:109803

***

### include\_serp\_info?

> `optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`include_serp_info`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#include_serp_info)

#### Defined in

main.ts:109776

***

### intersections?

> `optional` **intersections**: `boolean`

domain intersections in SERP
optional field
if you set intersections to true, you will get the keywords for which both target domains specified as target1 and target2 have results within the same SERP; the corresponding SERP elements for both domains will be provided in the results array
Note: this endpoint will not provide results if the number of intersecting keywords exceeds 10 million
if you specify intersections: false, you will get the keywords for which the domain specified as target1 has results in SERP, and the domain specified as target2 doesn’t;
thus, the corresponding SERP elements and other data will be provided for the domain specified as target1only
default value: true

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`intersections`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#intersections)

#### Defined in

main.ts:109763

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

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#item_types)

#### Defined in

main.ts:109771

***

### language\_code?

> `optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#language_code)

#### Defined in

main.ts:109755

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

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#language_name)

#### Defined in

main.ts:109747

***

### limit?

> `optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#limit)

#### Defined in

main.ts:109781

***

### location\_code?

> `optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#location_code)

#### Defined in

main.ts:109739

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#location_name)

#### Defined in

main.ts:109730

***

### offset?

> `optional` **offset**: `number`

offset in the items array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#offset)

#### Defined in

main.ts:109786

***

### order\_by?

> `optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
["keyword_data.keyword_info.competition,desc"]
default rule:
["keyword_data.keyword_info.search_volume,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["keyword_data.keyword_info.search_volume,desc","keyword_data.keyword_info.cpc,desc"]

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#order_by)

#### Defined in

main.ts:109819

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#tag)

#### Defined in

main.ts:109825

***

### target1?

> `optional` **target1**: `string`

domain
required field
the domain name of the first target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`target1`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#target1)

#### Defined in

main.ts:109716

***

### target2?

> `optional` **target2**: `string`

domain
required field
the domain name of the second target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsBingDomainIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md).[`target2`](../interfaces/IDataforseoLabsBingDomainIntersectionLiveRequestInfo.md#target2)

#### Defined in

main.ts:109721

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:109838

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:109880

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsBingDomainIntersectionLiveRequestInfo`](DataforseoLabsBingDomainIntersectionLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsBingDomainIntersectionLiveRequestInfo`](DataforseoLabsBingDomainIntersectionLiveRequestInfo.md)

#### Defined in

main.ts:109873
