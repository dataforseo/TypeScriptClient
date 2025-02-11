[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksDomainIntersectionLiveResultInfo

# Interface: IBacklinksDomainIntersectionLiveResultInfo

Defined in: main.ts:158297

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`BacklinksDomainIntersectionLiveItem`](../classes/BacklinksDomainIntersectionLiveItem.md)[]

Defined in: main.ts:158305

contains domain that link to all targets from the POST array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:158303

the number of results returned in the items array

***

### targets?

> `optional` **targets**: `object`

Defined in: main.ts:158299

target domains, subdomains or webpages in a POST array

#### Index Signature

\[`key`: `string`\]: `string`

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:158301

total amount of results relevant to your request
