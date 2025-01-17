[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkSpamScoreLiveRequestInfo

# Class: BacklinksBulkSpamScoreLiveRequestInfo

Defined in: main.ts:160944

## Implements

- [`IBacklinksBulkSpamScoreLiveRequestInfo`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkSpamScoreLiveRequestInfo()

> **new BacklinksBulkSpamScoreLiveRequestInfo**(`data`?): [`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)

Defined in: main.ts:160973

#### Parameters

##### data?

[`IBacklinksBulkSpamScoreLiveRequestInfo`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md)

#### Returns

[`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)

## Properties

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:160969

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IBacklinksBulkSpamScoreLiveRequestInfo`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md).[`tag`](../interfaces/IBacklinksBulkSpamScoreLiveRequestInfo.md#tag)

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:160963

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

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:160982

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:161004

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)

Defined in: main.ts:160997

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)
