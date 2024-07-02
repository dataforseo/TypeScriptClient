**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksDomainIntersectionLiveResultInfo

# Interface: IBacklinksDomainIntersectionLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`BacklinksDomainIntersectionLiveItem`](../classes/BacklinksDomainIntersectionLiveItem.md)[]

contains domain that link to all targets from the POST array

#### Source

main.ts:145294

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:145292

***

### targets?

> **`optional`** **targets**: `Object`

target domains, subdomains or webpages in a POST array

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:145288

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results relevant to your request

#### Source

main.ts:145290
