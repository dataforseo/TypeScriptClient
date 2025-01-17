[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksReferringDomainsLiveResultInfo

# Interface: IBacklinksReferringDomainsLiveResultInfo

Defined in: main.ts:155921

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`BacklinksReferringDomainsLiveItem`](../classes/BacklinksReferringDomainsLiveItem.md)[]

Defined in: main.ts:155931

items array

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:155929

number of items in the items array

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:155923

target in a POST array

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:155927

total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain
