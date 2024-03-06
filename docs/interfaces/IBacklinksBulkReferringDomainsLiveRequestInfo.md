[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBacklinksBulkReferringDomainsLiveRequestInfo

# Interface: IBacklinksBulkReferringDomainsLiveRequestInfo

## Implemented by

- [`BacklinksBulkReferringDomainsLiveRequestInfo`](../classes/BacklinksBulkReferringDomainsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [tag](IBacklinksBulkReferringDomainsLiveRequestInfo.md#tag)
- [targets](IBacklinksBulkReferringDomainsLiveRequestInfo.md#targets)

## Properties

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

[main.ts:140418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140418)

___


### targets

• `Optional` **targets**: `string`[]

domains, subdomains or webpages to get the number of referring domains for
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

#### Defined in

[main.ts:140412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L140412)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")