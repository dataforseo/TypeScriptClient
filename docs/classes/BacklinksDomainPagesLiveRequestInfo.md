**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksDomainPagesLiveRequestInfo

# Class: BacklinksDomainPagesLiveRequestInfo

## Implements

- [`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesLiveRequestInfo(data)

> **new BacklinksDomainPagesLiveRequestInfo**(`data`?): [`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md)

#### Returns

[`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)

#### Source

main.ts:139471

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

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`backlinks_filters`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#backlinks_filters)

#### Source

main.ts:139456

***

### backlinks\_status\_type?

> **`optional`** **backlinks\_status\_type**: `string`

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Implementation of

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`backlinks_status_type`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#backlinks_status_type)

#### Source

main.ts:139417

***

### filters?

> **`optional`** **filters**: `any`[]

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, `<>`, in, not_in, like, not_like, ilike, not_ilike
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["meta.internal_links_count",">`","1"]
[["meta.external_links_count",">","2"],
"and",
["backlinks",">","10"]]
[["first_visited",">","2017-10-23 11:31:45 +00:00"],
"and",
[["title","like","%seo%"],"or",["referring_domains",">","10"]]]
The full list of possible filters is available here.

#### Implementation of

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`filters`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#filters)

#### Source

main.ts:139434

***

### include\_subdomains?

> **`optional`** **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#include_subdomains)

#### Source

main.ts:139461

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

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#internal_list_limit)

#### Source

main.ts:139408

***

### limit?

> **`optional`** **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`limit`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#limit)

#### Source

main.ts:139392

***

### offset?

> **`optional`** **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`offset`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#offset)

#### Source

main.ts:139397

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
["page_summary.backlinks,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["page_summary.backlinks,desc","page_summary.rank,asc"]

#### Implementation of

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`order_by`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#order_by)

#### Source

main.ts:139448

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#tag)

#### Source

main.ts:139467

***

### target?

> **`optional`** **target**: `string`

domain or subdomain
required field
a domain or a subdomain should be specified without https:// and www.
example:
forbes.com

#### Implementation of

[`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[`target`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#target)

#### Source

main.ts:139387

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:139480

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:139518

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)

#### Source

main.ts:139511
