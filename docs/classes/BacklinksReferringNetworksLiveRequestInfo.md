[Documentation](../README.md) / [Exports](../modules.md) / BacklinksReferringNetworksLiveRequestInfo

# Class: BacklinksReferringNetworksLiveRequestInfo

## Implements

- [`IBacklinksReferringNetworksLiveRequestInfo`](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksReferringNetworksLiveRequestInfo.md#constructor)

### Properties

- [backlinks\_filters](BacklinksReferringNetworksLiveRequestInfo.md#backlinks_filters)
- [backlinks\_status\_type](BacklinksReferringNetworksLiveRequestInfo.md#backlinks_status_type)
- [exclude\_internal\_backlinks](BacklinksReferringNetworksLiveRequestInfo.md#exclude_internal_backlinks)
- [filters](BacklinksReferringNetworksLiveRequestInfo.md#filters)
- [include\_indirect\_links](BacklinksReferringNetworksLiveRequestInfo.md#include_indirect_links)
- [include\_subdomains](BacklinksReferringNetworksLiveRequestInfo.md#include_subdomains)
- [internal\_list\_limit](BacklinksReferringNetworksLiveRequestInfo.md#internal_list_limit)
- [limit](BacklinksReferringNetworksLiveRequestInfo.md#limit)
- [network\_address\_type](BacklinksReferringNetworksLiveRequestInfo.md#network_address_type)
- [offset](BacklinksReferringNetworksLiveRequestInfo.md#offset)
- [order\_by](BacklinksReferringNetworksLiveRequestInfo.md#order_by)
- [tag](BacklinksReferringNetworksLiveRequestInfo.md#tag)
- [target](BacklinksReferringNetworksLiveRequestInfo.md#target)

### Methods

- [init](BacklinksReferringNetworksLiveRequestInfo.md#init)
- [toJSON](BacklinksReferringNetworksLiveRequestInfo.md#tojson)
- [fromJS](BacklinksReferringNetworksLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksReferringNetworksLiveRequestInfo**(`data?`): [`BacklinksReferringNetworksLiveRequestInfo`](BacklinksReferringNetworksLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksReferringNetworksLiveRequestInfo`](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md) |

#### Returns

[`BacklinksReferringNetworksLiveRequestInfo`](BacklinksReferringNetworksLiveRequestInfo.md)

#### Defined in

main.ts:135400

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

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[backlinks_filters](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#backlinks_filters)

#### Defined in

main.ts:135374

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

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[backlinks_status_type](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#backlinks_status_type)

#### Defined in

main.ts:135335

___

### exclude\_internal\_backlinks

• `Optional` **exclude\_internal\_backlinks**: `boolean`

indicates whether the backlinks from subdomains of the target are excluded
optional field
if set to false, the backlinks from subdomains of the target will be ommited and you won’t receive the same domain in the response;
default value: true

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[exclude_internal_backlinks](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#exclude_internal_backlinks)

#### Defined in

main.ts:135390

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

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[filters](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#filters)

#### Defined in

main.ts:135352

___

### include\_indirect\_links

• `Optional` **include\_indirect\_links**: `boolean`

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[include_indirect_links](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#include_indirect_links)

#### Defined in

main.ts:135385

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[include_subdomains](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#include_subdomains)

#### Defined in

main.ts:135379

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

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[internal_list_limit](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#internal_list_limit)

#### Defined in

main.ts:135326

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned networks
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[limit](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#limit)

#### Defined in

main.ts:135310

___

### network\_address\_type

• `Optional` **network\_address\_type**: `string`

indicates the type of network to get data for
optional field
possible values: ip, subnet
default value: ip

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[network_address_type](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#network_address_type)

#### Defined in

main.ts:135305

___

### offset

• `Optional` **offset**: `number`

offset in the results array of returned networks
optional field
default value: 0
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[offset](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#offset)

#### Defined in

main.ts:135315

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

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[order_by](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#order_by)

#### Defined in

main.ts:135366

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[tag](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#tag)

#### Defined in

main.ts:135396

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage to get referring networks for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[IBacklinksReferringNetworksLiveRequestInfo](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md).[target](../interfaces/IBacklinksReferringNetworksLiveRequestInfo.md#target)

#### Defined in

main.ts:135300

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

main.ts:135409

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

main.ts:135450

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksReferringNetworksLiveRequestInfo`](BacklinksReferringNetworksLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksReferringNetworksLiveRequestInfo`](BacklinksReferringNetworksLiveRequestInfo.md)

#### Defined in

main.ts:135443
