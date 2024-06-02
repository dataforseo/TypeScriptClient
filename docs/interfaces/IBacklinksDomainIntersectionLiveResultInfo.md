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

main.ts:143896

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:143894

***

### targets?

> **`optional`** **targets**: `Object`

target domains, subdomains or webpages in a POST array

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:143890

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results relevant to your request

#### Source

main.ts:143892
