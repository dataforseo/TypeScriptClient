[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksBulkReferringDomainsLiveItem

# Interface: IBacklinksBulkReferringDomainsLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### referring\_domains?

> `optional` **referring\_domains**: `number`

number of referring domains pointing to the target
note that we calculate main domains (root domains, like example.com) and their subdomains (e.g. blog.example.com) separately for this metric

#### Defined in

main.ts:150187

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Defined in

main.ts:150189

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

number of referring main domains pointing to the target
the number of primary (root) domains referring to your target

#### Defined in

main.ts:150192

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Defined in

main.ts:150194

***

### target?

> `optional` **target**: `string`

domain, subdomain or webpage from a POST array

#### Defined in

main.ts:150184
