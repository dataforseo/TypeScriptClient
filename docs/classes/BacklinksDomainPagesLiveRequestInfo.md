[Documentation](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesLiveRequestInfo

# Class: BacklinksDomainPagesLiveRequestInfo

## Implements

- [`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainPagesLiveRequestInfo.md#constructor)

### Properties

- [backlinks\_filters](BacklinksDomainPagesLiveRequestInfo.md#backlinks_filters)
- [backlinks\_status\_type](BacklinksDomainPagesLiveRequestInfo.md#backlinks_status_type)
- [filters](BacklinksDomainPagesLiveRequestInfo.md#filters)
- [include\_subdomains](BacklinksDomainPagesLiveRequestInfo.md#include_subdomains)
- [internal\_list\_limit](BacklinksDomainPagesLiveRequestInfo.md#internal_list_limit)
- [limit](BacklinksDomainPagesLiveRequestInfo.md#limit)
- [offset](BacklinksDomainPagesLiveRequestInfo.md#offset)
- [order\_by](BacklinksDomainPagesLiveRequestInfo.md#order_by)
- [tag](BacklinksDomainPagesLiveRequestInfo.md#tag)
- [target](BacklinksDomainPagesLiveRequestInfo.md#target)

### Methods

- [init](BacklinksDomainPagesLiveRequestInfo.md#init)
- [toJSON](BacklinksDomainPagesLiveRequestInfo.md#tojson)
- [fromJS](BacklinksDomainPagesLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainPagesLiveRequestInfo**(`data?`): [`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainPagesLiveRequestInfo`](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md) |

#### Returns

[`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)

#### Defined in

main.ts:137934

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

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[backlinks_filters](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#backlinks_filters)

#### Defined in

main.ts:137919

___

### backlinks\_status\_type

• `Optional` **backlinks\_status\_type**: `string`

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[backlinks_status_type](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#backlinks_status_type)

#### Defined in

main.ts:137880

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
["meta.internal_links_count",">","1"]
[["meta.external_links_count",">","2"],
"and",
["backlinks",">","10"]]
[["first_visited",">","2017-10-23 11:31:45 +00:00"],
"and",
[["title","like","%seo%"],"or",["referring_domains",">","10"]]]
The full list of possible filters is available here.

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[filters](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#filters)

#### Defined in

main.ts:137897

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[include_subdomains](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#include_subdomains)

#### Defined in

main.ts:137924

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

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[internal_list_limit](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#internal_list_limit)

#### Defined in

main.ts:137871

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[limit](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#limit)

#### Defined in

main.ts:137855

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[offset](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#offset)

#### Defined in

main.ts:137860

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
["page_summary.backlinks,desc"]
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["page_summary.backlinks,desc","page_summary.rank,asc"]

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[order_by](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#order_by)

#### Defined in

main.ts:137911

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[tag](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#tag)

#### Defined in

main.ts:137930

___

### target

• `Optional` **target**: `string`

domain or subdomain
required field
a domain or a subdomain should be specified without https:// and www.
example:
forbes.com

#### Implementation of

[IBacklinksDomainPagesLiveRequestInfo](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md).[target](../interfaces/IBacklinksDomainPagesLiveRequestInfo.md#target)

#### Defined in

main.ts:137850

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:137943

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:137981

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)

#### Defined in

main.ts:137974
