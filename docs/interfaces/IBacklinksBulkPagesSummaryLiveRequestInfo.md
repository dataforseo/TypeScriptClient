**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksBulkPagesSummaryLiveRequestInfo

# Interface: IBacklinksBulkPagesSummaryLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### include\_subdomains?

> **`optional`** **include\_subdomains**: `boolean`

indicates if the subdomains of the target will be included in the search
optional field
if set to false, the subdomains will be ignored
default value: true

#### Source

main.ts:148226

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Source

main.ts:148232

***

### targets?

> **`optional`** **targets**: `string`[]

domains, subdomains or webpages to get summary data for
required field
a domain or a subdomain should be specified without https:// and www.
a page should be specified with absolute URL (including http:// or https://)
you can specify up to 1000 pages, domains, or subdomains in each request.
note that the URLs you set in a single request cannot belong to more than 100 different domains.

#### Source

main.ts:148221
