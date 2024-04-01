[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksAnchorsLiveRequestInfo

# Interface: IBacklinksAnchorsLiveRequestInfo

## Implemented by

- [`BacklinksAnchorsLiveRequestInfo`](../classes/BacklinksAnchorsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks\_filters](IBacklinksAnchorsLiveRequestInfo.md#backlinks_filters)
- [backlinks\_status\_type](IBacklinksAnchorsLiveRequestInfo.md#backlinks_status_type)
- [exclude\_internal\_backlinks](IBacklinksAnchorsLiveRequestInfo.md#exclude_internal_backlinks)
- [filters](IBacklinksAnchorsLiveRequestInfo.md#filters)
- [include\_indirect\_links](IBacklinksAnchorsLiveRequestInfo.md#include_indirect_links)
- [include\_subdomains](IBacklinksAnchorsLiveRequestInfo.md#include_subdomains)
- [internal\_list\_limit](IBacklinksAnchorsLiveRequestInfo.md#internal_list_limit)
- [limit](IBacklinksAnchorsLiveRequestInfo.md#limit)
- [offset](IBacklinksAnchorsLiveRequestInfo.md#offset)
- [order\_by](IBacklinksAnchorsLiveRequestInfo.md#order_by)
- [tag](IBacklinksAnchorsLiveRequestInfo.md#tag)
- [target](IBacklinksAnchorsLiveRequestInfo.md#target)

## Properties

### backlinks\_filters

• `Optional` **backlinks\_filters**: `any`[]

filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
"backlinks_filters": [["dofollow", "=", true]]

#### Defined in

main.ts:137327

___

### backlinks\_status\_type

• `Optional` **backlinks\_status\_type**: `string`

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Defined in

main.ts:137288

___

### exclude\_internal\_backlinks

• `Optional` **exclude\_internal\_backlinks**: `boolean`

indicates whether the backlinks from subdomains of the target are excluded
optional field
if set to false, the backlinks from subdomains of the target will be ommited and you won’t receive the same domain in the response;
default value: true

#### Defined in

main.ts:137343

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
["referring_links_types.anchors",">","1"]
[["broken_pages",">","2"],
"and",
["backlinks",">","10"]]
[["first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["anchor","like","%seo%"],"or",["referring_domains",">","10"]]]
The full list of possible filters is available here.

#### Defined in

main.ts:137305

___

### include\_indirect\_links

• `Optional` **include\_indirect\_links**: `boolean`

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Defined in

main.ts:137338

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Defined in

main.ts:137332

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

main.ts:137279

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned anchors
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:137263

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned anchors
optional field
default value: 0
if you specify the 10 value, the first ten anchors in the results array will be omitted and the data will be provided for the successive anchors

#### Defined in

main.ts:137268

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
["backlinks,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["backlinks,desc","rank,asc"]

#### Defined in

main.ts:137319

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:137349

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage to get anchors for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Defined in

main.ts:137258
