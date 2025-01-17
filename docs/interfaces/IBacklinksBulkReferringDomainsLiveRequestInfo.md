[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksBulkReferringDomainsLiveRequestInfo

# Interface: IBacklinksBulkReferringDomainsLiveRequestInfo

Defined in: main.ts:161364

## Indexable

\[`key`: `string`\]: `any`

## Properties

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:161389

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

***

### targets?

> `optional` **targets**: `string`[]

Defined in: main.ts:161383

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
