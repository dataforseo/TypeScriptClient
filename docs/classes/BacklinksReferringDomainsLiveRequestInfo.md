**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksReferringDomainsLiveRequestInfo

# Class: BacklinksReferringDomainsLiveRequestInfo

## Implements

- [`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringDomainsLiveRequestInfo(data)

> **new BacklinksReferringDomainsLiveRequestInfo**(`data`?): [`BacklinksReferringDomainsLiveRequestInfo`](BacklinksReferringDomainsLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md)

#### Returns

[`BacklinksReferringDomainsLiveRequestInfo`](BacklinksReferringDomainsLiveRequestInfo.md)

#### Source

main.ts:142533

## Properties

### backlinks\_filters?

> **`optional`** **backlinks\_filters**: `any`[]

filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
"backlinks_filters": ["dofollow", "=", true]

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`backlinks_filters`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#backlinks_filters)

#### Source

main.ts:142507

***

### backlinks\_status\_type?

> **`optional`** **backlinks\_status\_type**: `string`

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`backlinks_status_type`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#backlinks_status_type)

#### Source

main.ts:142468

***

### exclude\_internal\_backlinks?

> **`optional`** **exclude\_internal\_backlinks**: `boolean`

indicates whether the backlinks from subdomains of the target are excluded
optional field
if set to false, the backlinks from subdomains of the target will be ommited and you won’t receive the same domain in the response;
default value: true

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`exclude_internal_backlinks`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#exclude_internal_backlinks)

#### Source

main.ts:142523

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, `<>`, in, not_in, like, not_like
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["referring_pages",">`","1"]
[["referring_pages",">","2"],
"and",
["backlinks",">","10"]]
[["first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["domain","like","%dataforseo.com%"],"or",["referring_domains",">","10"]]]
The full list of possible filters is available here.

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`filters`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#filters)

#### Source

main.ts:142485

***

### include\_indirect\_links?

> **`optional`** **include\_indirect\_links**: `boolean`

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`include_indirect_links`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#include_indirect_links)

#### Source

main.ts:142518

***

### include\_subdomains?

> **`optional`** **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#include_subdomains)

#### Source

main.ts:142512

***

### internal\_list\_limit?

> **`optional`** **internal\_list\_limit**: `number`

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

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#internal_list_limit)

#### Source

main.ts:142459

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned domains
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`limit`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#limit)

#### Source

main.ts:142443

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned domains
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`offset`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#offset)

#### Source

main.ts:142448

***

### order\_by?

> **`optional`** **order\_by**: `string`[]

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

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`order_by`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#order_by)

#### Source

main.ts:142499

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#tag)

#### Source

main.ts:142529

***

### target?

> **`optional`** **target**: `string`

domain, subdomain or webpage to get referring domains for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[`IBacklinksReferringDomainsLiveRequestInfo`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md).[`target`](../interfaces/IBacklinksReferringDomainsLiveRequestInfo.md#target)

#### Source

main.ts:142438

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:142542

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:142582

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksReferringDomainsLiveRequestInfo`](BacklinksReferringDomainsLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksReferringDomainsLiveRequestInfo`](BacklinksReferringDomainsLiveRequestInfo.md)

#### Source

main.ts:142575
