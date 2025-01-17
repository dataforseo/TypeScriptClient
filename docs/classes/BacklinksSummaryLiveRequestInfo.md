[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksSummaryLiveRequestInfo

# Class: BacklinksSummaryLiveRequestInfo

Defined in: main.ts:150014

## Implements

- [`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksSummaryLiveRequestInfo()

> **new BacklinksSummaryLiveRequestInfo**(`data`?): [`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

Defined in: main.ts:150074

#### Parameters

##### data?

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md)

#### Returns

[`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

## Properties

### backlinks\_filters?

> `optional` **backlinks\_filters**: `any`[]

Defined in: main.ts:150064

filter the backlinks of your target
optional field
you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
you can filter the backlinks by all fields available in the response of this endpoint
using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
example:
"backlinks_filters": ["dofollow", "=", true]

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`backlinks_filters`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#backlinks_filters)

***

### backlinks\_status\_type?

> `optional` **backlinks\_status\_type**: `string`

Defined in: main.ts:150056

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`backlinks_status_type`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#backlinks_status_type)

***

### exclude\_internal\_backlinks?

> `optional` **exclude\_internal\_backlinks**: `boolean`

Defined in: main.ts:150036

indicates if internal backlinks from subdomains to the target will be excluded from the results
optional field
if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target
if set to false, internal links will be included in the results
default value: true

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`exclude_internal_backlinks`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#exclude_internal_backlinks)

***

### include\_indirect\_links?

> `optional` **include\_indirect\_links**: `boolean`

Defined in: main.ts:150030

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`include_indirect_links`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#include_indirect_links)

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:150024

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#include_subdomains)

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:150047

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

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#internal_list_limit)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:150070

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:150019

domain, subdomain or webpage to get data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`target`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:150083

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:150111

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

Defined in: main.ts:150104

#### Parameters

##### data

`any`

#### Returns

[`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)
