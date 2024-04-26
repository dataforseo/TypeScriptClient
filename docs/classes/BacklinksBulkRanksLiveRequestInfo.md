**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkRanksLiveRequestInfo

# Class: BacklinksBulkRanksLiveRequestInfo

## Implements

- [`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkRanksLiveRequestInfo(data)

> **new BacklinksBulkRanksLiveRequestInfo**(`data`?): [`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md)

#### Returns

[`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

#### Source

main.ts:145065

## Properties

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkRanksLiveRequestInfo`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkRanksLiveRequestInfo.md#tag)

#### Source

main.ts:145061

***

### targets?

> **`optional`** **targets**: `string`[]

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

#### Source

main.ts:145055

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:145074

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:145096

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)

#### Source

main.ts:145089
