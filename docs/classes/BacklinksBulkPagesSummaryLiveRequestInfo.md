[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBulkPagesSummaryLiveRequestInfo

# Class: BacklinksBulkPagesSummaryLiveRequestInfo

## Implements

- [`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkPagesSummaryLiveRequestInfo()

> **new BacklinksBulkPagesSummaryLiveRequestInfo**(`data`?): [`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md)

#### Returns

[`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)

#### Defined in

main.ts:151122

## Properties

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#include_subdomains)

#### Defined in

main.ts:151112

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#tag)

#### Defined in

main.ts:151118

***

### targets?

> `optional` **targets**: `string`[]

domains, subdomains or webpages to get summary data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)
you can specify up to 1000 pages, domains, or subdomains in each request.
note that the URLs you set in a single request cannot belong to more than 100 different domains.

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#targets)

#### Defined in

main.ts:151107

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:151131

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:151154

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)

#### Defined in

main.ts:151147
