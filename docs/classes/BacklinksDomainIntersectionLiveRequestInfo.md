[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionLiveRequestInfo

# Class: BacklinksDomainIntersectionLiveRequestInfo

Defined in: main.ts:157452

## Implements

- [`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionLiveRequestInfo()

> **new BacklinksDomainIntersectionLiveRequestInfo**(`data`?): [`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)

Defined in: main.ts:157576

#### Parameters

##### data?

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md)

#### Returns

[`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)

## Properties

### backlinks\_filters?

> `optional` **backlinks\_filters**: `any`[]

Defined in: main.ts:157542

filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
"backlinks_filters": [["dofollow", "=", true]]

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`backlinks_filters`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#backlinks_filters)

***

### backlinks\_status\_type?

> `optional` **backlinks\_status\_type**: `string`

Defined in: main.ts:157534

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your targets;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`backlinks_status_type`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#backlinks_status_type)

***

### exclude\_internal\_backlinks?

> `optional` **exclude\_internal\_backlinks**: `boolean`

Defined in: main.ts:157558

indicates whether the backlinks from subdomains of the target are excluded
optional field
if set to false, the backlinks from subdomains of the target will be omitted and you won’t receive the same domain in the response;
default value: true

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`exclude_internal_backlinks`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#exclude_internal_backlinks)

***

### exclude\_targets?

> `optional` **exclude\_targets**: `string`[]

Defined in: main.ts:157473

domains, subdomains or webpages you want to exclude
optional field
you can specify up to 10 domains, subdomains or webpages
if you use this array, results will contain the referring domains that link to targets but don’t link to exclude_targets
example:
"exclude_targets": [
"bbc.com",
"https://www.apple.com/iphone/*",
"https://dataforseo.com/apis/*"]

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`exclude_targets`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#exclude_targets)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:157490

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
you can use the % operator with like and not_like to match any string of zero or more characters
example:
["1.internal_links_count",">","1"]
[["2.referring_pages",">","2"],
"and",
["1.backlinks",">","10"]]
[["1.first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["2.target","like","%dataforseo.com%"],"or",["1.referring_domains",">","10"]]]
The full list of possible filters is available here.

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`filters`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#filters)

***

### include\_indirect\_links?

> `optional` **include\_indirect\_links**: `boolean`

Defined in: main.ts:157553

indicates if indirect links to the targets will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to a target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`include_indirect_links`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#include_indirect_links)

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:157547

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#include_subdomains)

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:157525

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

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#internal_list_limit)

***

### intersection\_mode?

> `optional` **intersection\_mode**: `string`

Defined in: main.ts:157566

indicates whether to intersect backlinks
optional field
use this field to intersect or merge results for the specified domains
possible values: all, partial
all – results are based on all backlinks;
partial – results are based on the intersecting backlinks only;
default value: all

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`intersection_mode`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#intersection_mode)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:157514

the maximum number of returned results
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`limit`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:157509

offset in the array of returned results
optional field
default value: 0
if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`offset`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:157504

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

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`order_by`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:157572

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `object`

Defined in: main.ts:157463

domains, subdomains or webpages to get links for
required field
you can set up to 20 domains, subdomains or webpages
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)
example:
"targets": {
"1": "http://planet.postgresql.org/",
"2": "http://gborg.postgresql.org/"
}

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:157585

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:157637

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)

Defined in: main.ts:157630

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)
