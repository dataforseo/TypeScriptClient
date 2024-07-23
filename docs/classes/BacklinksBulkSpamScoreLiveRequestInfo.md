**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkSpamScoreLiveRequestInfo

# Class: BacklinksBulkSpamScoreLiveRequestInfo

## Implements

- [`IBacklinksBulkSpamScoreLiveRequestInfo`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkSpamScoreLiveRequestInfo(data)

> **new BacklinksBulkSpamScoreLiveRequestInfo**(`data`?): [`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkSpamScoreLiveRequestInfo`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md)

#### Returns

[`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)

#### Source

main.ts:150975

## Properties

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkSpamScoreLiveRequestInfo`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md#tag)

#### Source

main.ts:150971

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

[`IBacklinksBulkSpamScoreLiveRequestInfo`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md).[`targets`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md#targets)

#### Source

main.ts:150965

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:150984

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:151006

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)

#### Source

main.ts:150999
