**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksReferringDomainsLiveResultInfo

# Interface: IBacklinksReferringDomainsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> **`optional`** **items**: [`BacklinksReferringDomainsLiveItem`](../classes/BacklinksReferringDomainsLiveItem.md)[]

items array

#### Source

main.ts:141591

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the items array

#### Source

main.ts:141589

***

### target?

> **`optional`** **target**: `string`

target in a POST array

#### Source

main.ts:141583

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain

#### Source

main.ts:141587
