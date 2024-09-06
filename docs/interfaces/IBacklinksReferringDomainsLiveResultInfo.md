[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksReferringDomainsLiveResultInfo

# Interface: IBacklinksReferringDomainsLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`BacklinksReferringDomainsLiveItem`](../classes/BacklinksReferringDomainsLiveItem.md)[]

items array

#### Defined in

main.ts:144658

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the items array

#### Defined in

main.ts:144656

***

### target?

> `optional` **target**: `string`

target in a POST array

#### Defined in

main.ts:144650

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain

#### Defined in

main.ts:144654
