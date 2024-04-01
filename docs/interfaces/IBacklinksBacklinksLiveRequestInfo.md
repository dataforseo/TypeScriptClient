[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksBacklinksLiveRequestInfo

# Interface: IBacklinksBacklinksLiveRequestInfo

## Implemented by

- [`BacklinksBacklinksLiveRequestInfo`](../classes/BacklinksBacklinksLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks\_status\_type](IBacklinksBacklinksLiveRequestInfo.md#backlinks_status_type)
- [custom\_mode](IBacklinksBacklinksLiveRequestInfo.md#custom_mode)
- [field](IBacklinksBacklinksLiveRequestInfo.md#field)
- [filters](IBacklinksBacklinksLiveRequestInfo.md#filters)
- [include\_indirect\_links](IBacklinksBacklinksLiveRequestInfo.md#include_indirect_links)
- [include\_subdomains](IBacklinksBacklinksLiveRequestInfo.md#include_subdomains)
- [limit](IBacklinksBacklinksLiveRequestInfo.md#limit)
- [mode](IBacklinksBacklinksLiveRequestInfo.md#mode)
- [offset](IBacklinksBacklinksLiveRequestInfo.md#offset)
- [order\_by](IBacklinksBacklinksLiveRequestInfo.md#order_by)
- [search\_after\_token](IBacklinksBacklinksLiveRequestInfo.md#search_after_token)
- [tag](IBacklinksBacklinksLiveRequestInfo.md#tag)
- [target](IBacklinksBacklinksLiveRequestInfo.md#target)
- [value](IBacklinksBacklinksLiveRequestInfo.md#value)

## Properties

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

main.ts:136246

___

### custom\_mode

• `Optional` **custom\_mode**: `Object`

detailed results grouping type
optional field
use this object to get a specific number of backlinks per field
if you use custom_mode, then mode will be ignored
example:
"custom_mode": {"field": "domain", "value": 100}

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

main.ts:136170

___

### field

• `Optional` **field**: `string`

response field
required field if you choose to specify custom_mode
possible values:
anchor
domain_from
domain_from_country
tld_from
page_from_encoding
page_from_language
item_type
page_from_status_code
semantic_location

#### Defined in

main.ts:136183

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
["rank",">","80"]
[["page_from_rank",">","55"],
"and",
["dofollow","=",true]]
[["first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["anchor","like","%seo%"],"or",["text_pre","like","%seo%"]]]
The full list of possible filters is available here.

#### Defined in

main.ts:136204

___

### include\_indirect\_links

• `Optional` **include\_indirect\_links**: `boolean`

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Defined in

main.ts:136257

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Defined in

main.ts:136251

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned backlinks
optional field
default value: 100
maximum value: 1000

#### Defined in

main.ts:136237

___

### mode

• `Optional` **mode**: `string`

results grouping type
optional field
possible grouping types:
as_is – returns all backlinks
one_per_domain – returns one backlink per domain
one_per_anchor – returns one backlink per anchor
default value: as_is

#### Defined in

main.ts:136163

___

### offset

• `Optional` **offset**: `number`

offset in the results array of the returned backlinks
optional field
default value: 0
if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks;
Note: the maximum value is 20,000, use the search_after_token if you would like to offset more results

#### Defined in

main.ts:136224

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
["rank,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["domain_from_rank,desc","page_from_rank,asc"]

#### Defined in

main.ts:136218

___

### search\_after\_token

• `Optional` **search\_after\_token**: `string`

token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
by specifying the unique search_after_token value from the response array, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task
Note: if the search_after_token is specified in the request, all other parameters should be identical to the previous request

#### Defined in

main.ts:136232

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:136263

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage to get backlinks for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Defined in

main.ts:136155

___

### value

• `Optional` **value**: `number`

number of backlinks to return per field
required field if you choose to specify custom_mode
can be set from 1 to 1000

#### Defined in

main.ts:136187
