[Documentation](../README.md) / [Exports](../modules.md) / BacklinksSummaryLiveRequestInfo

# Class: BacklinksSummaryLiveRequestInfo

## Implements

- [`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksSummaryLiveRequestInfo.md#constructor)

### Properties

- [backlinks\_filters](BacklinksSummaryLiveRequestInfo.md#backlinks_filters)
- [backlinks\_status\_type](BacklinksSummaryLiveRequestInfo.md#backlinks_status_type)
- [include\_indirect\_links](BacklinksSummaryLiveRequestInfo.md#include_indirect_links)
- [include\_subdomains](BacklinksSummaryLiveRequestInfo.md#include_subdomains)
- [internal\_list\_limit](BacklinksSummaryLiveRequestInfo.md#internal_list_limit)
- [tag](BacklinksSummaryLiveRequestInfo.md#tag)
- [target](BacklinksSummaryLiveRequestInfo.md#target)

### Methods

- [init](BacklinksSummaryLiveRequestInfo.md#init)
- [toJSON](BacklinksSummaryLiveRequestInfo.md#tojson)
- [fromJS](BacklinksSummaryLiveRequestInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksSummaryLiveRequestInfo**(`data?`): [`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksSummaryLiveRequestInfo`](../interfaces/IBacklinksSummaryLiveRequestInfo.md) |

#### Returns

[`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

#### Defined in

main.ts:134618

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

[IBacklinksSummaryLiveRequestInfo](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[backlinks_filters](../interfaces/IBacklinksSummaryLiveRequestInfo.md#backlinks_filters)

#### Defined in

main.ts:134608

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

[IBacklinksSummaryLiveRequestInfo](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[backlinks_status_type](../interfaces/IBacklinksSummaryLiveRequestInfo.md#backlinks_status_type)

#### Defined in

main.ts:134600

___

### include\_indirect\_links

• `Optional` **include\_indirect\_links**: `boolean`

indicates if indirect links to the target will be included in the results
optional field
if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
if set to false, indirect links will be ignored
default value: true

#### Implementation of

[IBacklinksSummaryLiveRequestInfo](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[include_indirect_links](../interfaces/IBacklinksSummaryLiveRequestInfo.md#include_indirect_links)

#### Defined in

main.ts:134580

___

### include\_subdomains

• `Optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[IBacklinksSummaryLiveRequestInfo](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[include_subdomains](../interfaces/IBacklinksSummaryLiveRequestInfo.md#include_subdomains)

#### Defined in

main.ts:134574

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

[IBacklinksSummaryLiveRequestInfo](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[internal_list_limit](../interfaces/IBacklinksSummaryLiveRequestInfo.md#internal_list_limit)

#### Defined in

main.ts:134591

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[IBacklinksSummaryLiveRequestInfo](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[tag](../interfaces/IBacklinksSummaryLiveRequestInfo.md#tag)

#### Defined in

main.ts:134614

___

### target

• `Optional` **target**: `string`

domain, subdomain or webpage to get data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)

#### Implementation of

[IBacklinksSummaryLiveRequestInfo](../interfaces/IBacklinksSummaryLiveRequestInfo.md).[target](../interfaces/IBacklinksSummaryLiveRequestInfo.md#target)

#### Defined in

main.ts:134569

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

main.ts:134627

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

main.ts:134654

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)

#### Defined in

main.ts:134647
