[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IBacklinksDomainIntersectionLiveResultInfo

# Interface: IBacklinksDomainIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`BacklinksDomainIntersectionLiveItem`](../classes/BacklinksDomainIntersectionLiveItem.md)[]

contains domain that link to all targets from the POST array

#### Defined in

main.ts:149969

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:149967

***

### targets?

> `optional` **targets**: `object`

target domains, subdomains or webpages in a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:149963

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results relevant to your request

#### Defined in

main.ts:149965
