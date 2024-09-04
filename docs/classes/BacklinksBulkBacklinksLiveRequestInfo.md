[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksBulkBacklinksLiveRequestInfo

# Class: BacklinksBulkBacklinksLiveRequestInfo

## Implements

- [`IBacklinksBulkBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkBacklinksLiveRequestInfo()

> **new BacklinksBulkBacklinksLiveRequestInfo**(`data`?): [`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md)

#### Returns

[`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

#### Defined in

main.ts:149331

## Properties

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkBacklinksLiveRequestInfo`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkBacklinksLiveRequestInfo.md#tag)

#### Defined in

main.ts:149327

***

### targets?

> `optional` **targets**: `string`[]

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

#### Defined in

main.ts:149321

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:149340

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:149362

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)

#### Defined in

main.ts:149355
