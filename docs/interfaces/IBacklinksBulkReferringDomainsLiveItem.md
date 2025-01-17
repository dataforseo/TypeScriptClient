[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksBulkReferringDomainsLiveItem

# Interface: IBacklinksBulkReferringDomainsLiveItem

Defined in: main.ts:161455

## Indexable

\[`key`: `string`\]: `any`

## Properties

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:161460

number of referring domains pointing to the target
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:161462

number of domains pointing at least one nofollow link to the target

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:161465

number of referring main domains pointing to the target
the number of primary (root) domains referring to your target

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:161467

number of main domains pointing at least one nofollow link to the target

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:161457

domain, subdomain or webpage from a POST array
