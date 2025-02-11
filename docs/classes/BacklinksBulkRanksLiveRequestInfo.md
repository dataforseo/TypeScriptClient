[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkRanksLiveRequestInfo

# Class: BacklinksBulkRanksLiveRequestInfo

Defined in: main.ts:160430

## Implements

- [`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkRanksLiveRequestInfo()

> **new BacklinksBulkRanksLiveRequestInfo**(`data`?): [`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

Defined in: main.ts:160459

#### Parameters

##### data?

[`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md)

#### Returns

[`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

## Properties

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:160455

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:160449

domains, subdomains or webpages to get rank for
required field
you can set up to 1000 domains, subdomains or webpages
the domain or subdomain should be specified without https:// and www.
the page should be specified with absolute URL (including http:// or https://)
example:
"targets": [
  "forbes.com",
  "cnn.com",
  "bbc.com",
  "yelp.com",
  "https://www.apple.com/iphone/",
  "https://ahrefs.com/blog/",
  "ibm.com",
  "https://variety.com/",
  "https://stackoverflow.com/",
  "www.trustpilot.com"
]

#### Implementation of

[`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:160468

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:160490

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

Defined in: main.ts:160483

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)
