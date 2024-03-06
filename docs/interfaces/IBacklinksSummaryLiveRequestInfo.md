[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksSummaryLiveRequestInfo

# Interface: IBacklinksSummaryLiveRequestInfo

## Implemented by

- [`BacklinksSummaryLiveRequestInfo`](../classes/BacklinksSummaryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [backlinks\_filters](IBacklinksSummaryLiveRequestInfo.md#backlinks_filters)
- [backlinks\_status\_type](IBacklinksSummaryLiveRequestInfo.md#backlinks_status_type)
- [include\_indirect\_links](IBacklinksSummaryLiveRequestInfo.md#include_indirect_links)
- [include\_subdomains](IBacklinksSummaryLiveRequestInfo.md#include_subdomains)
- [internal\_list\_limit](IBacklinksSummaryLiveRequestInfo.md#internal_list_limit)
- [tag](IBacklinksSummaryLiveRequestInfo.md#tag)
- [target](IBacklinksSummaryLiveRequestInfo.md#target)

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

[main.ts:129352](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129352)

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

[main.ts:129344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129344)

___


### include\_indirect\_links

• `Optional` **include\_indirect\_links**: `boolean`

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Defined in

[main.ts:129324](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129324)

___


### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Defined in

[main.ts:129318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129318)

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

[main.ts:129335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129335)

___


### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:129358](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129358)

___


### target

• `Optional` **target**: `string`

domain, subdomain or webpage to get data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Defined in

[main.ts:129313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L129313)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")