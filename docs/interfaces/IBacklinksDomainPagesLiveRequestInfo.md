[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksDomainPagesLiveRequestInfo

# Interface: IBacklinksDomainPagesLiveRequestInfo

## Implemented by

- [`BacklinksDomainPagesLiveRequestInfo`](../classes/BacklinksDomainPagesLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks\_filters](IBacklinksDomainPagesLiveRequestInfo.md#backlinks_filters)
- [backlinks\_status\_type](IBacklinksDomainPagesLiveRequestInfo.md#backlinks_status_type)
- [filters](IBacklinksDomainPagesLiveRequestInfo.md#filters)
- [include\_subdomains](IBacklinksDomainPagesLiveRequestInfo.md#include_subdomains)
- [internal\_list\_limit](IBacklinksDomainPagesLiveRequestInfo.md#internal_list_limit)
- [limit](IBacklinksDomainPagesLiveRequestInfo.md#limit)
- [offset](IBacklinksDomainPagesLiveRequestInfo.md#offset)
- [order\_by](IBacklinksDomainPagesLiveRequestInfo.md#order_by)
- [tag](IBacklinksDomainPagesLiveRequestInfo.md#tag)
- [target](IBacklinksDomainPagesLiveRequestInfo.md#target)

## Properties

### backlinks\_filters

• `Optional` **backlinks\_filters**: `any`[]

filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
"backlinks_filters": ["dofollow", "=", true]

#### Defined in

[main.ts:132697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132697)

___

### backlinks\_status\_type

• `Optional` **backlinks\_status\_type**: `string`

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Defined in

[main.ts:132658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132658)

___

### filters

• `Optional` **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, =, <>, in, not_in, like, not_like, ilike, not_ilike
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["meta.internal_links_count",">","1"]
[["meta.external_links_count",">","2"],
"and",
["backlinks",">","10"]]
[["first_visited",">","2017-10-23 11:31:45 +00:00"],
"and",
[["title","like","%seo%"],"or",["referring_domains",">","10"]]]
The full list of possible filters is available here.

#### Defined in

[main.ts:132675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132675)

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Defined in

[main.ts:132702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132702)

___

### internal\_list\_limit

• `Optional` **internal\_list\_limit**: `number`

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
referring_links_tld
referring_links_types
referring_links_attributes
referring_links_platform_types
referring_links_semantic_locations
default value: 10
maximum value: 1000

#### Defined in

[main.ts:132649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132649)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:132633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132633)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

[main.ts:132638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132638)

___

### order\_by

• `Optional` **order\_by**: `string`[]

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting type
example:
["page_summary.backlinks,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["page_summary.backlinks,desc","page_summary.rank,asc"]

#### Defined in

[main.ts:132689](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132689)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:132708](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132708)

___

### target

• `Optional` **target**: `string`

domain or subdomain
required field
a domain or a subdomain should be specified without https:// and www.
example:
forbes.com

#### Defined in

[main.ts:132628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L132628)
