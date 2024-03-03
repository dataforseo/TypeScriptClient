[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksBulkBacklinksLiveRequestInfo

# Interface: IBacklinksBulkBacklinksLiveRequestInfo

## Implemented by

- [`BacklinksBulkBacklinksLiveRequestInfo`](../classes/BacklinksBulkBacklinksLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [tag](IBacklinksBulkBacklinksLiveRequestInfo.md#tag)
- [targets](IBacklinksBulkBacklinksLiveRequestInfo.md#targets)

## Properties

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:139882

___

### targets

• `Optional` **targets**: `string`[]

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

#### Defined in

main.ts:139876
