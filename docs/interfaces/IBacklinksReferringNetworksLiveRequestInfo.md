[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksReferringNetworksLiveRequestInfo

# Interface: IBacklinksReferringNetworksLiveRequestInfo

## Implemented by

- [`BacklinksReferringNetworksLiveRequestInfo`](../classes/BacklinksReferringNetworksLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks\_filters](IBacklinksReferringNetworksLiveRequestInfo.md#backlinks_filters)
- [backlinks\_status\_type](IBacklinksReferringNetworksLiveRequestInfo.md#backlinks_status_type)
- [exclude\_internal\_backlinks](IBacklinksReferringNetworksLiveRequestInfo.md#exclude_internal_backlinks)
- [filters](IBacklinksReferringNetworksLiveRequestInfo.md#filters)
- [include\_indirect\_links](IBacklinksReferringNetworksLiveRequestInfo.md#include_indirect_links)
- [include\_subdomains](IBacklinksReferringNetworksLiveRequestInfo.md#include_subdomains)
- [internal\_list\_limit](IBacklinksReferringNetworksLiveRequestInfo.md#internal_list_limit)
- [limit](IBacklinksReferringNetworksLiveRequestInfo.md#limit)
- [network\_address\_type](IBacklinksReferringNetworksLiveRequestInfo.md#network_address_type)
- [offset](IBacklinksReferringNetworksLiveRequestInfo.md#offset)
- [order\_by](IBacklinksReferringNetworksLiveRequestInfo.md#order_by)
- [tag](IBacklinksReferringNetworksLiveRequestInfo.md#tag)
- [target](IBacklinksReferringNetworksLiveRequestInfo.md#target)

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

[main.ts:135420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135420)

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

[main.ts:135381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135381)

___

### exclude\_internal\_backlinks

• `Optional` **exclude\_internal\_backlinks**: `boolean`

indicates whether the backlinks from subdomains of the target are excluded
optional field
if set to false, the backlinks from subdomains of the target will be ommited and you won’t receive the same domain in the response;
default value: true

#### Defined in

[main.ts:135436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135436)

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
["referring_pages",">","1"]
[["referring_pages",">","2"],
"and",
["backlinks",">","10"]]
[["first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["network_address","like","194.1.%"],"or",["referring_ips",">","10"]]]
The full list of possible filters is available here.

#### Defined in

[main.ts:135398](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135398)

___

### include\_indirect\_links

• `Optional` **include\_indirect\_links**: `boolean`

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Defined in

[main.ts:135431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135431)

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Defined in

[main.ts:135425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135425)

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

[main.ts:135372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135372)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned networks
optional field
default value: 100
maximum value: 1000

#### Defined in

[main.ts:135356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135356)

___

### network\_address\_type

• `Optional` **network\_address\_type**: `string`

indicates the type of network to get data for
optional field
possible values: ip, subnet
default value: ip

#### Defined in

[main.ts:135351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135351)

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned networks
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive pages

#### Defined in

[main.ts:135361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135361)

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

[main.ts:135412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135412)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:135442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135442)

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage to get referring networks for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Defined in

[main.ts:135346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L135346)
