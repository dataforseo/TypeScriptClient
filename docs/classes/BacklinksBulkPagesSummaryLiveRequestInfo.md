[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkPagesSummaryLiveRequestInfo

# Class: BacklinksBulkPagesSummaryLiveRequestInfo

Defined in: main.ts:162570

## Implements

- [`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkPagesSummaryLiveRequestInfo()

> **new BacklinksBulkPagesSummaryLiveRequestInfo**(`data`?): [`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)

Defined in: main.ts:162592

#### Parameters

##### data?

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md)

#### Returns

[`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)

## Properties

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:162582

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`include_subdomains`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#include_subdomains)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:162588

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:162577

domains, subdomains or webpages to get summary data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)
you can specify up to 1000 pages, domains, or subdomains in each request.
note that the URLs you set in a single request cannot belong to more than 100 different domains.

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveRequestInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksBulkPagesSummaryLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:162601

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:162624

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)

Defined in: main.ts:162617

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)
