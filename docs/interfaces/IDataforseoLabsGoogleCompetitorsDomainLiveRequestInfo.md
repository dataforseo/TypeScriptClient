[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo

# Interface: IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo

## Implemented by

- [`DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo`](../classes/DataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [exclude\_top\_domains](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#exclude_top_domains)
- [filters](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#filters)
- [intersecting\_domains](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#intersecting_domains)
- [item\_types](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#item_types)
- [language\_code](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#language_code)
- [language\_name](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#language_name)
- [limit](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#limit)
- [location\_code](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#location_code)
- [location\_name](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#location_name)
- [max\_rank\_group](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#max_rank_group)
- [offset](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#offset)
- [order\_by](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#order_by)
- [tag](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#tag)
- [target](IDataforseoLabsGoogleCompetitorsDomainLiveRequestInfo.md#target)

## Properties

### exclude\_top\_domains

• `Optional` **exclude\_top\_domains**: `boolean`

indicates whether to exclude world’s largest websites
optional field
default value: false
set to true if you want to get highly-relevant competitors excluding the websites listed below:
wikipedia.org
pinterest.com
amazon.com
google.com
facebook.com
wordpress.com
medium.com
quora.com
reddit.com
youtube.com
ebay.com
uol.com.br
instagram.com
olx.com
twitter.com
linkedin.com
slideshare.net

#### Defined in

[main.ts:88345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88345)

___

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, <, <=, >, >=, =, <>, in, not_in
example:
["metrics.organic.count",">",50]
[["metrics.organic.pos_1","<>",0],"and",["metrics.organic.impressions_etv",">=","10"]]
[[["metrics.organic.count",">=",50],"and",["metrics.organic.pos_1","in",[1,5]]],
"or",
["metrics.organic.etv",">=","100"]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Defined in

[main.ts:88291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88291)

___

### intersecting\_domains

• `Optional` **intersecting\_domains**: `string`[]

additional domains for improving results accuracy
optional field
to improve the accuracy of the result, you can specify domains that are known to intersect with the target in SERPs;
if you use this array, metrics in the result will be based on SERPs where both target website and intersecting_domains appear;
Note: you can specify up to 20 domains in this array

#### Defined in

[main.ts:88351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88351)

___

### item\_types

• `Optional` **item\_types**: `string`[]

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid", "featured_snippet", "local_pack"]

#### Defined in

[main.ts:88277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88277)

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

#### Defined in

[main.ts:88268](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88268)

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

#### Defined in

[main.ts:88260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88260)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:88313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88313)

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

#### Defined in

[main.ts:88252](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88252)

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

#### Defined in

[main.ts:88244](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88244)

___

### max\_rank\_group

• `Optional` **max\_rank\_group**: `number`

maximum rank up to which competitors will be considered
optional field
default value: 100
if you specify 10 here, we will extract competitors from the top 10 Google search results only

#### Defined in

[main.ts:88323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88323)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Defined in

[main.ts:88318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88318)

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
["metrics.paid.etv,asc"]
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["metrics.organic.etv,desc","metrics.paid.count,asc"]
default rule:
["metrics.organic.count,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Defined in

[main.ts:88308](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88308)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:88357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88357)

___

### target

• `Optional` **target**: `string`

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Defined in

[main.ts:88236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L88236)
