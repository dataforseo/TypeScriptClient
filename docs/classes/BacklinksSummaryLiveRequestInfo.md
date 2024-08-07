**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksSummaryLiveRequestInfo

# Class: BacklinksSummaryLiveRequestInfo

## Implements

- [`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksSummaryLiveRequestInfo(data)

> **new BacklinksSummaryLiveRequestInfo**(`data`?): [`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md)

#### Returns

[`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

#### Source

main.ts:140076

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

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`backlinks_filters`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#backlinks_filters)

#### Source

main.ts:140066

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

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`backlinks_status_type`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#backlinks_status_type)

#### Source

main.ts:140058

***

### exclude\_internal\_backlinks?

> **`optional`** **exclude\_internal\_backlinks**: `boolean`

indicates if internal backlinks from subdomains to the target will be excluded from the results
optional field
if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target
if set to false, internal links will be included in the results
default value: true

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`exclude_internal_backlinks`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#exclude_internal_backlinks)

#### Source

main.ts:140038

***

### include\_indirect\_links?

> **`optional`** **include\_indirect\_links**: `boolean`

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`include_indirect_links`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#include_indirect_links)

#### Source

main.ts:140032

***

### include\_subdomains?

> **`optional`** **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#include_subdomains)

#### Source

main.ts:140026

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

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#internal_list_limit)

#### Source

main.ts:140049

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#tag)

#### Source

main.ts:140072

***

### target?

> **`optional`** **target**: `string`

domain, subdomain or webpage to get data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[`target`](../interfaces/IBacklinksSummaryLiveRequestInfo.md#target)

#### Source

main.ts:140021

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:140085

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:140113

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

#### Source

main.ts:140106
