[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / DataforseoLabsBingPageIntersectionLiveRequestInfo

# Class: DataforseoLabsBingPageIntersectionLiveRequestInfo

## Implements

- [`IDataforseoLabsBingPageIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#constructor)

### Properties

- [exclude\_pages](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#exclude_pages)
- [filters](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#filters)
- [ignore\_synonyms](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#ignore_synonyms)
- [include\_serp\_info](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#include_serp_info)
- [include\_subdomains](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#include_subdomains)
- [intersection\_mode](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#intersection_mode)
- [item\_types](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#item_types)
- [language\_code](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#language_code)
- [language\_name](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#language_name)
- [limit](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#limit)
- [location\_code](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#location_code)
- [location\_name](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#location_name)
- [offset](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#offset)
- [order\_by](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#order_by)
- [pages](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#pages)
- [tag](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#tag)

### Methods

- [init](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#init)
- [toJSON](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#tojson)
- [fromJS](DataforseoLabsBingPageIntersectionLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsBingPageIntersectionLiveRequestInfo**(`data?`): [`DataforseoLabsBingPageIntersectionLiveRequestInfo`](DataforseoLabsBingPageIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsBingPageIntersectionLiveRequestInfo`](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md) |

#### Returns

[`DataforseoLabsBingPageIntersectionLiveRequestInfo`](DataforseoLabsBingPageIntersectionLiveRequestInfo.md)

#### Defined in

[main.ts:104458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104458)

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

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[exclude_pages](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#exclude_pages)

#### Defined in

[main.ts:104338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104338)

___


### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more charactersnote that if you want to filter by any field in the intersection_result array you need to specify the number of corresponding page
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

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[filters](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#filters)

#### Defined in

[main.ts:104432](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104432)

___


### ignore\_synonyms

• `Optional` **ignore\_synonyms**: `boolean`

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[ignore_synonyms](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#ignore_synonyms)

#### Defined in

[main.ts:104385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104385)

___


### include\_serp\_info

• `Optional` **include\_serp\_info**: `boolean`

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[include_serp_info](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#include_serp_info)

#### Defined in

[main.ts:104413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104413)

___


### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[include_subdomains](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#include_subdomains)

#### Defined in

[main.ts:104400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104400)

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

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[intersection_mode](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#intersection_mode)

#### Defined in

[main.ts:104408](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104408)

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

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[item_types](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#item_types)

#### Defined in

[main.ts:104380](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104380)

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

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[language_code](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#language_code)

#### Defined in

[main.ts:104372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104372)

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

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[language_name](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#language_name)

#### Defined in

[main.ts:104364](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104364)

___


### limit

• `Optional` **limit**: `number`

the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[limit](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#limit)

#### Defined in

[main.ts:104390](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104390)

___


### location\_code

• `Optional` **location\_code**: `number`

location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[location_code](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#location_code)

#### Defined in

[main.ts:104356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104356)

___


### location\_name

• `Optional` **location\_name**: `string`

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[location_name](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#location_name)

#### Defined in

[main.ts:104347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104347)

___


### offset

• `Optional` **offset**: `number`

offset in the items array of returned keywords
optional field
default value: 0
if you specify 10 here, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[offset](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#offset)

#### Defined in

[main.ts:104395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104395)

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

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[order_by](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:104448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104448)

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

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[pages](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#pages)

#### Defined in

[main.ts:104325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104325)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IDataforseoLabsBingPageIntersectionLiveRequestInfo](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md).[tag](../interfaces/IDataforseoLabsBingPageIntersectionLiveRequestInfo.md#tag)

#### Defined in

[main.ts:104454](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104454)

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

[main.ts:104467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104467)

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

[main.ts:104521](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104521)

___


### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsBingPageIntersectionLiveRequestInfo`](DataforseoLabsBingPageIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsBingPageIntersectionLiveRequestInfo`](DataforseoLabsBingPageIntersectionLiveRequestInfo.md)

#### Defined in

[main.ts:104514](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L104514)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")