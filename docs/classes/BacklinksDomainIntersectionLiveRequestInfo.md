[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksDomainIntersectionLiveRequestInfo

# Class: BacklinksDomainIntersectionLiveRequestInfo

## Implements

- [`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainIntersectionLiveRequestInfo.md#constructor)

### Properties

- [backlinks\_filters](BacklinksDomainIntersectionLiveRequestInfo.md#backlinks_filters)
- [backlinks\_status\_type](BacklinksDomainIntersectionLiveRequestInfo.md#backlinks_status_type)
- [exclude\_internal\_backlinks](BacklinksDomainIntersectionLiveRequestInfo.md#exclude_internal_backlinks)
- [exclude\_targets](BacklinksDomainIntersectionLiveRequestInfo.md#exclude_targets)
- [filters](BacklinksDomainIntersectionLiveRequestInfo.md#filters)
- [include\_indirect\_links](BacklinksDomainIntersectionLiveRequestInfo.md#include_indirect_links)
- [include\_subdomains](BacklinksDomainIntersectionLiveRequestInfo.md#include_subdomains)
- [internal\_list\_limit](BacklinksDomainIntersectionLiveRequestInfo.md#internal_list_limit)
- [intersection\_mode](BacklinksDomainIntersectionLiveRequestInfo.md#intersection_mode)
- [limit](BacklinksDomainIntersectionLiveRequestInfo.md#limit)
- [offset](BacklinksDomainIntersectionLiveRequestInfo.md#offset)
- [order\_by](BacklinksDomainIntersectionLiveRequestInfo.md#order_by)
- [tag](BacklinksDomainIntersectionLiveRequestInfo.md#tag)
- [targets](BacklinksDomainIntersectionLiveRequestInfo.md#targets)

### Methods

- [init](BacklinksDomainIntersectionLiveRequestInfo.md#init)
- [toJSON](BacklinksDomainIntersectionLiveRequestInfo.md#tojson)
- [fromJS](BacklinksDomainIntersectionLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainIntersectionLiveRequestInfo**(`data?`): [`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainIntersectionLiveRequestInfo`](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md) |

#### Returns

[`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)

#### Defined in

[main.ts:136497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136497)

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

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[backlinks_filters](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#backlinks_filters)

#### Defined in

[main.ts:136463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136463)

___

### backlinks\_status\_type

• `Optional` **backlinks\_status\_type**: `string`

set what backlinks to return and count
optional field
you can use this field to choose what backlinks will be returned and used for aggregated metrics for your targets;
possible values:
all – all backlinks will be returned and counted;
live – backlinks found during the last check will be returned and counted;
lost – lost backlinks will be returned and counted;
default value: live

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[backlinks_status_type](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#backlinks_status_type)

#### Defined in

[main.ts:136455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136455)

___

### exclude\_internal\_backlinks

• `Optional` **exclude\_internal\_backlinks**: `boolean`

indicates whether the backlinks from subdomains of the target are excluded
optional field
if set to false, the backlinks from subdomains of the target will be omitted and you won’t receive the same domain in the response;
default value: true

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[exclude_internal_backlinks](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#exclude_internal_backlinks)

#### Defined in

[main.ts:136479](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136479)

___

### exclude\_targets

• `Optional` **exclude\_targets**: `string`[]

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

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[exclude_targets](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#exclude_targets)

#### Defined in

[main.ts:136394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136394)

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
["1.internal_links_count",">","1"]
[["2.referring_pages",">","2"],
"and",
["1.backlinks",">","10"]]
[["1.first_seen",">","2017-10-23 11:31:45 +00:00"],
"and",
[["2.target","like","%dataforseo.com%"],"or",["1.referring_domains",">","10"]]]
The full list of possible filters is available here.

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[filters](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#filters)

#### Defined in

[main.ts:136411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136411)

___

### include\_indirect\_links

• `Optional` **include\_indirect\_links**: `boolean`

indicates if indirect links to the targets will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to a target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[include_indirect_links](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#include_indirect_links)

#### Defined in

[main.ts:136474](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136474)

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[include_subdomains](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#include_subdomains)

#### Defined in

[main.ts:136468](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136468)

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

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[internal_list_limit](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#internal_list_limit)

#### Defined in

[main.ts:136446](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136446)

___

### intersection\_mode

• `Optional` **intersection\_mode**: `string`

indicates whether to intersect backlinks
optional field
use this field to intersect or merge results for the specified domains
possible values: all, partical
all – results are based on all backlinks;
partial – results are based on the intersecting backlinks only;
default value: all

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[intersection_mode](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#intersection_mode)

#### Defined in

[main.ts:136487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136487)

___

### limit

• `Optional` **limit**: `number`

the maximum number of returned results
optional field
default value: 100
maximum value: 1000

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[limit](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#limit)

#### Defined in

[main.ts:136435](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136435)

___

### offset

• `Optional` **offset**: `number`

offset in the array of returned results
optional field
default value: 0
if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[offset](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#offset)

#### Defined in

[main.ts:136430](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136430)

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

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[order_by](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#order_by)

#### Defined in

[main.ts:136425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136425)

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[tag](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#tag)

#### Defined in

[main.ts:136493](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136493)

___

### targets

• `Optional` **targets**: `Object`

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

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IBacklinksDomainIntersectionLiveRequestInfo](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md).[targets](../interfaces/IBacklinksDomainIntersectionLiveRequestInfo.md#targets)

#### Defined in

[main.ts:136384](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136384)

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

[main.ts:136506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136506)

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

[main.ts:136558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136558)

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)

#### Defined in

[main.ts:136551](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L136551)
