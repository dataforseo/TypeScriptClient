[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkBacklinksLiveRequestInfo

# Class: BacklinksBulkBacklinksLiveRequestInfo

Defined in: main.ts:160608

## Implements

- [`IBacklinksBulkBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkBacklinksLiveRequestInfo()

> **new BacklinksBulkBacklinksLiveRequestInfo**(`data`?): [`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

Defined in: main.ts:160637

#### Parameters

##### data?

[`IBacklinksBulkBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md)

#### Returns

[`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

## Properties

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:160633

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:160627

domains, subdomains or webpages to get the number of backlinks for
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

[`IBacklinksBulkBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md#targets)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:160646

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:160668

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

Defined in: main.ts:160661

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)
