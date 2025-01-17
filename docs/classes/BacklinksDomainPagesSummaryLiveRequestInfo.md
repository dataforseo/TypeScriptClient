[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainPagesSummaryLiveRequestInfo

# Class: BacklinksDomainPagesSummaryLiveRequestInfo

Defined in: main.ts:154490

## Implements

- [`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesSummaryLiveRequestInfo()

> **new BacklinksDomainPagesSummaryLiveRequestInfo**(`data`?): [`BacklinksDomainPagesSummaryLiveRequestInfo`](BacklinksDomainPagesSummaryLiveRequestInfo.md)

Defined in: main.ts:154590

#### Parameters

##### data?

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md)

#### Returns

[`BacklinksDomainPagesSummaryLiveRequestInfo`](BacklinksDomainPagesSummaryLiveRequestInfo.md)

## Properties

### backlinks\_filters?

> `optional` **backlinks\_filters**: `any`[]

Defined in: main.ts:154564

filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
"backlinks_filters": [["dofollow", "=", true]]

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`backlinks_filters`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#backlinks_filters)

***

### backlinks\_status\_type?

> `optional` **backlinks\_status\_type**: `string`

Defined in: main.ts:154525

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`backlinks_status_type`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#backlinks_status_type)

***

### exclude\_internal\_backlinks?

> `optional` **exclude\_internal\_backlinks**: `boolean`

Defined in: main.ts:154580

indicates whether the backlinks from subdomains of the target are excluded
optional field
if set to false, backlinks from the subdomains of the target domain will be ommited and you won’t receive the same domain in the response;
default value: true

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`exclude_internal_backlinks`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#exclude_internal_backlinks)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:154542

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike
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

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`filters`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#filters)

***

### include\_indirect\_links?

> `optional` **include\_indirect\_links**: `boolean`

Defined in: main.ts:154575

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`include_indirect_links`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#include_indirect_links)

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:154569

indicates if the subdomains of the target domain will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#include_subdomains)

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:154516

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

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#internal_list_limit)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:154500

the maximum number of returned anchors
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`limit`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:154505

offset in the results array of returned anchors
optional field
default value: 0
if you specify the 10 value, the first ten anchors in the results array will be omitted and the data will be provided for the successive anchors

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`offset`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:154556

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

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`order_by`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:154586

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:154495

domain, subdomain or webpage to get summary data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md).[`target`](../interfaces/IBacklinksDomainPagesSummaryLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:154599

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:154639

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainPagesSummaryLiveRequestInfo`](BacklinksDomainPagesSummaryLiveRequestInfo.md)

Defined in: main.ts:154632

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainPagesSummaryLiveRequestInfo`](BacklinksDomainPagesSummaryLiveRequestInfo.md)
