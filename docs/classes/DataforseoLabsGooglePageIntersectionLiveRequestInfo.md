[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsGooglePageIntersectionLiveRequestInfo

# Class: DataforseoLabsGooglePageIntersectionLiveRequestInfo

## Implements

- [`IDataforseoLabsGooglePageIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#constructor)

### Properties

- [exclude\_pages](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#exclude_pages)
- [filters](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#filters)
- [ignore\_synonyms](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#ignore_synonyms)
- [include\_serp\_info](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#include_serp_info)
- [include\_subdomains](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#include_subdomains)
- [intersection\_mode](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#intersection_mode)
- [item\_types](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#order_by)
- [pages](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#pages)
- [tag](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGooglePageIntersectionLiveRequestInfo**(`data?`): [`DataforseoLabsGooglePageIntersectionLiveRequestInfo`](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGooglePageIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveRequestInfo`](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md)

#### Defined in

[main.ts:96873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96873)

## Properties

### exclude\_pages

• `Optional` **exclude\_pages**: `string`[]

URLs of pages you want to exclude
optional field
you can set up to 10 pages in this array
if you use this array, results will contain the keywords for which URLs from the pages object rank, but URLs from exclude_pages array do not;
note that if you specify this field, the results will be based on the keywords any URL from pages ranks for regardless of intersections between them. However, you can set intersection_mode to intersect and results will contain the keywords all URLs from pages rank for in the same SERP and URLs from exclude_pages do not.
use a wildcard (‘*’) character to specify the search pattern
example:
"exclude_pages": [
"https://www.apple.com/iphone/*",
"https://dataforseo.com/apis/*",
"https://www.microsoft.com/en-us/industry/services/"
]

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[exclude_pages](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#exclude_pages)

#### Defined in

[main.ts:96754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96754)

___


### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
note that if you want to filter by any field in the intersection_result array you need to specify the number of corresponding page
for instance, if you want to filter results by the ranking of the first specified URL, you should set the following filter:
[intersection_result.1.rank_absolute,"=",1]
if you want to filter results and receive only organic listings for the third specified URL, you should set the following filter:
[intersection_result.3.type,"=","organic"] , etc.example:
["keyword_data.keyword_info.search_volume","in",[100,1000]]
[["intersection_result.1.etv",">",0],"and",["intersection_result.1.description","like","%goat%"]][["keyword_data.keyword_info.search_volume",">",100],
"and",
[["intersection_result.2.description","like","%goat%"],
"or",
["intersection_result.2.type","=","organic"]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#filters)

#### Defined in

[main.ts:96847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96847)

___


### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[ignore_synonyms](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#ignore_synonyms)

#### Defined in

[main.ts:96827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96827)

___


### include\_serp\_info

• `Optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[include_serp_info](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#include_serp_info)

#### Defined in

[main.ts:96822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96822)

___


### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[include_subdomains](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#include_subdomains)

#### Defined in

[main.ts:96809](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96809)

___


### intersection\_mode

• `Optional` **intersection\_mode**: `string`

indicates whether to intersect keywords
optional field
use this field to intersect or merge results for the specified URLs
possible values: union, intersect
union – results are based on all keywords any URL from pages rank for;
intersect – results are based on the keywords all URLs from pages rank for in the same SERP:
by default, results are based on the intersect mode if you specify only pages array. If you specify exclude_pages as well, results are based on the union mode

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[intersection_mode](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#intersection_mode)

#### Defined in

[main.ts:96817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96817)

___


### item\_types

• `Optional` **item\_types**: `string`[]

search results type
indicates type of search results included in the response
optional field
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#item_types)

#### Defined in

[main.ts:96794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96794)

___


### language\_code

• `Optional` **language\_code**: `string`

language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:96786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96786)

___


### language\_name

• `Optional` **language\_name**: `string`

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:96778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96778)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#limit)

#### Defined in

[main.ts:96799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96799)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:96770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96770)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:96762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96762)

___


### offset

• `Optional` **offset**: `number`

offset in the items array of returned keywords
optional field
default value: 0
if you specify 10 here, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#offset)

#### Defined in

[main.ts:96804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96804)

___


### order\_by

• `Optional` **order\_by**: `string`[]

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
["intersection_result.1.rank_group,asc","intersection_result.2.rank_absolute,asc"]

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:96863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96863)

___


### pages

• `Optional` **pages**: `Object`

target URLs of pages
required field
you can set up to 20 pages in this object
the pages should be specified with absolute URLs (including http:// or https://)
example:
"pages": {
"1":"https://www.apple.com/mac/*",
"2":"https://dataforseo.com/*",
"3":"https://support.microsoft.com/"
}if you specify a single page here, we will return results only for this page;
you can also use a wildcard (‘*’) character to specify the search pattern
example:
"example.com"
search for the exact URL
"example.com/eng/*"
search for the example.com page and all its related URLs which start with ‘/eng/’, such as “example.com/eng/index.html” and “example.com/eng/help/”, etc.
note: a wilcard should be placed after the slash (‘/’) character in the end of the URL, it is not possible to place it after the domain in the following way:
https://dataforseo.com*
use https://dataforseo.com/* instead
Note: this endpoint will not provide results if the number of intersecting keywords exceeds 10 million

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[pages](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#pages)

#### Defined in

[main.ts:96741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96741)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsGooglePageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsGooglePageIntersectionLiveRequestInfo.md#tag)

#### Defined in

[main.ts:96869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96869)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:96882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96882)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:96936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96936)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGooglePageIntersectionLiveRequestInfo`](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveRequestInfo`](DataforseoLabsGooglePageIntersectionLiveRequestInfo.md)

#### Defined in

[main.ts:96929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L96929)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")